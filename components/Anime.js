import React, { memo } from "react";
import ReactHtmlParser from "react-html-parser";
import { FaRegStar, FaRegHeart, FaRegPlayCircle } from "react-icons/fa";
import useToggler from "../hooks/useToggle";
import {
  GridCell,
  AnimeContainer,
  AnimeDesc,
  AnimeGenres,
  AnimeHeader,
  Overlay,
  ListItem,
  TimeCount,
  Span,
  Studio,
  AnimeRank,
  AnimeTrailer,
  AnimeHeaderContent,
  Img
} from "../styles/AnimeStyles";
import AddIcon from "./Icon";
import DropDown from "./Dropdown";

function Anime({ anime, darkTheme }) {
  const [showDropDown, toggle] = useToggler(false);
  return (
    <AnimeContainer isDark={darkTheme}>
      <GridCell top={1} left={1}>
        <a href={anime.siteUrl} target='_blanc'>
          <Img src={anime.coverImage.extraLarge} />
        </a>
      </GridCell>
      <Overlay left={1} top={1}>
        <a href={anime.siteUrl}>{anime.title.romaji}</a>
        <Studio>
          <a
            href={
              anime.formatStudio ? anime.formatStudio.siteUrl : anime.siteUrl
            }>
            {" "}
            {anime.formatStudio ? anime.formatStudio.name : ""}
          </a>
        </Studio>
      </Overlay>
      <AnimeRank left={1} top={1}>
        <span>
          <FaRegHeart /> #{anime.formatRank}
        </span>
        <span style={{ marginTop: "1px" }}>
          <FaRegStar color='#eccc68' />

          {anime.averageScore / 10}
        </span>
      </AnimeRank>

      <GridCell left={2} top={1}>
        <AnimeHeader>
          <AnimeHeaderContent>
            <Span>{anime.formatEpiosde}</Span>
            <TimeCount>{anime.formatTime}</TimeCount>
          </AnimeHeaderContent>

          <AnimeTrailer>
            {anime.trailer ? <Img src={anime.trailer.thumbnail} /> : ""}
            <FaRegPlayCircle />
          </AnimeTrailer>
        </AnimeHeader>
        <AnimeDesc>
          <p>{ReactHtmlParser(anime.description)}</p>
        </AnimeDesc>
        <AnimeGenres>
          <ul>
            {anime.genres.map((el, i) => {
              if (i < 2) {
                return (
                  <ListItem color={anime.coverImage.color} key={i}>
                    {el}
                  </ListItem>
                );
              }
            })}
          </ul>
        </AnimeGenres>
      </GridCell>
      <AddIcon toggle={toggle} id={anime.id} />

      {showDropDown && (
        <DropDown toggle={toggle} id={anime.id} leaveHandler={toggle} />
      )}
    </AnimeContainer>
  );
}

export default memo(Anime);
