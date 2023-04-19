import React, {useContext} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import styles from './Styles'
import * as SS from 'expo-secure-store'

const UserPage = () => {

    const { setIsLoggedIn } = useContext(LoginContext)

    

    const logout = async () => {
        await SS.deleteItemAsync("username")
        setIsLoggedIn(false)
    }

    return(
        <View styles={styles.container}>
            <View>

            </View>
            <View>
                <TouchableOpacity onPress={}>
                    <Text>Personal information</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={logout}>
                    <Text>Log out</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Remove account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserPage