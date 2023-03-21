import React from "react";
import { View, Text, StyleSheet, FlatList, Button, Alert } from "react-native";

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

//This is and the component rendered in the flatlist? maybe?
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

//Check if header is needed here or if it comes from main
const Groups = () => {
  return (
    <View style={styles.container}>
        
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id} 
        />
        

        <Button 
            style={styles.button}
            title="Create Group"
            onPress={()=>{Alert.alert("You want to create a new group!")}} />
        <Button
            style={styles.button}
            title="Create Event"
            onPress={()=>{Alert.alert("You want to create a new event!")}} />
    </View>
  );
}

//This is here for testing how styles work and I have no idea what I'm doing
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
    },
    Header: {
        backgroundColor: '#f4f4f4'
    },
    text: {
        color: '#000000'
    },
    button: {
        backgroundColor: '#f194ff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    }
})

export default Groups;