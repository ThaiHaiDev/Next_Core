import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/use-auth';

export interface AuthProps {
  children: any;
  requireLogin?: boolean;
}

export default function Auth({ children, requireLogin = false }: AuthProps) {
  const router = useRouter();
  const { profile, isFirstLoading } = useAuth();

  useEffect(() => {
    // do nothing if not require login
    if (!requireLogin) return;

    if (!isFirstLoading && !profile?.username) {
      router.push('/login');
    }
  }, [isFirstLoading, profile, router, requireLogin]);

  if (!profile?.username) {
    return <p>Loading...</p>;
  }
  return <div>{children}</div>;
}
