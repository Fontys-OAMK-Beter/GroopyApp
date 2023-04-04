import React from "react";
import { View, Text, FlatList, Button, Image, Alert, TouchableOpacity } from "react-native";

import styles from './Styles';


//TODO: Fetch data from database and cache it


//Dummy data for users
const dummyUserData = [
  {
    id: '1',
    userName: 'Heikki Matero',
    profilePic: '../assets/default-profile-32.png'
  },
  {
    id: '2',
    userName: 'Jussi Jokunen',
    profilePic: '../assets/default-profile-48.png'
  },
  {
    id: '3',
    userName: 'Maija Molla',
    profilePic: 'https://imgur.com/t/simon_cowell/lR5uU'
  },
  {
    id: '4',
    userName: 'Matti Meikäläinen',
    profilePic: 'https://tse3.mm.bing.net/th?id=OIP.BkTRQX020TVEx-wISxvTpwHaE8'
  },
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
    eventName: 'Hölkkä',
    eventDate: '2020-12-13',
    eventTime: '12:00',
    eventLocation: 'Kamppi',
  },
  {
    id: '3',
    eventName: 'Juoksu',
    eventDate: '2020-12-14',
    eventTime: '12:00',
    eventLocation: 'Kamppi',
  },
  {
    id: '4',
    eventName: 'Loikka',
    eventDate: '2020-12-15',
    eventTime: '12:00',
    eventLocation: 'Kamppi',
  },
  {
    id: '5',
    eventName: 'Kolmiloikka',
    eventDate: '2020-12-16',
    eventTime: '12:00',
    eventLocation: 'Kamppi',
  }
]

//TODO: when backend, see what needs to be called on source/uri
//flatlist component for showing users
const UserItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.itemWithPicture]}>
      <Image style = {styles.defaultUserIcon} source = {require('../assets/default-profile-48.png')}/>
      <Text style={styles.title}>{item.userName}</Text>
  </TouchableOpacity>
);

//flatlist component for showing upcoming events
const EventItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Text style={styles.listTitle}>{item.eventName}</Text>
      <Text style={styles.listSubtitle}>{item.eventDate}</Text>
      <Text style={styles.listSubtitle}>{item.eventTime}</Text>
  </TouchableOpacity>
);

const ViewGroup = ({ item }) => {
  const renderEventItem = ({ item }) => {
    return (
      <EventItem
        item={item}
        onPress={() => Alert.alert('You pressed an event!')}
      />
    );
  }

  const renderUserItem = ({ item }) => {
    return (
      <UserItem
        item={item}
        onPress={() => Alert.alert('You pressed a user!')}
      />
    )
  }

  return (
    <View style={[styles.viewGroup]}>
      <View>
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
      </View>
      <Button
        style={styles.button}
        title="Add event"
        onPress={() => Alert.alert('New event added!')}
      />
    </View>
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
  export default ViewGroup