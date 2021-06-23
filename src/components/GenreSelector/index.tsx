import React, {useEffect, useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {GenreSelectorItem} from './GenreSelectorItem';

import {IGenre} from '../../models';

export const GenreSelector = () => {
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

  if (genres.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {genres.map((genre: IGenre) => (
        <GenreSelectorItem
          id={genre.id}
          type={genre.type}
          name={genre.name}
          isActive={genre.isActive}
          onSelectGenre={onSelectGenre}
          key={genre.id}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
});
