import { Module } from '@nestjs/common';

import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  // 데코레이터 함수 - 클래스에 함수 기능을 추가할 수 있다
  imports: [MoviesModule],
  controllers: [AppController], // controller는 기본적으로 url을 가져오고 함수를 실행하는 것 이다
  providers: [],
})
export class AppModule {}
