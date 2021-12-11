import React from 'react';
import { Details, Home } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/index.js' 

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </>
  );
};

export default App;



    

