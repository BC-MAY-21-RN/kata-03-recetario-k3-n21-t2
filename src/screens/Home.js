import React from 'react';
import {Layout, Recent, SearchBar, Trending} from '../components';

export const Home = () => {
  return (
    <Layout>
      <>
        <SearchBar />
        <Trending />
        <Recent />
      </>
    </Layout>
  );
};
