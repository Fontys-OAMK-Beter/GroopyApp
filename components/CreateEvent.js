import React from "react";
import { View, Text, Alert, TextInput, Switch, Button } from "react-native";

import styles from "./Styles";

//TODO: change category to dropdown menu
//TODO: decide if concurrency is a switch or a toggle button
const CreateEvent = ({ }) => {
    const [text, setText] = React.useState("Default")
    const [category, setCategory] = React.useState("Default")
    const [description, setDescription] = React.useState("Default")
    const [concurrency, setConcurrency] = React.useState("False")
    const [DateText, setDateText] = React.useState("DD-MM-YYYY")


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
                <Text>Choose a Date</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => setDateText(e)}
                    placeholder="DD-MM-YYYY"
                    value={DateText}
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