import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import splitLayoutProps from 'react-native/Libraries/StyleSheet/splitLayoutProps';
import {Layout} from '../components';
import {TextWhite, Row, CustomImage, FoodText, TrendingText, ImageFav, ImageShare, ImageClose} from './styled'
import {Fav, Fav2 , Share, Close} from '../library/images'

export const Details = (props) => {
    const  {route: {params: list}} = props 
    const { name, description, image, ingredients } = list
    const [fav, setFav] = useState(Fav)
    const renderIngredients = ingredients.map((ingredients, index)=>{
            return(
                <Row key={`ingredient-${index}`} >
                    <TextWhite>{`${ingredients.name} `}</TextWhite>             
                    <TextWhite>{ingredients.quantity} {ingredients.unit}</TextWhite>
                </Row>
            )
        })
        return (
            <Layout>  
                <ScrollView>
                    <TouchableOpacity>
                        <ImageFav source={ Fav }/>
                    </TouchableOpacity>
                    <ImageShare source={ Share }/>
                    <ImageClose source={Close}/>
                    
                    <CustomImage source={image}/>
                    
                    <TrendingText>TRENDING</TrendingText>
                    
                    <FoodText>{`${name}`}</FoodText>
                    
                    <TextWhite>{`   ${description}`}</TextWhite>
                    
                    <ScrollView>
                            {renderIngredients}
                    </ScrollView>
                </ScrollView>
            </Layout>
        )
}


