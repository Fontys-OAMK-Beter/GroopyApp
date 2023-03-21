import React from "react";
import { View, Text, StyleSheet, FlatList, Button, Alert, SafeAreaView } from "react-native";

const ViewGroup = ({route}) => {

    const { id } = route.params;

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello id:{JSON.stringify(id)}</Text>
      </SafeAreaView>
    )
  }
  
  export default ViewGroup