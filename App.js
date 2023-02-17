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

//Needed for passing the header the navigation object
//For each screen that needs the custom header give it
// " options={({ navigation }) => useCustomHeader(navigation, "Page title")} "
const useCustomHeader = (navigation, title) => {
  return { 
    headerTitle: () => <CustomHeader navigation={navigation} title={title}/>
  }
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
        <Stack.Screen 
          name="Hello" 
          component={HelloWorld}
          options={({ navigation }) => useCustomHeader(navigation, "Page title")}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
