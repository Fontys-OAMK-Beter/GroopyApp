import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserPage from '../UserPage'
import PersonalInfo from '../PersonalInfo'

const stack = createStackNavigator()

const UserPageStack = () => {
    return(
        <Stack.Navigator>
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