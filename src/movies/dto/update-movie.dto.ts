import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create.movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
// CreateDTO랑은 다른 점은 모든게 필수사항이 아니라는 것이다
// PartialType은 베이스타입이 필요하다
