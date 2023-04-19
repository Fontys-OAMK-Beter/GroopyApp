import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from './Styles'
import { View } from 'react-native-web'

const UserPage = () => {
    return(
        <View styles={styles.container}>
            <View>

            </View>
            <View>
                <TouchableOpacity>
                    <Text>Personal information</Text>
                </TouchableOpacity>
                <TouchableOpacity>
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