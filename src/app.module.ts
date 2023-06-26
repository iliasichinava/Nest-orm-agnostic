import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from '@app/redis';
import { PostgreModule } from '@app/postgre';
import { ORM } from 'types/enums';

@Module({
  imports: [
    RedisModule,
    PostgreModule,
    PostgreModule.forRoot(ORM.TYPEORM, {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'iliamagaria',
      database: 'postgres',
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
