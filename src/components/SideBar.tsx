import React from 'react';

import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ISidebarProps {
  genres: GenreResponseProps;
  selectedGenreId: number;
  handleClickButton: (genre: Omit<GenreResponseProps, 'id'>) => void;
}


const Sidebar: React.FC<ISidebarProps> = ({
  genres,
  selectedGenreId,
  handleClickButton,
}) => {
  return (
    <Button
      key={String(genres.id)}
      title={genres.title}
      iconName={genres.name}
      selected={selectedGenreId === genres.id}
      onClick={() => handleClickButton(genres)}
    />
  )
}

export default Sidebar;