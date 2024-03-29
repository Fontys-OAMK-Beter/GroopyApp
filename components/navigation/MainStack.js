import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import LoginContext from '../LoginContext';
import AuthStack from './AuthStack'
import BottomStack from './BottomStack'

const MainStack = () => {
    const { isLoggedIn } = useContext(LoginContext)
    const Stack = createStackNavigator()

    //Login elements are conditionally added to the stack so that the user cannot use back button to go back to them if they are logged in
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                {isLoggedIn ? (
                    <Stack.Screen
                        name="Bottom" component={BottomStack}
                    />
                ) : (
                    <Stack.Screen
                        name="Auth" component={AuthStack}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack