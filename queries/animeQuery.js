import { gql } from 'graphql-request';

export const GET_ANIMES = gql`
  query ($page: Int, $perPage: Int, $seasonYear: Int, $season: MediaSeason) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        lastPage
        perPage
        currentPage
        perPage
        hasNextPage
      }
      media(
        seasonYear: $seasonYear
        isAdult: false
        season: $season
        sort: POPULARITY_DESC
      ) {
        title {
          english
          romaji
          native
        }
        id
        format
        status
        startDate {
          year
          month
          day
        }
        episodes
        type
        synonyms
        coverImage {
          extraLarge
          large
          medium
          color
        }
        trailer {
          thumbnail
        }
        genres
        averageScore
        rankings {
          rank
          season
        }
        source
        siteUrl
        trailer {
          id
        }
        studios(isMain: true) {
          nodes {
            id
            name
            siteUrl
          }
        }
        description
        tags {
          name
        }
        externalLinks {
          id
        }

        nextAiringEpisode {
          timeUntilAiring
          episode
        }
      }
    }
  }
`;
