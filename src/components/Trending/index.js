import React, {useState, useEffect} from 'react'
import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import { Container, TextPink, CustomImage, TextWhite, TextCustom, ListContainer } from './styled'
import { Huevo, Pizza, Ramen, Sandwich, Burguer } from '../../library/images'
import {Item} from '../Item/index'
import trendingList from '../../library/constants/trendingList.json'

export const Trending = ({list}) => {
    const listToDisplay = list.map((item)=>
        <ListContainer>
            <CustomImage source={Burguer}/>
            <TextCustom>{item.name}</TextCustom>
        </ListContainer>
    )

    return (
        <Container>
            <TextPink>Trending</TextPink>
                <Container>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity>
                            {listToDisplay}
                        </TouchableOpacity>
                    </ScrollView>
                </Container>
        </Container>
        
    )
}

