import React from "react";
import { useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { Icon } from '@react-native-material/core'
import styles from './Styles';
import { DecodeJWT } from "./helpers/API";




//Dummy data to show before fetching from database
const DATA = [
    {
        id: '25',
        title: 'Midsummer Madness',
        users: [], // user ids
        members: [] // user names
        
    },
    {
        id: '2',
        title: 'Daisy Dukes',
    },
    {
        id: '3',
        title: 'Yaas queen',
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
function getUsers(){
    //implement functionality
}

getUsers()
//This is and the component rendered in the flatlist. The onpress routes to the viewgroup page of the selected group
const Item = ({ item, onPress }) => (
    <>
        <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <View style={styles.bubble}> 
            <Icon name="account-group" size={20}/>
        </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.users}></Text>
        </TouchableOpacity>
    </>
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
    const [userData, setUserData] = useState('')


    const getUsers = async () => {
        setUserData(await DecodeJWT())
    }
    getUsers()
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                {/* 
            </View>
            <View style={styles.containerForButtons}> */}
               <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate("CreateGroup") }}>
                    <View style={styles.bubbleplus}> 
                        <Icon name="plus" size={20}/>
                    </View>
                        <Text style={styles.title}>Create Group</Text>
                    
                    
                    </TouchableOpacity>

                    <View style={styles.subheader}>
                        <Text style={styles.subtitle}>Upcoming events</Text>
                    </View>
                    <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate("CreateEvent") }}>
                    <View style={styles.bubbleplus}> 
                        <Icon name="plus" size={20}/>
                    </View>
                        <Text style={styles.title}>Create Event</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

export default Groups;