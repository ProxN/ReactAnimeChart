import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ANIMES } from "../queries/animeQuery";
import AnimeList from "./AnimeList";
import SkeletonList from "./SkeletonList";
import { AnimesProvider } from "../contexts/animes.context";



function AnimeApp({ season }) {

  let pagex = 1;
  const { data, error, loading, fetchMore } = useQuery(GET_ANIMES, {
    variables: {
      page: pagex,
      season: season,
      seasonYear: 2019
    },
    onCompleted: data => {
      // Fetch more Anime if there next Page
      if (data.Page.pageInfo.hasNextPage) {
        pagex += 1;
        fetchMore({
          variables: {
            page: pagex
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            return {
              Page: {
                __typename: prev.Page.__typename,
                media: [...prev.Page.media, ...fetchMoreResult.Page.media],
                pageInfo: {
                  ...fetchMoreResult.Page.pageInfo
                }
              }
            };
          }
        });
      }
    }
  });

  if (loading) return <SkeletonList maxSkeleton={9} />;
  if (error) return <div>errror</div>;

  return (
    <div >
      {data.Page.media.length > 50 ? (
          <AnimesProvider>
            <AnimeList animes={data.Page.media} />
          </AnimesProvider>
      ) : (
        <SkeletonList maxSkeleton={9} />
      )}
    </div>
  );
}

export default AnimeApp;
