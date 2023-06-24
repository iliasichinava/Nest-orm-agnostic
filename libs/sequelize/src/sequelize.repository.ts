import { Injectable } from '@nestjs/common';
import { OrmRepository } from 'types/interfaces/Repository';
import { UserSequelizeModel as User } from './user.sequelize.model';
import { InjectModel } from '@nestjs/sequelize/dist/common/sequelize.decorators';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class SequelizeRepository implements OrmRepository<User> {
  
  public constructor(@InjectModel(User) private userRepository: Repository<User>) {}

  public async findById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  public async create(entity: User): Promise<User> {
    return await this.userRepository.create<User>({ entity });
  }

  public async update(id: number, entity: User): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      await user.update(entity);
      return true;
    }
    return false;
  }

  public async delete(id: number): Promise<boolean> {
    const deletedRows = await this.userRepository.destroy({ where: { id } });
    return deletedRows > 0;
  }

}
