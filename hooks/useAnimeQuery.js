import { useQuery } from 'react-query';
import { GET_ANIMES } from '../queries/animeQuery';
import { client } from '../utils/graphqlCall';

export const useAnimeQuery = (season) => {
  const response = useQuery(
    ['anime', season],
    async () => {
      const res = await client.request(GET_ANIMES, {
        page: 1,
        season: season.toUpperCase(),
        perPage: 50,
        seasonYear: new Date().getFullYear(),
      });
      return res;
    },
    {
      enabled: !!season,
    }
  );

  return { ...response };
};
