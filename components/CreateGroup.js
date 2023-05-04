import React from "react";
import { View, Text, Button, TextInput } from "react-native";

import styles from "./Styles";
import { AuthPost, UserObj } from "./helpers/API";

//TODO: button chould route to new groups page

const CreateGroup = ({ }) => {
    const [nameText, setNameText] = React.useState("Default")
    const [descriptionText, setDescriptionText] = React.useState("Default")
    const [userId, setUserId] = React.useState()

    //Get user id from jwt
    React.useEffect(() => {
        setUserId(UserObj.userID)
    }, [])

    //TODO: get backend changes to title and response
    //TODO: get new group id from response and route to new group page here
    //Handle POST request to create a new group, 
    const clickHandler = () => {
        const body = {
            title: nameText,
            pictureUrl: descriptionText,
            UserId: userId,
        }
        AuthPost("/Party", body, (res) => {
            if (res.status === 200) {
                console.log(res.data)
            } else {
                console.log(res)
            }})
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
            onPress={() => clickHandler()}
            />
        </View>
    )
}


export default CreateGroup;