import * as React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/use-auth';
import { LayoutProps } from '@/models/commom';

import Auth from '../commom/auth';

export interface IAdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const router = useRouter();

  async function handleLogoutClick() {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.log('failed to logout', error);
    }
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <p>Profile: {JSON.stringify(profile)}</p>

      <div>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>

      <Link href="/">Home</Link>

      <Link href="/about">About</Link>

      <div>{children}</div>
    </Auth>
  );
}
