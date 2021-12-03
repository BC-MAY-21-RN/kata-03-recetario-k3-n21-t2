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
              <Image source={require('./src/images/maruchan.png')} style={styles.imgsTrending}/>
              <Text style={styles.textStyle}>Maruchan</Text>
            </View>
          </View>

          <View style={styles.foodimg}>
            <View>
              <Image source={require('./src/images/cangreburger.png')} style={styles.imgsTrending}/>
              <Text style={styles.textStyle}>Cangreburger</Text>
            </View>
          </View>

          <View style={styles.foodimg}>
            <View>
              <Image source={require('./src/images/pizza.png')} style={styles.imgsTrending}/>
              <Text style={styles.textStyle}>Pizza de don {'\n'}cangrejo</Text>
            </View>
          </View>

          <View style={styles.foodimg}>
            <View>
              <Image source={require('./src/images/omni.png')} style={styles.imgsTrending}/>
              <Text style={styles.textStyle}>Nalgas</Text>
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


/*
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
        */
