import React, {useState, useEffect} from 'react'
import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import { Container, CustomImage, TextWhite } from './styled'


export const Item = (item) => {
  return (
    <View>
      <TouchableOpacity>
          <Container> 
              <CustomImage source={item.image}/>
              <TextWhite>{item.name}</TextWhite>
          </Container>
      </TouchableOpacity>
    </View>
  )
}

