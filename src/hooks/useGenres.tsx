import {useEffect, useState} from 'react';
import {IGenre} from '../models';

export function useGenres() {
  const [genres, setGenres] = useState<IGenre[]>([]);

  const onSelectGenre = (id: number) => {
    let newGenres: IGenre[] = genres;

    newGenres.forEach(element => (element.isActive = false));

    newGenres[id].isActive = true;

    setGenres([...newGenres]);

    // replace for dispatch redux-thunk a retrive products (man, woman o kikds)
    // set options with genre selected (man, woman o kikds)
    console.log(newGenres[id]);
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
