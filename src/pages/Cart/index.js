import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useMemo } from 'react'
import { Feather } from '@expo/vector-icons'
import { View } from 'react-native';

import {
    Container,
    ActionButton,
    ActionContainer,
    Product,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductPriceContainer,
    ProductQuantity,
    ProductSinglePrice,
    ProductTitle,
    ProductTitleContainer,
    SubTotalValue,
    TotalContainer,
    TotalProductsContainer,
    TotalProductsText,
} from './styles'

export default function Cart() {

    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatura Trimestral',
            image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            quantity: 1,
            price: 150
        },
        {
            id: '2',
            title: 'Assinatura Trimestral',
            image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
            quantity: 1,
            price: 150
        },
    ])

    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products])

    const cartTotal = useMemo(() => {
        
        const cartAmount = products.reduce((acc, product) => {
            const totalPrice = acc + (product.price * product.quantity)
            return totalPrice
        }, 0)

        return cartAmount

    },[products])

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

                            <ProductTitleContainer>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPriceContainer>
                                    <ProductSinglePrice>
                                        R$ {item.price}
                                    </ProductSinglePrice>
                                    <TotalContainer>
                                        <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

                                        <ProductPrice>
                                            R${item.price * item.quantity}
                                        </ProductPrice>
                                    </TotalContainer>
                                </ProductPriceContainer>
                            </ProductTitleContainer>

                            <ActionContainer>
                                <ActionButton onPress={() => { }}>
                                    <Feather name="plus" color="#e83f5b" size={16} />
                                </ActionButton>

                                <ActionButton onPress={() => { }}>
                                    <Feather name="minus" color="#e83f5b" size={16} />
                                </ActionButton>
                            </ActionContainer>

                        </Product>
                    )}
                />
            </ProductContainer>

            <TotalProductsContainer>
                <Feather name="shopping-cart" color="#fff" size={24} />
                <TotalProductsText>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</TotalProductsText>
                <SubTotalValue>R$ {cartTotal}</SubTotalValue>
            </TotalProductsContainer>

        </Container>
    )
}