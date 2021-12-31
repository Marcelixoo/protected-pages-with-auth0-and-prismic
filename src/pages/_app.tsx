import React from 'react';

import { AppProps } from 'next/app';

import { UserProvider } from '@auth0/nextjs-auth0';

import { Header } from '../components/Header';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </UserProvider>
  );
}