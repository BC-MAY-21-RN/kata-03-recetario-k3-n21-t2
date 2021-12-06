import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LayoutContainer } from './styled'

export const Layout = ({children}) => {
    return (
        <LayoutContainer>
           {children}
        </LayoutContainer>
    )
}

