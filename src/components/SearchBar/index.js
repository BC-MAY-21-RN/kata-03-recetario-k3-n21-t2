import React from 'react'
import { View, Image, StyleSheet, useState } from 'react-native'
import styled from 'styled-components'
import { Contaier, CustomImage, TextCustom } from './styled'
import { Ramen, Search, Micro } from '../../library/images'



export const SearchBar = () => {
    return (
        <Contaier>
            <View style={styles.Bar}>
                <Image source={Search} style={(styles.searchImg)}/>
                <TextCustom>What do you want to eat?</TextCustom>
                <Image source={Micro} style={(styles.microimg)}/>
            </View>
        </Contaier>
    )
}


const styles = StyleSheet.create({
    Bar: {
        backgroundColor: '#343435',
        borderRadius: 20,
        flexDirection: 'row',
        width: '95%',
        textAlign: 'center'
    },
    searchImg: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        left: 1,
    },
    microimg: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        left: 80,
    },
  
  })
