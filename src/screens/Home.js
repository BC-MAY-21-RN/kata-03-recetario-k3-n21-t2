import React from 'react';
import {Layout, Recent, SearchBar, Trending} from '../components';
import recipes from '../library/constants/recipes.json'

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
