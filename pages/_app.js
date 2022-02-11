import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider } from '../contexts/theme.context';
import Header from '../components/Header';
import PageContent from '../components/PageContent';
import './index.css';

const App = (props) => {
  const { Component, pageProps } = props;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <PageContent>
          <Component {...pageProps} />
        </PageContent>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
