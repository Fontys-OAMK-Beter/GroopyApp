import React from "react";
import { View, Text, Button, Alert, TextInput } from "react-native";

import styles from "./Styles";

//TODO: 12-branch pull here
//TODO: button chould route to new groups page
//TODO: check if group icon is feasible

const CreateGroup = ({ }) => {
    const [nameText, setNameText] = React.useState("Default")
    const [DescriptionText, setDescriptionText] = React.useState("Default")
    const groupID = 1 //Debug variables rock n' roll

    const postNewGroup = (nameText, DescriptionText, userID) => {
        fetch('https://groopyswoopyapiweb.azurewebsites.net/api/' + 'party', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: nameText,
                pictureUrl: DescriptionText,
                userId: userID,
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
                    value={DescriptionText}
                />
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.title}>Invite people</Text>
            </View>
            
            <Button 
            style={styles.button}
            title="Create Group"
            onPress={() => postNewGroup(nameText, DescriptionText, groupID)}
            />
        </View>
    )
}


export default CreateGroup;