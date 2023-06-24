import { Type } from "@nestjs/common";
import { Entity } from "./Entity";
import { OrmRepository } from "./Repository";

export interface OrmProvider {
    provide: string,
    useClass: Type<OrmRepository<Entity>>;
}