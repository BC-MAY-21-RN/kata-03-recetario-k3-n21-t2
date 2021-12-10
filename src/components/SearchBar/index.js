import React from 'react'
import { View, Image, StyleSheet, useState } from 'react-native'
import styled from 'styled-components'
import { Container, CustomImage, TextCustom, Bar, SearchImg, MicroImg} from './styled'
import { Search, Micro } from '../../library/images'



export const SearchBar = ({handleSearch}) => {
    return (
        <Container>
            <Bar>
                <SearchImg source={Search} />
                <TextCustom 
                    placeholder= {'What do you want to eat?'} 
                    placeholderTextColor={'#FFFFFF'}
                    onChangeText={handleSearch}
                />
                <MicroImg source={Micro} />
            </Bar>
        </Container>
    )
}
