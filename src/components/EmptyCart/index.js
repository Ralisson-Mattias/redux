import React, { useEffect } from 'react'
import { Container, EmptyCartContainer, EmptyCartText } from './styles'

import LottieView from 'lottie-react-native';

export default function EmptyCart() {

    return (
        <Container>

            <EmptyCartContainer>
                <LottieView
                    source={require('../../../assets/empty.json')}
                    resizeMode="cover"
                    autoPlay
                    loop
                />
            </EmptyCartContainer>

            <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
        </Container>
    )
}