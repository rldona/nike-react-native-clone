import {useEffect, useState} from 'react';

// const {genres} = useTemplate();

export function useTemplate() {
  const [state, setState] = useState();

  useEffect(() => {
    /***** REMOVE *****/
    setState(undefined);
    console.log(state);
    /***** REMOVE *****/
  }, [state]);

  return {
    state,
  };
}
