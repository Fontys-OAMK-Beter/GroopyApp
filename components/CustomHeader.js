import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'

const CustomHeader = ({title, navigation}) => {

  return (
    <View style={styles.container}>
        <View style={styles.sides}>
            <Button
                title="Home"
                onPress={() => navigation.navigate("Launch")}
            />
        </View>
        <View style={styles.center}>
            <Text>{title}</Text>
        </View>
        <View style={styles.sides}>
            <Button
                title="Search"
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "8%",
        marginBottom: "3%",
        flexDirection: "row",
    },
    sides: {
        flex:1
    },
    center: {
        flex: 1
    }
})

export default CustomHeader