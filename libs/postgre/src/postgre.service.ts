import { Injectable } from '@nestjs/common';
import { OrmRepository } from 'types/interfaces/Repository';
import { Entity } from 'types/interfaces';

@Injectable()
export class PostgreService {
  private repository: OrmRepository<Entity>;

  public constructor() {}

  public setRepository(repository: OrmRepository<Entity>): void {
    this.repository = repository;
  }

  public async findById(id: number): Promise<Entity | null> {
    return await this.repository.findById(id);
  }

  public async create(entity: Entity): Promise<Entity> {
    return await this.repository.create(entity);
  }

  public async update(id: number, entity: Entity): Promise<boolean> {
    return await this.repository.update(id, entity);
  }

  public async delete(id: number): Promise<boolean> {
    return await this.repository.delete(id);
  }
}
