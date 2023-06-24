import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TYPEORM_TOKEN } from 'types/constants';
import { OrmProvider } from 'types/interfaces';
import { ORM } from 'types/enums';

import { TypeOrmRepository } from '../../typeorm/src/typeorm.repository';
import { PostgreService } from './postgre.service';
import { UserTypeormEntity } from '@app/typeorm/user.typeorm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeormEntity])],
  providers: [TypeOrmRepository, PostgreService],
  exports: [PostgreService],
})
export class PostgreModule {
  public static forRoot(orm: ORM, connectionOptions?: any): DynamicModule {
    let ormProvider: OrmProvider;
    let ormModule: any;

    switch (orm) {
      case ORM.TYPEORM:
        ormProvider = {
          provide: TYPEORM_TOKEN,
          useClass: TypeOrmRepository,
        };
        ormModule = TypeOrmModule.forRoot({
          ...connectionOptions,
          entities: [UserTypeormEntity],
        });
        
        break;

      default:
        throw new Error(`Unsupported ORM: ${orm}`);
    }

    return {
      module: PostgreModule,
      imports: [ormModule],
      providers: [ormProvider],
    };
  }
}
