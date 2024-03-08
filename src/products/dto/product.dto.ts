import { IsNotEmpty, IsString } from 'class-validator';

export class Product {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;
}
