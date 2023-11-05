import { SWRConfig } from 'swr';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import axiosClient from '@/api/axiosClient';
import Auth from '@/components/commom/auth';
import { AdminLayout, EmptyLayout, MainLayout } from '@/components/layout';
import { createEmotionCache, theme } from '@/utils/index';

import { AppPropsWithLayout } from '../models';

import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Auth requireLogin={Component.requireLogin ?? false}>
              <Component {...pageProps} />
            </Auth>
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
