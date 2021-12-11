import React from 'react'
import { ScrollView } from 'react-native'
import { Container, TextPink, CustomImage, TextCustom, ItemContainer, ButtomTouchable } from './styled'


export const Trending = ({props, list}) => {

    const { navigation } = props

    const listToDisplayTrending = list.map((item)=> {
        return(
            <ButtomTouchable key={`receta-${item.id}`}
            onPress={() => {
                 navigation.navigate('Details', item)
                }
            }>
                <ItemContainer>
                    <CustomImage source={item.image}/>
                    <TextCustom>{item.name}</TextCustom>
                </ItemContainer>
            </ButtomTouchable>
        )
    })

    return (
        <Container>
            <TextPink>Trending</TextPink>
                    <ScrollView horizontal={true}>
                            {listToDisplayTrending}
                    </ScrollView>
        </Container>
        
    )
}