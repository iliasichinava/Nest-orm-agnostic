import { Entity as TypeormEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Entity } from 'types/interfaces';

@TypeormEntity("users")
export class UserTypeormEntity implements Entity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  wallet!: string;

  @Column()
  password!: string;

}
