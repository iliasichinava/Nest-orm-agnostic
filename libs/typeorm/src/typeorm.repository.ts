import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmRepository } from 'types/interfaces/Repository';
import { UserTypeormEntity as User } from './user.typeorm.entity';

@Injectable()
export class TypeOrmRepository implements OrmRepository<User> {
  public constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async findById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  public async create(entity: User): Promise<User> {
    return await this.userRepository.save(entity);
  }

  public async update(id: number, entity: User): Promise<boolean> {
    const user = await this.findById(id);
    if (user) {
      await this.userRepository.save({ ...user, ...entity });
      return true;
    }
    return false;
  }

  public async delete(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return result.affected > 0;
  }
}
