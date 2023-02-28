import React, { useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
      headerLeft: () => <IconButton onPress={() => navigation.navigate("User")} icon={props => <Icon name="account-circle" {...props} />} />,
      headerTitle: () => <CustomHeader navigation={navigation} title={title}/>,
      headerRight: () => <IconButton icon={props => <Icon name="text-search" {...props} />} />,
      headerTitleAlign: "center"
    }
  }

  const Stack = createNativeStackNavigator()

  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Launch'
          screenOptions={{headerBackVisible: false}}
        >
          <Stack.Screen 
            name="Launch" 
            component={LaunchPage} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Hello" 
            component={HelloWorld}
            options={({ navigation }) => useCustomHeader(navigation, "Page title")}
          />
          <Stack.Screen 
            name="User" 
            component={User}
            options={({ navigation }) => useCustomHeader(navigation, "User")}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </IconComponentProvider>
  );
}
