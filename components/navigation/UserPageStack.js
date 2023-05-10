import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserPage from '../UserPage'
import PersonalInfo from '../PersonalInfo'
import Calendar from '../Calendar'
import SwipingForVoting from '../SwipingForVoting'

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
            <Stack.Screen
            name="Calendar" component={Calendar}
            />
            <Stack.Screen
            name="SwipingForVoting" component={SwipingForVoting}
            />
        </Stack.Navigator>
    )
}

export default UserPageStack