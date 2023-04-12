import React from "react";
import { View, Text, Button, Alert, TextInput } from "react-native";

import styles from "./Styles";

//TODO: button chould route to new groups page
//TODO: check if group icon is feasible
//TODO: check if groupname exists already or maybe just have unique id per group
const CreateGroup = ({ }) => {
    const [nameText, setNameText] = React.useState("Default")
    const [DescriptionText, setDescriptionText] = React.useState("Default")

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
            title="Create Event"
            onPress={() => Alert.alert(`Group ${nameText} description ${DescriptionText}`)}
            />
        </View>
    )
}


export default CreateGroup;