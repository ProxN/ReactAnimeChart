import React from "react";
import { animesByType } from "../helpers/animeHelper";
import AnimeTypeList from "./AnimeTypeList";

function AnimeLiist({ animes}) {
  const ListOfAnimes = animesByType(animes);
  const types = ["TV", "MOVIE",'OVA','ONA'];
  return (
    <div>
      {types.map(type => (
        <AnimeTypeList 
          key={type}
          type={type}
          animes={ListOfAnimes[type]}
        />
      ))}
    </div>
  );
}

export default AnimeLiist;
