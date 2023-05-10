import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconComponentProvider, IconButton, Icon } from '@react-native-material/core';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Alert, Button, View } from 'react-native';
import * as SS from 'expo-secure-store'
import { AuthGet, DecodeJWT, Post } from '../helpers/API';

import LoginContext from '../LoginContext';
import CustomHeader from '../CustomHeader';
import UserPageStack from './UserPageStack';
import GroupStack from './GroupStack';
import Search from '../Search';
import About from '../About'

const LaunchPage = ({ navigation }) => {
    const GetUser = async () => {
        console.log(await DecodeJWT())
    }

    //placeholder waiting for groups to merge
    const { setIsLoggedIn } = useContext(LoginContext)

    const logout = async () => {
        await SS.deleteItemAsync("token")
        setIsLoggedIn(false)
        /* Post('/User/logout', {}, async (res) => {
            if (res.status === 200) {
                await SS.deleteItemAsync("token")
                setIsLoggedIn(false)
            } else {
                Alert.alert("Error logging out")
            } 
        }) */

    }

    const GetUserInfo = async () => {
        let userObj = await DecodeJWT()

        await AuthGet("/User/" + userObj.userID, (res) => {
            if (res.status === 200) {
                Alert.alert("Logged in as ", res.data.name)
                return
            } else if (res.response.status === 401) {
                Alert.alert("Login expired, please log back in")
                logout()
                return
            }else{
                Alert.alert("An error occurred, please try again")
            }
        })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to GroupStack"
                onPress={() => navigation.navigate("GroupStack")}
            />
            <Button
                title="Get user info"
                onPress={async () => await GetUserInfo()}
            />
            <Button
                title="Delete username (logout)"
                onPress={async () => logout()}
            />
            <Button
                title="Decode token"
                onPress={async () => GetUser()}
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
            headerLeft: () => <IconButton icon={() => <Icon onPress={() => navigation.navigate('About')} name="account-circle" color="#ffffffcc" size={35} />} />,
            headerTitle: () => <CustomHeader navigation={navigation} title={title} />,
            headerRight: () => <IconButton onPress={() => navigation.navigate('Search')} icon={() => <Icon name="text-search" color="#ffffffcc" size={30} />} />,
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: '#000000ee',
            },
        }
    }

    const useHeaderNoTab = (navigation, title) => {
        return {
            headerLeft: () => <IconButton icon={() => <Icon onPress={() => navigation.navigate('About')} name="account-circle" color='#ffffffcc' size={35} />} />,
            headerTitle: () => <CustomHeader navigation={navigation} title={title} />,
            headerRight: () => <IconButton onPress={() => navigation.navigate('Search')} icon={() => <Icon name="text-search" color="#ffffffcc" size={30} />} />,
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: '300000',
            },
            tabBarButton: () => null,
            tabBarVisible: false,
        }
    }
//,// '#212121',"#f0000099"
    const Tab = createBottomTabNavigator()

    return (
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Tab.Navigator
                initialRouteName='GroupStack'
                screenOptions={({ route }) => ({
                        tabBarStyle: {
                                 borderTopWidth: 0
                           },
                           style: {
                            elevation: 0,   // for Android
                            shadowOffset: {
                                width: 0, height: 0 // for iOS
                            },
                        },
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
                    tabBarActiveTintColor: "#ffffff88",
                    tabBarInactiveTintColor: "#ffffff55",
                    tabBarActiveBackgroundColor: "#000000ee",
                    tabBarInactiveBackgroundColor: "black"
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
                    options={({ navigation }) => useCustomHeader(navigation, "Groops")}
                />
                <Tab.Screen
                    name="Hello"
                    component={UserPageStack}
                    options={({ navigation }) => useCustomHeader(navigation, "Profile")}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={({ navigation, }) => useHeaderNoTab(navigation, "Search")}
                />
                <Tab.Screen
                    name="About"
                    component={About}
                    options={({ navigation, }) => useHeaderNoTab(navigation, "About Us")}
                />
            </Tab.Navigator>
        </IconComponentProvider>
    );
}

export default BottomStack