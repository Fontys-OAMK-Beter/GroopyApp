import React from 'react'
import { Text, View } from 'react-native'

const CustomHeader = ({title}) => {

    return (
      <View>
        <Text style={{fontStyle: 'italic', color: 'white', fontSize: 18}}>{title}</Text>
      </View>
    )
}

export default CustomHeader