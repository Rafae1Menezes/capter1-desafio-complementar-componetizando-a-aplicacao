import { memo } from 'react';
import  MovieCard  from './MovieCard';

interface MovieProps {
   imdbID: string;
   Title: string;
   Poster: string;
   Ratings: Array<{
     Source: string;
     Value: string;
   }>;
   Runtime: string;
 }

 interface GenreResponseProps {
   id: number;
   name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
   title: string;
 }

interface Props {
   movies: MovieProps[]
   selectedGenre: GenreResponseProps
}


const Content = (props: Props) => {
  
   return (
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
   )
}

export default memo(Content, (prevProps, NextProps) => Object.is(prevProps.movies, NextProps.movies))
// export default Content