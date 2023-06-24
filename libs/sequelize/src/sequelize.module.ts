import { Module } from '@nestjs/common';
import { SequelizeRepository } from './sequelize.repository';

@Module({
  providers: [SequelizeRepository],
  exports: [SequelizeRepository],
})
export class SequelizeModule {}
