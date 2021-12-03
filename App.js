import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { styles } from './appstyles.js';
import { Icon } from 'react-native-elements'


const App = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.search}>
        <Image style={styles.searchImg} source={require('./src/images/search.png')} />
        <TextInput style={styles.textStyle}>What do you what to eat?</TextInput>
        <Image style={styles.microimg} source={require('./src/images/micro.png')} />

      </View>

      <View style={styles.styleView}>
        <Text style={styles.subtitle}>TRENDING</Text>
        <ScrollView horizontal>

          <View style={styles.foodimg}>
            <View>
              <Image source={require('./src/images/burguer.png')} style={styles.imgsTrending}/>
              <Text style={styles.textStyle}>Hamburgesa</Text>
            </View>
          </View>

          <View style={styles.foodimg}>
            <View>
              <Image source={require('./src/images/pizza.png')} style={styles.imgsTrending}/>
              <Text style={styles.textStyle}>Pizza</Text>
            </View>
          </View>

          <View style={styles.foodimg}>
            <View>
              <Image source={require('./src/images/ramen.png')} style={styles.imgsTrending}/>
              <Text style={styles.textStyle}>Ramen</Text>
            </View>
          </View>

          <View style={styles.foodimg}>
            <View>
              <Image source={require('./src/images/sandwich.png')} style={styles.imgsTrending}/>
              <Text style={styles.textStyle}>Sandwich</Text>
            </View>
          </View>

          <View style={styles.foodimg}>
            <View>
              <Image source={require('./src/images/huevo.png')} style={styles.imgsTrending}/>
              <Text style={styles.textStyle}>Huevo con{'\n'}jamón</Text>
            </View>
          </View>

        </ScrollView>
      </View>

      <View style={styles.styleView}>
        <Text style={styles.subtitle}>RECENT</Text>
        <ScrollView horizontal>

        </ScrollView>
      </View>


    </View>

  );
};

export default App;

