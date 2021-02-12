import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import EmptyCart from '../../components/EmptyCart';
import formatValue from '../../utils/formatValue'

import * as CartActions from '../../store/modules/cart/actions'

export default function Cart() {

    const dispactch = useDispatch()
    const products = useSelector(({ cart }) => cart)

    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products])

    const cartTotal = useMemo(() => {

        const cartAmount = products.reduce((acc, product) => {
            const totalPrice = acc + (product.price * product.amount)
            return totalPrice
        }, 0)

        return cartAmount

    }, [products])


    function increment(product) {
        dispactch(CartActions.updateAmountRequest(product.id, product.amount + 1))
    }

    function decrement(product) {
        dispactch(CartActions.updateAmountRequest(product.id, product.amount - 1))
    }

    function removeFromCart(id) {
        dispactch(CartActions.removeFromCart(id))
    }

    return (
        <Container>

            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<EmptyCart />}
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
                                        <ProductQuantity>{`${item.amount}x`}</ProductQuantity>

                                        <ProductPrice>
                                            R${item.price * item.amount}
                                        </ProductPrice>
                                    </TotalContainer>
                                </ProductPriceContainer>
                            </ProductTitleContainer>

                            <ActionContainer>
                                <ActionButton onPress={() => increment(item)}>
                                    <Feather name="plus" color="#e83f5b" size={16} />
                                </ActionButton>

                                <ActionButton onPress={() =>
                                    item.amount > 1 ? decrement(item) : removeFromCart(item.id)}
                                >
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
                <SubTotalValue>{formatValue(cartTotal)}</SubTotalValue>
            </TotalProductsContainer>

        </Container>
    )
}