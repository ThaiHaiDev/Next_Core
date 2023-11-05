import * as React from 'react';

import { Typography } from '@mui/material';

import { AdminLayout, MainLayout } from '@/components/layout';

export interface IAboutPageProps {}
export default function AboutPage(props: IAboutPageProps) {
  return (
    <Typography component="h1" variant="h3" color="primary.main">
      About Page
    </Typography>
  );
}

AboutPage.Layout = AdminLayout;
