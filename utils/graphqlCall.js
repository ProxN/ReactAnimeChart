import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.anilist.co/';

const client = new GraphQLClient(endpoint, {});

export { gql, client };
