import React, { useState } from "react";
import {View, TextInput, Text, Button} from 'react-native'

import styles from './Styles'

const PersonalInfo = () => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [userName, setUserName] = useState("default")
    const [eMail, setEMail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    //TODO: add fetch to backend here

    const savePersonalInfo = () => {
        console.log(firstName + " " + lastName + " " +  userName + " " + eMail + " " + phoneNumber)
    }

    return(
        <View>
            <View>
                <Text>First name</Text>
                <TextInput 
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                />
            </View>
            <View>
                <Text>Last name</Text>
                <TextInput 
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    />
            </View>
            <View>
                <Text>User name</Text>
                <TextInput 
                    onChangeText={(text) => setUserName(text)}
                    value={userName}
                />
            </View>
            <View>
                <Text>E-mail address</Text>
                <TextInput 
                    onChangeText={(text) => setEMail(text)}
                    value={eMail}
                />
            </View>
            <View>
                <Text>Phone number</Text>
                <TextInput 
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}
                />
            </View>
            <View>
                <Button 
                style={styles.button}
                title="Save"
                onPress={() => savePersonalInfo()}/>
            </View>
        </View>
    )
}

export default PersonalInfo