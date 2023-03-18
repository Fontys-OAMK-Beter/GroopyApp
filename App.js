import React, { useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, SafeAreaView } from 'react-native';
import { IconComponentProvider, IconButton, Icon } from '@react-native-material/core';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import CustomHeader from './components/CustomHeader';
import HelloWorld from './components/HelloWorld';
import User from './components/User';


//This function is just temporary, once login screen is done replace this with that
function LaunchPage({ navigation }) {
  useEffect(() => {
    navigation.navigate("Hello")
  }, [])
  

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This loads on app startup</Text>
      <Button
        title="Open hello world"
        onPress={() => navigation.navigate("Hello")}
      />
    </SafeAreaView>
  )
}

export default function App() {

  //Needed for passing the header the navigation object
  //For each screen that needs the custom header give it
  // " options={({ navigation }) => useCustomHeader(navigation, "Page title")} "
  //another option would be to disable the header completely and just render a component instead
  const useCustomHeader = (navigation, title) => {
    return { 
      headerLeft: () => <IconButton icon={() => <Icon name="account-circle" color="red" size={30}/>} />,
      headerTitle: () => <CustomHeader navigation={navigation} title={title}/>,
      headerRight: () => <IconButton icon={() => <Icon name="text-search" color="red" size={30}/>} />,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: 'gray',
      },
    }
  }

  const Tab = createBottomTabNavigator()

  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName='Launch'
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
            options={{headerShown: false}} 
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
      </NavigationContainer>
    </IconComponentProvider>
  );
}
