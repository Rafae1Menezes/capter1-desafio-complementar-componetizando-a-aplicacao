import { memo } from 'react';
import  Button  from './Button';

interface GenreResponseProps {
   id: number;
   name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
   title: string;
 }

 interface Props {
   genres: GenreResponseProps[]
   selectedGenreId: number
   handleClickButton: (arg1: number)=>void
 }

const SideBar = (props: Props) => {
 
   return (
      <nav className="sidebar">
         <span>
            Watch<p>Me</p>
         </span>

         <div className="buttons-container">
            {props.genres.map(genre => (
               <Button
                  key={String(genre.id)}
                  title={genre.title}
                  iconName={genre.name}
                  onClick={() => props.handleClickButton(genre.id)}
                  selected={props.selectedGenreId === genre.id}
               />
            ))}
         </div>
      </nav>
   )
}

export default memo(SideBar, (prevProps, NextProps) => Object.is(prevProps.genres, NextProps.genres) && prevProps.selectedGenreId === NextProps.selectedGenreId )
