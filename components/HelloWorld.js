import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Calendar from './Calendar'

//basic page to navigate to for testing purposes
const HelloWorld = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Calendar />
      <Text>Hello world</Text>
    </SafeAreaView>
  )
}

export default HelloWorld