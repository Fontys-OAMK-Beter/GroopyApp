import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';
import { IconComponentProvider, IconButton, Icon } from '@react-native-material/core';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import CustomHeader from './components/CustomHeader';
import User from './components/User';
import Login from './components/Login';
import Register from './components/Register'
import HelloWorld from './components/HelloWorld';

const LaunchPage = ({ navigation }) => {
  //placeholder waiting for groups to merge
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title={'Back to helloworld'}
        onPress={() => navigation.navigate('Hello')}
      />
    </View>
  )
}

//Main stack is the component where you define any navigation you want to happen from the bottom bar
const MainStack = () => {
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
        initialRouteName='User'
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Launch') { //change to swipe or something
              iconName = focused ? 'cards-playing' : 'cards-outline';
            } else if (route.name === 'Hello') {
              iconName = focused ? 'account' : 'account-outline';
            } else if (route.name === 'User') {
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
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={({ navigation }) => useCustomHeader(navigation, "User")}
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

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Launch'>
        <Stack.Screen
          name="Login" component={Login}
        />
        <Stack.Screen
          name="Register" component={Register}
        />
        <Stack.Screen
          name="Main" component={MainStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
