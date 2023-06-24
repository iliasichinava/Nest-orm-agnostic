export interface OrmRepository<T> {
    findById(id: number): Promise<T | null>;
    create(entity: T): Promise<T>;
    update(id: number, entity: T): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}