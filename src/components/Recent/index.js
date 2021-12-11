import React from 'react'
import { ScrollView } from 'react-native'
import { Container, TextPink, CustomImage, TextCustom, ItemContainer, ButtomTouchable  } from './styled'


export const Recent = ({props, list}) => {

    const { navigation } = props
    
    const listToDisplayRecent = list.map((item)=> {
        return(
            <ButtomTouchable key={`receta2-${item.id}`}
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
            <TextPink>Recent</TextPink>
                    <ScrollView horizontal={true}>
                        {listToDisplayRecent}
                    </ScrollView>
        </Container>
  )
}
