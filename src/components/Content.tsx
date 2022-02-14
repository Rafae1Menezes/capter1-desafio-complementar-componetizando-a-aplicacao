import { memo } from 'react';
import MovieCard from './MovieCard';
import { AutoSizer, ColumnSizer, Grid, List, ListRowRenderer } from 'react-virtualized';

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


const Content = ({ movies, selectedGenre }: Props) => {

  const ITEMS_COUNT = movies.length
  const ITEM_SIZE = 400


  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <div>
        <AutoSizer disableHeight>
          {({ width, height }) => {
            const itemsPerRow = 3;

            return (
              <List
                className='List'
                width={width}
                height={800}
                style={{ height: 'calc(100vh - 140px)' }}
                rowCount={Math.ceil(ITEMS_COUNT / itemsPerRow)}
                rowHeight={400}
                rowRenderer={
                  ({ index, key, style }) => {
                    const items = [];
                    const fromIndex = index * itemsPerRow;
                    const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);

                    for (let i = fromIndex; i < toIndex; i++) {
                      items.push(
                        <MovieCard
                          poster={movies[i].Poster}
                          rating={movies[i].Ratings[0].Value}
                          runtime={movies[i].Runtime}
                          title={movies[i].Title}
                        />
                      )
                    }

                    return (
                      <div
                        className='Row'
                        key={key}
                        style={style}
                      >
                        {items}
                      </div>
                    )
                  }
                }
              />
            )
          }}
        </AutoSizer>
      </div>
    </div>
  )
}

export default memo(Content, (prevProps, NextProps) => Object.is(prevProps.movies, NextProps.movies))
// export default Content