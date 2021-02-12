import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons'

import FloatingCart from '../../components/FloatingCart'

import formatValue from '../../utils/formatValue'
import api from '../../services/api'
import * as CartActions from '../../store/modules/cart/actions'

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
import { CartPricing } from '../../components/FloatingCart/styles';

export default function Catalogo() {

    const dispatch = useDispatch()

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get("/products")
            setProducts(data)
        }

        loadProducts()
    }, [])

    function handleAddToCart(id) {
        dispatch(CartActions.addToCartRequest(id))
    }


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
                                <ProductPrice>{`${formatValue(item.price)}`}</ProductPrice>
                                <ProductButton onPress={() => handleAddToCart(item.id)}>
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

