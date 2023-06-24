import { Module } from '@nestjs/common';
import { RedisRepository } from './redis.repository';
import { RedisService } from './redis.service';

@Module({
  providers: [RedisRepository, RedisService],
  exports: [RedisRepository, RedisService],
})
export class RedisModule {}