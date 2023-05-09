import React, { useState } from "react";
import {View, TextInput, Text, Button, StyleSheet} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <View style={styles.container}>
            <View>
                <TextInput 
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                />
            </View>
            <View>
                <TextInput 
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    />
            </View>
            <View>
                <TextInput 
                    onChangeText={(text) => setUserName(text)}
                    value={userName}
                />
            </View>
            <View>
                <TextInput 
                    onChangeText={(text) => setEMail(text)}
                    value={eMail}
                />
            </View>
            <View>
                <TextInput 
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}
                />
            </View>
            {/* <View>
                <Button 
                style={styles.saveBtn}
                title="Save"
                onPress={() => savePersonalInfo()}/>
            </View> */}
            <TouchableOpacity onPress={() => savePersonalInfo()} style={styles.saveBtn}>
                <Text style={styles.text}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PersonalInfo

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
    saveBtn: {
        bottom: 1,
        marginBottom: 15,
        backgroundColor: "rgb(176, 15, 4)",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontSize: 20,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
      },
      text: {
        fontSize: 19,
        color: "white",
        textShadowRadius: 10,
        textShadowColor: "black"
      },
      input: {

      }
})