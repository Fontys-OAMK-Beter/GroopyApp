import React from 'react'
import { Text, View } from 'react-native'

const CustomHeader = ({title}) => {

    return (
      <View>
        <Text style={{color: 'white', fontSize: 22, fontWeight: "bold"}}>{title}</Text>
      </View>
    )
}

export default CustomHeader