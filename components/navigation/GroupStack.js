import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Groups from '../Groups';
import ViewGroup from '../ViewGroup';
import CreateEvent from '../CreateEvent';
import CreateGroup from '../CreateGroup';


//This is the stack navigator for the groups tab so that viewgroup can be accessed by pressing on a group in the flatlist
const Stack = createStackNavigator()

const GroupStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Groops" component={Groups}
            />
            <Stack.Screen
                name="ViewGroup" component={ViewGroup}
            />
            <Stack.Screen
                name="CreateEvent" component={CreateEvent}
            />
            <Stack.Screen
                name="CreateGroup" component={CreateGroup}
            />
        </Stack.Navigator>
    )
}


export default GroupStack;