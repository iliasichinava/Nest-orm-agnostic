import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeormEntity } from './user.typeorm.entity';
import { TypeOrmRepository } from './typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeormEntity])],
  providers: [TypeOrmRepository],
  exports: [TypeOrmRepository],
})
export class TypeormModule {}
