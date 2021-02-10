import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';

import { Container } from './styles'

export default function Cart() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            // cardStyle: { backgroundColor: '#000' }
        })
    },[])

    return (
        <Container>

        </Container>
    )
}