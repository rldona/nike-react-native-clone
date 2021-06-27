import {useEffect, useState} from 'react';
import {IGenre} from '../models';

export function useGenres() {
  const [genres, setGenres] = useState<IGenre[]>([]);

  const onSelectGenre = (id: number) => {
    let newGenres: IGenre[] = genres;

    newGenres.forEach(element => (element.isActive = false));

    newGenres[id].isActive = true;

    setGenres([...newGenres]);
  };

  const getGenres = async () => {
    const genreList = await (
      await fetch('http://localhost:3000/genres')
    ).json();

    genreList[0].isActive = true;

    setGenres(genreList);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return {
    genres,
    onSelectGenre,
  };
}
