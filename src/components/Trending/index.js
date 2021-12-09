import React, {useState, useEffect} from 'react'
import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import { Container, TextPink, CustomImage, TextWhite } from './styled'
import { Huevo, Pizza, Ramen, Sandwich, Burguer } from '../../library/images'
import {Item} from '../Item/index'
import recipes from '../../library/constants/recipes.json'

export const Trending = () => {
    
    const [receta, setReceta] = useState(recipes)

    const trendingSection = (recipes) => {
        receta.map((recipes, item) => {
            return(
            <Item>
                
            </Item> 
            )
        })
    }

    useEffect(() => {
        
    })
    
    return (
        <Container>
            <TextPink>Trending</TextPink>
            <Container>
                <ScrollView>


                </ScrollView>
            </Container>
        </Container>
    )
}

