import * as React from 'react';
import Link from 'next/link';

import { Box, Container, Stack } from '@mui/material';

import { LayoutProps } from '@/models/commom';

import Footer from '../commom/footer';
import Header from '../commom/header';

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Link href="/">Home</Link>

      <hr />

      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      {/* flexGrow for Footer auto at the bottom of the page */}
      <Box component="main" flexGrow={1}>
        <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
          Sm
        </Container>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
