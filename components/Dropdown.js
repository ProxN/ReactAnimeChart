import React, { useContext,memo } from "react";
import { DropDown as Menu, DropDownItem } from "../styles/AnimeStyles";
import { FaCheck, FaQuestion, FaTimes } from "react-icons/fa";
import { DispatchContext } from "../contexts/animes.context";
import {AnimesContext} from '../contexts/animes.context';


function DropDown({ toggle, id}) {


  const dispatch = useContext(DispatchContext);

  const state = useContext(AnimesContext);

  // check if Anime in Highlights 
  const highlight = state.highlights.find(high => high.key === id);
  const color = highlight ? highlight.value : '1e90ff';
  
  const handleClick = e => {
    const value = e.target.dataset.value;
    dispatch({ type: "ADD-HIGHLIGHT", key: id, value: value });
    toggle();
  };
  const handleRemove = () => {
    dispatch({ type: "DELETE-HIGHLIGHT", key: id });
    toggle();
  };

  return (
    <Menu  onMouseLeave={toggle} top={1} left={2}>
      <ul>
        <DropDownItem onClick={handleClick} data-value='2ed573' color='#2ed573'>
          <FaCheck />
          Watching
        </DropDownItem>
        <DropDownItem onClick={handleClick} data-value='ff7f50' color='#ff7f50'>
          <FaQuestion />
          Maybe Watching
        </DropDownItem>{" "}
        <DropDownItem
          onClick={handleClick}
          data-value='ff4757'
          color='#ff4757'>
          <FaTimes />
          Not Watching
        </DropDownItem>
        {color !== "1e90ff" && (
          <DropDownItem onClick={handleRemove} style={{ paddingLeft: "38px" }}>
            Clear
          </DropDownItem>
        )}
      </ul>
    </Menu>
  );
}
export default memo(DropDown);
