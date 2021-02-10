import React, { useState } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons'

import FloatingCart from '../../components/FloatingCart'

import formatValue from '../../utils/formatValue'

import {
    Container,
    ProductContainer,
    PriceContainer,
    Product,
    ProductButton,
    ProductButtonText,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductTitle,
} from './styles'

export default function Catalogo() {

    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatura Trimestral',
            image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 150
        },
        {
            id: '2',
            title: 'Assinatura Trimestral',
            image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 150
        },
        {
            id: '3',
            title: 'Assinatura Trimestral',
            image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            price: 150
        },
    ])

    return (
        <Container>

            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{
                        height: 80
                    }}
                    renderItem={({ item }) => (
                        <Product>
                            <ProductImage source={{ uri: item.image_url }} />
                            <ProductTitle>{item.title}</ProductTitle>
                            <PriceContainer>
                                <ProductPrice>R$ {item.price}</ProductPrice>
                                <ProductButton onPress={() => { }}>
                                    <ProductButtonText>Adicionar</ProductButtonText>
                                    <Feather size={30} name="plus-circle" color="#d1d7e9" />
                                </ProductButton>
                            </PriceContainer>
                        </Product>
                    )}
                />
            </ProductContainer>

            <FloatingCart />

        </Container>
    );
}

