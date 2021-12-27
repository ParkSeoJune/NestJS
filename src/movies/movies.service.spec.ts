import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { deepStrictEqual } from 'assert';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    // 테스트를 하기 전에 실행되는 것
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  /*
  it('should be 4', () => {
    expect(2 + 2).toEqual(4);
  }); // 테스트하고 싶어하는 부분을 테스트하는 function을 만드는 것이다, 테스트에는 조건이 필요하다
  */
  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array); // toBeInstanceOf는 Array의 instace가 될 것이다
    });
  }); // getAll을 호출하고 result가 배열 인스턴스인지 테스트하는 것

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      }); // 테스트하기 위해 Movie를 하나 만든 것

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    }); // getOne()을 테스트할 때 Movie가 create되어 있지 않다면 문제가 될 수 있다

    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
