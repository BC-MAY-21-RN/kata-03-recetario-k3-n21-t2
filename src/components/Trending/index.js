import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Container, TextPink, CustomImage, TextWhite, TextCustom, ItemContainer } from './styled'


export const Trending = ({list}) => {

    const listToDisplay = list.map((item)=> {
        console.log(item.image);
        return(
            <ItemContainer>
                <CustomImage source={item.image}/>
                <TextCustom>{item.name}</TextCustom>
            </ItemContainer>
        )
    })

    return (
        <Container>
            <TextPink>Trending</TextPink>
            <TouchableOpacity>
                    <ScrollView horizontal={true}>
                        {listToDisplay}
                    </ScrollView>
            </TouchableOpacity>
        </Container>
        
    )
}

