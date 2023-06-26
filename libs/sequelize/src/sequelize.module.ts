import { Module } from '@nestjs/common';
import { SequelizeRepository } from './sequelize.repository';
import { SequelizeModule as SequelizeOrmModule } from '@nestjs/sequelize';
import { UserSequelizeModel } from './user.sequelize.model';

@Module({
  imports: [SequelizeOrmModule.forFeature([UserSequelizeModel])],
  providers: [SequelizeRepository],
  exports: [SequelizeRepository]
})
export class SequelizeModule {}
