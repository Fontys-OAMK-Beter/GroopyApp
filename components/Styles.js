import React from "react";
import { StyleSheet } from "react-native";

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

export default Styles;