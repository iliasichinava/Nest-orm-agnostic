import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from './redis.service';

describe('RedisService', () => {
  let service: RedisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisService],
    }).compile();

    service = module.get<RedisService>(RedisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should set a value in Redis', async () => {
    const key = 'testKey';
    const value = 'testValue';

    await service.set(key, value);
    const result = await service.get(key);

    expect(result).toBe(value);
  });

  it('should get a value from Redis', async () => {
    const key = 'testKey';
    const value = 'testValue';

    await service.set(key, value);
    const result = await service.get(key);

    expect(result).toBe(value);
  });

  it('should delete a value from Redis', async () => {
    const key = 'testKey';
    const value = 'testValue';

    await service.set(key, value);
    await service.delete(key);
    const result = await service.get(key);

    expect(result).toBeNull();
  });
});
