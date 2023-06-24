import { Injectable, Inject } from '@nestjs/common';
import { RedisService } from '@app/redis';

@Injectable()
export class AppService {
  public constructor(@Inject(RedisService) private readonly redisService: RedisService) {}

  public async post(data: string): Promise<string> {
    await this.redisService.set('ilia', JSON.stringify(data));
    const value = await this.redisService.get('ilia');
    console.log(value, "value");
    return value ? value.toString() : '';
  }
}
