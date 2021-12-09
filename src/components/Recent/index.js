import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import { RecentContainer, TextPink } from './styled'
import { Huevo, Pizza, Ramen, Sandwich } from '../../library/images'


export const Recent = () => {
  return (
    <RecentContainer>
      <TextPink>Recent</TextPink>
        <ScrollView horizontal>

        </ScrollView>
    </RecentContainer>
  )
}
