import React from 'react'
import { Image, Text } from 'react-native'

import Market from '../../../assets/market.png'

import { Container } from './styles'

const Header = ({ screen }) => {
    return(
        <Container>
            <Image source={Market}/>
        </Container>
    )
}

export default Header