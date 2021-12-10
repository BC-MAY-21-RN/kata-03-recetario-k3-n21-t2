import React from 'react'
import { LayoutContainer } from './styled'

export const Layout = ({children}) => {
    return (
        <LayoutContainer>
           {children}
        </LayoutContainer>
    )
}

