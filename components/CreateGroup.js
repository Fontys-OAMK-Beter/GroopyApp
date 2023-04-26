import React from "react";
import { View, Text, Button, Alert, TextInput } from "react-native";
import * as SS from "expo-secure-store";

import styles from "./Styles";

//TODO: 12-branch pull here
//TODO: button chould route to new groups page
//TODO: check if group icon is feasible

const CreateGroup = ({ }) => {
    const [nameText, setNameText] = React.useState("Default")
    const [descriptionText, setDescriptionText] = React.useState("Default")
    const [userId, setUserId] = React.useState()

    async function getUserID() {
        try {
            let temp = await SS.getItemAsync("userID");
            let tempParsed = JSON.parse(temp);
            
            if(tempParsed !== null) {
                setUserID(tempParsed);
            } 
        } catch (error) {
            console.log(error)     
        }
    }

    //setUserId(getUserID())

    React.useEffect(() => {
        async function fetchID() {
            const tempID = await getUserID();
            setUserId(tempID);
        }
        fetchID();
    }, [])

    const postNewGroup = (nameText, descriptionText, userId) => {
        fetch('https://groopyswoopyapiweb3.azurewebsites.net/api/' + 'Party', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //title: nameText,
                pictureUrl: descriptionText,
                UserId: userId,
            })
            }
        )
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Create a New Group</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => setNameText(e)}
                    placeholder="Group Name"
                    value={nameText}
                />
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.title}>Give a Description</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => setDescriptionText(e)}
                    placeholder="Group Description"
                    value={descriptionText}
                />
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.title}>Invite people</Text>
            </View>
            
            <Button 
            style={styles.button}
            title="Create Group"
            onPress={() => postNewGroup(nameText, descriptionText, userId)}
            />
        </View>
    )
}


export default CreateGroup;