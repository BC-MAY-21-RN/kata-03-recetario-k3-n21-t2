import React from 'react';
import {Text, View} from 'react-native';
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
