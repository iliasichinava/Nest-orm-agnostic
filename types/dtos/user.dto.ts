import { IsHexadecimal, IsString, Length } from 'class-validator';

export class UserDto {
  @IsString()
  @IsHexadecimal()
  wallet: string;

  @IsString()
  @Length(6, 20)
  password: string;
}
