import { Inject, Injectable } from '@nestjs/common';
import { RedisRepository } from './redis.repository';

@Injectable()
export class RedisService {
  constructor( @Inject(RedisRepository) private readonly redisRepository: RedisRepository) {}

  public async get(key: string): Promise<string | null> {
    return await this.redisRepository.findOne(key);
  }

  public async set(key: string, value: string): Promise<void> {
    await this.redisRepository.create(key, value);
  }

  public async update(key: string, value: string): Promise<void> {
    await this.redisRepository.update(key, value);
  }

  public async delete(key: string): Promise<number> {
    return await this.redisRepository.delete(key);
  }
}
