import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../../shared/models/response-model/Movie.model';

@Pipe({
  name: 'transformGenres',
})
export class TransformGenresPipe implements PipeTransform {
  transform(genres: number[]): string[] {
    const gnres: Record<number, Genre> = {
      1: 'драма',
      2: 'биография',
      3: 'история',
      4: 'фэнтези',
      5: 'приключения',
      6: 'боевик',
      7: 'мультфильм',
      8: 'комедия',
      9: 'триллер',
      10: 'детектив',
      11: 'фантастика',
    };

    const transformedArrayOfGenres = genres.map((num: number) => gnres[num]);

    return transformedArrayOfGenres;
  }
}
