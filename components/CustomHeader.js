import React from 'react'
import { Text, SafeAreaView } from 'react-native'
const CustomHeader = ({title, navigation}) => {

  return (
    <SafeAreaView>
      <Text>{title}</Text>
    </SafeAreaView>
  )
}

export default CustomHeader