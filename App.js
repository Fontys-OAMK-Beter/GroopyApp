import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorld from './components/HelloWorld';
import User from './components/User';
import CustomHeader from './components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native';
import { IconComponentProvider } from '@react-native-material/core';
import { IconButton, Icon} from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
    headerLeft: () => <IconButton onPress={() => navigation.navigate("User")} icon={props => <Icon name="account-circle" {...props} />} />,
    headerTitle: () => <CustomHeader navigation={navigation} title={title}/>,
    headerRight: () => <IconButton icon={props => <Icon name="text-search" {...props} />} />
  }
}

export default function App() {
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
