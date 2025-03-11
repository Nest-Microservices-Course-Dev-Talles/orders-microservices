import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class OrderItemDto {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  price: number;
}
