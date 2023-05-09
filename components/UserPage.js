import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import * as SS from 'expo-secure-store'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from '@react-native-material/core'

import CalendarViewOnly from './CalendarViewOnly'

const UserPage = ({ navigation }) => {

    const { setIsLoggedIn } = useContext(LoginContext)



    const logout = async () => {
        await SS.deleteItemAsync("token")
        setIsLoggedIn(false)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: 24 }}>
                <View style={{
                    width: 200,
                    height: 200,
                    borderRadius: 200 / 2,
                    marginTop: 10,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto"
                }} >
                    <Icon name="account-circle" color="red" size={200} />
                </View>
                <View style={{ marginTop: 40 }}>
                    {/* <TouchableOpacity onPress={() => { navigation.navigate("Calendar") }} style={styles.btnCont}>
                        <Text style={styles.btnText}>Calendar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("PersonalInfo") }} style={styles.btnCont}>
                        <Text style={styles.btnText}>Personal information</Text>
                    </TouchableOpacity> */}
                    <View style={styles.calendarContainerOuter}>
                        <View style={styles.calendarContainer}>
                            <CalendarViewOnly />
                        </View>
                    </View>


                    <TouchableOpacity onPress={() => logout()} style={styles.btnCont}>
                        <Text style={styles.btnText}>Log out</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.btnCont}>
                        <Text style={styles.btnText}>Remove account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={styles.btnCont}>
                        <Text style={styles.btnText}>Get stuff</Text>
                    </TouchableOpacity> */}

                </View>
            </View>
        </ScrollView>
    )
}

export default UserPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(30,30,30)"
    },
    btnCont: {
        backgroundColor: "rgba(156, 32, 23, 0.9)",
        marginBottom: 8,
        width: 360,
        padding: 15,
        marginTop: 10,
        borderRadius: 5,
    },
    btnText: {
        fontSize: 23,
        color: "white",
        textShadowColor: "black",
        textShadowRadius: 10,
        fontWeight: "bold",
        overflow: "hidden",
        paddingRight: 20
    },
    calendarContainer: {
        flex: 1,
        backgroundColor: "rgba(156, 32, 23, 0)",
        borderRadius: 15,
    },
    calendarContainerOuter: {
        flex: 1,
        backgroundColor: "rgba(156, 32, 23, 0.9)",
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 15,
    }
})