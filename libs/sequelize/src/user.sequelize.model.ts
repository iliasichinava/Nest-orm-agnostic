import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Entity } from "../../../types/interfaces";

@Table
export class UserSequelizeModel extends Model implements Entity {
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;
    
    @Column(DataType.STRING)
    wallet!: string;

    @Column(DataType.STRING)
    password!: string;
}