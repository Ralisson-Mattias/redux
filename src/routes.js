import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'

import Catalogo from './pages/Catalogo'
import Cart from './pages/Cart'
import Header from './components/Header'
import { Image } from 'react-native'

import Market from '../assets/market.png'

const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    cardStyle: { backgroundColor: '#313746' },
                    
                }}
                initialRouteName="Catalogo"
            >
                <Stack.Screen
                    name="Catalogo"
                    component={Catalogo}
                    options={{
                        headerStyle: {
                            backgroundColor: '#313746',
                            elevation: 0,
                        },
                        headerTitle: () => <Image source={Market}/>,
                        headerTitleAlign: 'center'
                    }}
                />

                <Stack.Screen 
                    name="Cart"
                    component={Cart}
                    options={{
                        headerTransparent: false,
                        headerStyle: {
                            backgroundColor: '#313746',
                            elevation: 0
                        },
                        headerTitle: () => <Header screen="Cart"/>,
                        headerBackTitleVisible: false,
                        headerLeftContainerStyle: {
                            marginLeft: 20,
                        },
                        headerBackImage: () => (
                            <Feather name="chevron-left" size={24} color="#f3f9ff"/>
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}