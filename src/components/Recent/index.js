import React from 'react'
import { Image, ScrollView, Text } from 'react-native'
import { RecentContainer, TextPink } from './styled'

export const Recent = () => {
  return (
    <RecentContainer>
      <TextPink>Recent</TextPink>
      <ScrollView horizontal>

      </ScrollView>
    </RecentContainer>
  )
}

// export default function App() {
//     return (
//       <View style={styles.container}>
//           <StatusBar style="auto" />
//           <Text>.........................</Text>

//           <Image
//             style={{ width: 100, height: 100, marginBottom: 15 }}
//             source={require("./assets/facebook.png")}
//           />

//       </View>
//     );
//   }
