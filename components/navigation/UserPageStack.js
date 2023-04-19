import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserPage from '../UserPage'
import PersonalInfo from '../PersonalInfo'

const Stack = createStackNavigator()

const UserPageStack = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="UserPage" component={UserPage}
            />
            <Stack.Screen
                name="PersonalInfo" component={PersonalInfo}
            />
        </Stack.Navigator>
    )
}

export default UserPageStack