import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisRepository {
  private redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({
      host: 'localhost', // Replace with your Redis server host
      port: 6379, // Replace with your Redis server port
    });
  }

  async findOne(key: string): Promise<string | null> {
    return await this.redisClient.get(key);
  }

  async create(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value);
  }

  async update(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value);
  }

  async delete(key: string): Promise<number> {
    return await this.redisClient.del(key);
  }
}
