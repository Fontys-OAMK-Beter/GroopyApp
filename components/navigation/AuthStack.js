import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Login';
import Register from '../Register'

const AuthStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Login" component={Login}
            />
            <Stack.Screen
                name="Register" component={Register}
            />
        </Stack.Navigator>
    )
}

export default AuthStack