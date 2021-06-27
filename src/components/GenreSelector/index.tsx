import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {IGenre} from '../../models';
import {useGenres} from '../../hooks/useGenres';
import {GenreSelectorItem} from './GenreSelectorItem';

export const GenreSelector = () => {
  const {genres, onSelectGenre} = useGenres();

  return (
    <ScrollView style={styles.container} horizontal>
      {genres.map((genre: IGenre) => (
        <GenreSelectorItem
          {...genre}
          key={genre.id}
          onSelectGenre={onSelectGenre}
        />
      ))}
    </ScrollView>
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
