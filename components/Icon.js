import React,{memo,useContext} from "react";
import { AddIcon as Icon} from "../styles/AnimeStyles";
import { FaCheck, FaQuestion, FaTimes, FaPlus } from "react-icons/fa";
import {AnimesContext} from '../contexts/animes.context';




function AddIcon({toggle,id}) {
  
  const state = useContext(AnimesContext);

  //check if Anime in Highlights 
  const highlight = state.highlights.find(high => high.key === id);
  const color = highlight ? highlight.value : '1e90ff';

  const getIcon = val => {
    switch (val) {
      case "2ed573":
        return <FaCheck />;
      case "ff7f50":
        return <FaQuestion />;
      case "ff4757":
        return <FaTimes />;
      default:
        return <FaPlus />;
    }
  };

  return <Icon onMouseEnter={toggle} color={`#${color}`} top={1} left={2}>
        {getIcon(color)}
  </Icon>;
}

export default memo(AddIcon);
