import { useState } from "react";
import useLocalStorageState from "./useLocalStorage";

export default initialVal => {
  const [state, setState] = useLocalStorageState('settings',initialVal);
  return {
    state,
    // Check if Anime Exists in State Before Add
    addHighlight: (key, value) => {
      const newHighlight = state.highlights.find(high => high.key === key);
      if (newHighlight) {
        const newHigh = state.highlights.map(el =>
          el.key === key ? { ...el, value: value } : el
        );
        setState({...state,highlights:newHigh});
      } else {
        setState({...state,highlights:[...state.highlights,{key,value}]});
      }
    },
    //Delete anime from Highlights
    deleteHighlight: (key) => {
      const highlights = state.highlights.filter(h => h.key !== key);
      setState({...state,highlights:highlights});
    }
  };
};
