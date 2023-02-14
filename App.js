import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorld from './components/HelloWorld';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native';

//This function is just temporary, once login screen is done replace this with that
function LaunchPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This loads on app startup</Text>
      <Button
        title="Open hello world"
        onPress={() => navigation.navigate("Hello world")}
      />
    </SafeAreaView>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Launch'>
        <Stack.Screen name="Launch" component={LaunchPage} options={{headerShown: false}} />
        <Stack.Screen name="Hello world" component={HelloWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
