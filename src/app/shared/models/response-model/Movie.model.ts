export interface Movie {
  id: number;
  name: string;
  year: number;
  description: string;
  genre: number[];
  poster: any;
}

export type Genre =
  | 'драма'
  | 'биография'
  | 'история'
  | 'фэнтези'
  | 'приключения'
  | 'боевик'
  | 'мультфильм'
  | 'комедия'
  | 'триллер'
  | 'детектив'
  | 'фантастика';
