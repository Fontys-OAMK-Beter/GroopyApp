import React from "react";
import { Text, StyleSheet, FlatList, Button, Alert, SafeAreaView, TouchableOpacity } from "react-native";

import Styles from "./Styles";

//TODO: Fetch data from database and cache it

//Dummy data for users
const dummyUserData = [
  {
    id: '1',
    userName: 'Heikki Matero',
    profilePic: 'https://häläpäti'
  },
  {
    id: '2',
    userName: 'Jussi Jokunen',
    profilePic: 'https://häläpäti'
  },
  {
    id: '3',
    userName: 'Maija Molla',
    profilePic: 'https://häläpäti'
  }
]

//Dummy data for events
const dummyEventData = [
  {
    id: '1',
    eventName: 'Kävely',
    eventDate: '2020-12-12',
    eventTime: '12:00',
    eventLocation: 'Kamppi',
  },
  {
    id: '2',
    eventName: 'Kävely',
    eventDate: '2020-12-12',
    eventTime: '12:00',
    eventLocation: 'Kamppi',
  },
  {
    id: '3',
    eventName: 'Kävely',
    eventDate: '2020-12-12',
    eventTime: '12:00',
    eventLocation: 'Kamppi',
  }
]

//flatlist component for showing users
const UserItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[Styles.item]}>
      <Text style={Styles.title}>{item.userName}</Text>
  </TouchableOpacity>
);

//flatlist component for showing upcoming events
const EventItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[Styles.item]}>
      <Text style={Styles.title}>{item.eventName}</Text>
  </TouchableOpacity>
);

const ViewGroup = ({item}) => {
  const renderEventItem = ({ item }) => {
    return (
      <EventItem
        item={item}
        onPress={() => Alert.alert('You pressed an event!')}
      />
    );
  }

  const renderUserItem = ({item}) => {
    return (
      <UserItem
        item={item}
        onPress={() => Alert.alert('You pressed a user!')}
      />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={dummyEventData}
        renderItem={renderEventItem}
        keyExtractor={item => item.id}
      />

      <FlatList
        data={dummyUserData}
        renderItem={renderUserItem}
        keyExtractor={item => item.id}
      />

      <Button
      style={Styles.button}
        title="Add event"
        onPress={() => Alert.alert('New event added!')}
      />
    </SafeAreaView>
  );
}




//TODO: cache data from db and acccess it here
//Params passed from groups, shown here
/*
const ViewGroup = ({route}) => {

    const { id } = route.params;

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello id:{JSON.stringify(id)}</Text>
      </SafeAreaView>
    )
  }
*/

//Copied Styles
const Styles = StyleSheet.create({
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
  
  export default ViewGroup