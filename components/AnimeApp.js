import React from 'react';
import AnimeList from './AnimeList';
import { AnimesProvider } from '../contexts/animes.context';

const AnimeApp = ({ data }) => {
  if (!data) return null;
  return (
    <div>
      {data.Page.media.length > 0 ? (
        <AnimesProvider>
          <AnimeList animes={data.Page.media} />
        </AnimesProvider>
      ) : null}
    </div>
  );
};

export default AnimeApp;
