import React, { createContext } from "react";
import AnimeReducer from "../reducers/anime.reducer";
import useLocalStorageReducer from '../hooks/useLocalStorage';
export const AnimesContext = createContext();
export const DispatchContext = createContext();
const defaultState = {
  highlights:[]
};

export function AnimesProvider(props) {
  const [state, dispatch] = useLocalStorageReducer('highlights',defaultState,AnimeReducer);
  return (
    <AnimesContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AnimesContext.Provider>
  );
}
