import React from "react";
import { View, Text, Button, TextInput } from "react-native";

import styles from "./Styles";
import { AuthGet, AuthPost, DecodeJWT } from "./helpers/API";

//TODO: button chould route to new groups page

const CreateGroup = ({ }) => {
    const [nameText, setNameText] = React.useState("Default")
    const [pictureUrl, setpictureUrl] = React.useState("Default")
    const [userId, setUserId] = React.useState()

    //Get user id from jwt
    React.useEffect(() => {
        async function getUserId() {
            let jwt = await DecodeJWT()
            setUserId(jwt.userID)
        }
        getUserId()
    }, [])

    //Handle POST request to create a new group, 
    const clickHandler = () => {
        //create a body for request
        const body = {
            title: nameText,
            pictureUrl: pictureUrl,
            UserId: userId,
        }
        //post request to create a new group
        AuthPost("/Party", body, (res) => {
            if (res.status === 200) {
                console.log(res.data)   //DEV
                let partyId
                const getpartybody = {
                    title: nameText
                }
                AuthGet("/party/getparty", getpartybody, (res) => {
                    if (res.status === 200) {
                        partyId = res.body.party_id
                        const joinbody = {
                            user_id: userId,
                            party_id: partyId,
                            partymanager: userId
                        }
                        AuthPost("/party/adduser", joinbody, (res) => {
                            if (res.status === 200) {
                                console.log(res.data)
                            }
                        })
                    } 
                })
            } 
        }
        )
        console.log("clicked")
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
                <Text style={styles.title}>Link a picture url</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => setpictureUrl(e)}
                    placeholder="URL here"
                    value={pictureUrl}
                />
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