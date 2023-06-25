// @nest imports
import { DynamicModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypeOrmModule } from '@nestjs/typeorm';

// @types imports
import { SEQUELIZE_TOKEN, TYPEORM_TOKEN } from 'types/constants';
import { OrmProvider } from 'types/interfaces';
import { ORM } from 'types/enums';

// @app repositories
import { UserTypeormEntity } from '@app/typeorm/user.typeorm.entity';
import { UserSequelizeModel } from '@app/sequelize/user.sequelize.model';

// @app ORMs
import { TypeormModule } from '@app/typeorm';
import { SequelizeModule as SequelizeOrmModule } from "@app/sequelize";

// @other imports
import { PostgreService } from './postgre.service';
import { TypeOrmRepository } from '../../typeorm/src/typeorm.repository';
import { SequelizeRepository } from '../../sequelize/src/sequelize.repository';

@Module({
  imports: [TypeormModule, SequelizeOrmModule],
  providers: [TypeOrmRepository, SequelizeRepository, PostgreService],
  exports: [PostgreService]
})
export class PostgreModule {
  public static forRoot(orm: ORM, connectionOptions?: any): DynamicModule {
    let ormProvider: OrmProvider;
    let ormModule: any;
    let ormFeatureModule: any;

    switch (orm) {
      case ORM.TYPEORM:
        ormProvider = { provide: TYPEORM_TOKEN, useClass: TypeOrmRepository };
        ormModule = TypeOrmModule.forRoot({ ...connectionOptions, entities: [UserTypeormEntity] });
        ormFeatureModule = TypeOrmModule.forFeature([UserTypeormEntity]);
        break;

      case ORM.SEQUELIZE:
        ormProvider = { provide: SEQUELIZE_TOKEN, useClass: SequelizeRepository };
        ormModule = SequelizeModule.forRoot({ ...connectionOptions, entities: [UserSequelizeModel] });
        ormFeatureModule = SequelizeModule.forFeature([UserSequelizeModel]);
        break;

      default:
        throw new Error(`Unsupported ORM: ${orm}`);
    }

    return {
      module: PostgreModule,
      imports: [ormModule, ormFeatureModule],
      providers: [ormProvider, PostgreService],
      exports: [PostgreService],
    };
  }
}
