import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { appstyles } from './src/models/appstyles.js';

const App = () => {
  return (
    <View style={styles.container}>
      <TextInput style={{ fontSize: 20 }}>What do you want to eat?</TextInput>
      <Text style={{ fontSize: 30 }}>Trending</Text>
      <ScrollView horizontal>
        <Image
          source={require('./src/images/cangreburger.png')}
          style={{ width: 200, height: 200 }}
        />
        <Image
          source={require('./src/images/taco.png')}
          style={{ height: 200, width: 200 }}
        />
        <Image
          source={require('./src/images/omni.png')}
        />
        <Image
          source={require('./src/images/maruchan.png')}
          style={{ height: 200, width: 200 }}
        />
      </ScrollView>
      <Text style={{ fontSize: 30 }}>Recent</Text>
      <ScrollView horizontal>
        <Image source={require('./src/images/cangreburger.png')} />
        <Image source={require('./src/images/taco.png')} />
        <Image source={require('./src/images/maruchan.png')} />
      </ScrollView>
    </View>

  );
};

export default App;

const styles = StyleSheet.create({});
