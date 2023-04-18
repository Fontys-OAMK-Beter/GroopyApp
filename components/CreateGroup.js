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

    const postNewGroup = (nameText, DescriptionText, groupID) => {
        temp1 = toString(nameText)
        temp2 = toString(DescriptionText)
        temp3 = parseInt(groupID)

        fetch(`https://groopyswoopyapiweb.azurewebsites.net/api/Party?title=${temp1}&pictureUrl=${temp2}&userId=${temp3}`, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            //This api takes data in header only  :):):):):):)
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