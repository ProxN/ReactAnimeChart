import { useRouter } from 'next/router';
import AnimeApp from '../components/AnimeApp';
import SkeletonList from '../components/SkeletonList';
import { useAnimeQuery } from '../hooks/useAnimeQuery';

const Season = () => {
  const router = useRouter();

  const { data, isLoading } = useAnimeQuery(router.query.season);

  if (isLoading) return <SkeletonList maxSkeleton={9} />;

  return (
    <div>
      <AnimeApp data={data} />
    </div>
  );
};

export default Season;
