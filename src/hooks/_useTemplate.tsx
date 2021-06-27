import {useEffect, useState} from 'react';

// const {genres} = useTemplate();

export function useTemplate() {
  const [state, setState] = useState();

  useEffect(() => {
    /***** REMOVE *****/
    setState(undefined);
    /***** REMOVE *****/
  }, [state]);

  return {
    state,
  };
}
