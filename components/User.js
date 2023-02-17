import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Button } from 'react-native'

const User = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>userpage</Text>
      <Button title={"Back to launch"} onPress={() => navigation.navigate("Launch")}/>
    </SafeAreaView>
  )
}

export default User