import React from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";

import GroupStack from "./navigation/GroupStack";
import styles from './Styles';


//Dummy data to show before fetching from database
const DATA = [
    {
        id: '1',
        title: 'Group 1',
    },
    {
        id: '2',
        title: 'Group 2',
    },
    {
        id: '3',
        title: 'Group 3',
    },
    /* {
        id: '4',
        title: 'Group 3',
    },
    {
        id: '5',
        title: 'Group 3',
    },
    {
        id: '6',
        title: 'Group 3',
    },
    {
        id: '7',
        title: 'Group 3',
    },
    {
        id: '8',
        title: 'Group 3',
    },
    {
        id: '9',
        title: 'Group 3',
    },
    {
        id: '10',
        title: 'Group 3',
    },
    {
        id: '11',
        title: 'Group 3',
    } */
];

//This is and the component rendered in the flatlist. The onpress routes to the viewgroup page of the selected group
const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

//This is the main page of the groups tab. It renders the flatlist and the buttons to create a group or event
const Groups = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => { navigation.navigate("ViewGroup", { id: item.id }) }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.containerForButtons}>
                <Button
                    style={styles.button}
                    title="Create Group"
                    onPress={() => { navigation.navigate("CreateGroup") }} />
                <Button
                    style={styles.button}
                    title="Create Event"
                    onPress={() => { navigation.navigate("CreateEvent") }} />
            </View>
        </View>
    );
}

export default Groups;