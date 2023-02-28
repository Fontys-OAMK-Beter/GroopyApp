import React from 'react'
import { Text, View } from 'react-native'

const CustomHeader = ({title}) => {

    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
}

export default CustomHeader