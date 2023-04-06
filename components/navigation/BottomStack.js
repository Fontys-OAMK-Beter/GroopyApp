import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconComponentProvider, IconButton, Icon } from '@react-native-material/core';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Alert, Button, View } from 'react-native';
import * as SS from 'expo-secure-store'
import { Post } from '../helpers/API';

import LoginContext from '../LoginContext';
import CustomHeader from '../CustomHeader';
import HelloWorld from '../HelloWorld';
import GroupStack from '../Groups';

const LaunchPage = ({ navigation }) => {

    const SendPost = () => {

        const body = {
            email:"test@test.com",
            name:"miko",
            password:"qweasd"
        }

        Post('/User/register', body, (res) => {
            if(res.status === 200){
                console.log(res)
                Alert.alert(JSON.stringify(res))
            }else {
                console.log(res)
                Alert.alert(JSON.stringify(res))
            }
        })

    }

    //placeholder waiting for groups to merge
    const { setIsLoggedIn } = useContext(LoginContext)

    const logout = async () => {
        await SS.deleteItemAsync("username")
        setIsLoggedIn(false)
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to GroupStack"
          onPress={() => navigation.navigate("GroupStack")}
        />
        <Button
          title="Get username"
          onPress={async () => Alert.alert(await SS.getItemAsync("username"))}
        />
        <Button
          title="Delete username (logout)"
          onPress={async () => logout()}
        />
      </View>
    )
  }

//Main stack is the component where you define any navigation you want to happen from the bottom bar
const BottomStack = () => {
    //Needed for passing the header the navigation object
    //For each screen that needs the custom header give it
    // " options={({ navigation }) => useCustomHeader(navigation, "Page title")} "
    //another option would be to disable the header completely and just render a component instead
    const useCustomHeader = (navigation, title) => {
        return {
            headerLeft: () => <IconButton icon={() => <Icon name="account-circle" color="red" size={30} />} />,
            headerTitle: () => <CustomHeader navigation={navigation} title={title} />,
            headerRight: () => <IconButton icon={() => <Icon name="text-search" color="red" size={30} />} />,
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: 'gray',
            },
        }
    }

    const Tab = createBottomTabNavigator()

    return (
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Tab.Navigator
                initialRouteName='GroupStack'
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Launch') { //change to swipe or something
                            iconName = focused ? 'cards-playing' : 'cards-outline';
                        } else if (route.name === 'Hello') {
                            iconName = focused ? 'account' : 'account-outline';
                        } else if (route.name === 'GroupStack') {
                            iconName = focused ? 'account-group' : 'account-group-outline';
                        }
                        return <Icon name={iconName} size={30} color={color} />;
                    },
                    tabBarActiveTintColor: "red",
                    tabBarInactiveTintColor: "white",
                    tabBarActiveBackgroundColor: "gray",
                    tabBarInactiveBackgroundColor: "gray"
                })}
            >
                <Tab.Screen
                    name="Launch"
                    component={LaunchPage}
                    options={({ navigation }) => useCustomHeader(navigation, "Placeholder page")}
                />
                <Tab.Screen
                    name="GroupStack"
                    component={GroupStack}
                    options={({ navigation }) => useCustomHeader(navigation, "Groups")}
                />
                <Tab.Screen
                    name="Hello"
                    component={HelloWorld}
                    options={({ navigation }) => useCustomHeader(navigation, "Page title")}
                />
            </Tab.Navigator>
        </IconComponentProvider>
    );
}

export default BottomStack