import React, {useContext} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import styles from './Styles'
import * as SS from 'expo-secure-store'

const UserPage = ({navigation}) => {

    const { setIsLoggedIn } = useContext(LoginContext)



    const logout = async () => {
        await SS.deleteItemAsync("username")
        setIsLoggedIn(false)
    }

    return(
        <View style={{padding: 24}}>
            <View style={{
                width: 200,
                height: 200,
                borderRadius: 200 / 2,
                backgroundColor: '#85888c',
                marginTop: 16,
                marginLeft: 65

            }}/>
            <View style={{marginTop: 40}}>
                <TouchableOpacity onPress={() => {navigation.navigate("Calendar")}} style={styles.item}>
                    <Text>Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("PersonalInfo")}} style={styles.item}>
                    <Text>Personal information</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={logout} style={styles.item}>
                    <Text>Log out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text>Remove account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserPage