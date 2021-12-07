import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { Contaier , TextCustom} from './styled'

export const SearchBar = () => {
    return (
    <Contaier>
        <View>
            <Image source={require('./src/images/search.png')}/>
            <TextCustom>What do you want to eat?</TextCustom>
        </View>
    </Contaier>
    )
}

