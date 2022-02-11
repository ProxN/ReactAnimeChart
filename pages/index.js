import React from 'react';
import AnimeApp from '../components/AnimeApp';
import SkeletonList from '../components/SkeletonList';
import { useAnimeQuery } from '../hooks/useAnimeQuery';
import { Season } from '../utils/getSeason';

const Anime = () => {
  const season = Season();
  const { data, isLoading, error } = useAnimeQuery(season);
  if (isLoading) return <SkeletonList maxSkeleton={9} />;

  if (error) return <h1>Something went worng!</h1>;

  return (
    <div>
      <AnimeApp data={data} />
    </div>
  );
};
export default Anime;
