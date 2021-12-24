import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create.movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {} // constructor는 moviesService라는 클래스를 가진다

  @Get()
  getAll(/*@Req() req, @Res() res*/): Movie[] {
    // Request나 Response를 이렇게 처리할 수 있고 이렇게 하면 Express 앱에 접속할 수 있다
    // Movie Array를 리턴
    // res.json() Express에서 response 객체를 사용하는 방법 // Express나 Fastify를 사용한다면 이런 식으로 쓰지 않는게 가장 좋은 방법
    return this.moviesService.getAll();
  }
  /*
  @Get('search') // search 부분이 get보다 밑에 있으면 NestJS는 search를 id로 판단함, 즉 NestJS가 search가 id라고 생각하는 것이다
  search(@Query('year') searchingYear: string) {
    // search?year=2000을 써서 보냈을 때 We are searching for a movie made after: 2000이 return 됨
    return `We are searching for a movie made after: ${searchingYear}`;
  }
  */

  @Get('/:id') // 얻으려고 하는 이름과 Param의 이름은 같아야 한다
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId); // 이야 - 멋있다
  }

  @Post() // 데이터를 받을때는 Body를 쓴다
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData); // git login을 하자!
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    // url에서 id를 가져오고 이걸 movieid라는 string 변수로 저장함
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id') // 업데이트
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    // 내가 필요한 parameter를 직접 요철해야함
    return this.moviesService.update(movieId, updateData);
  }
}
