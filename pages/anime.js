import React from 'react';
import withApollo from '../lib/withApollo';
import AnimeApp from '../components/AnimeApp';
import './index.css';
import Header from '../components/Header';
import { ThemeProvider } from '../contexts/theme.context';
import PageContent from '../components/PageContent';

function Anime({ isServer, query }) {
  return (
    <div>
      {/* <h1>Home page. Is it on server? - {isServer ? 'Yes' : 'No'}</h1> */}
      <ThemeProvider>
        <Header />
        <PageContent>
          <AnimeApp season={query.name} />
        </PageContent>
      </ThemeProvider>
    </div>
  );
}
Anime.getInitialProps = async ({ req, query }) => {
  return { isServer: !!req, query };
};
export default withApollo(Anime);
