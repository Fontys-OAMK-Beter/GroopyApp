import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorld from './components/HelloWorld';
import CustomHeader from './components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, StatusBar, Text } from 'react-native';

//This function is just temporary, once login screen is done replace this with that
function LaunchPage({ navigation }) {
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
  const Stack = createNativeStackNavigator()

  return (
    <>
    <StatusBar hidden />
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
        {/* custom header component needs to be passed down in options as headerTitle in every screen that will use it
        additionally we need to pass the navigation object to it as a prop, we accomplish this by giving options a function so that
        navigation can be passed down. titles also are passed down into the header as another prop (can be set to any text)*/}
        <Stack.Screen 
          name="Hello" 
          component={HelloWorld}
          options={({ navigation }) => {
            return { 
              headerTitle: () => <CustomHeader navigation={navigation} title={"Hello world"}/>
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
