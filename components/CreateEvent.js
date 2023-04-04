import React from "react";
import { View, Text, Alert, TextInput, Switch, Button } from "react-native";

import styles from "./Styles";

//TODO: change category to dropdown menu
//TODO: decide if concurrency is a switch or a toggle button
const CreateEvent = ({ }) => {
    const [text, setText] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [concurrency, setConcurrency] = React.useState("")


    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Create a New Event</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => setText(e)}
                    placeholder="Event Name"
                    value={text}
                />
            </View>

            <View style={styles.subContainer}>
                <Text>Choose a Category</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => setCategory(e)}
                    placeholder="Category"
                    value={category}
                />
            </View>
            <View style={styles.subContainer}>
                <Text>Give a description</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => setDescription(e)}
                    placeholder="Description"
                    value={description}
                />
            </View>

            <View style={styles.subContainer}>
                <Text>Set Event Concurrency</Text>
                <Switch
                    style={styles.switch}
                    value={concurrency}
                    onValueChange={(e) => setConcurrency(e)}
                />
            </View>
            <Button 
            style={styles.button}
            title="Create Event"
            onPress={() => Alert.alert(`Event ${text} category ${category} description ${description} concurrency ${concurrency}`)}
            />
        </View>

    );
}

export default CreateEvent;