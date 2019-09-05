import React,{useContext}  from "react";
import Anime from "./Anime";
import { Container, Heading } from "../styles/AnimeListStyles";
  import {ThemeContext} from '../contexts/theme.context';



function AnimeTypeList({ animes, type}) {


   const {isDarkMode} = useContext(ThemeContext);

  return (
    <Container tRow='20px auto'>
      <Heading isDark={isDarkMode}>{type}</Heading>
      {animes.map(anime => (
        <Anime
          key={anime.id}
          anime={anime}
          darkTheme={isDarkMode}
        />
      ))}
    </Container>
  );
}

export default  AnimeTypeList;
