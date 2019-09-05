import { useReducer, useEffect } from "react";
import window from "global/window";

function useLocalStorageState(key, defaultVal,reducer) {
  const [state, dispatch] = useReducer(reducer,defaultVal,() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
      
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  },[state]);
  return[state,dispatch];
}
export default useLocalStorageState;
