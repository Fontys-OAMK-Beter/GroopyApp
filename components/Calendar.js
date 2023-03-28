import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const Calendar = () => {
    const [selectedStartDate, setSelectedStartDate] = useState([])
    const [listOfHiglightedDays, setCustomDatesStyles] = useState([
        {
            date: moment("09-03-2023", "DD-MM-YYYY"),
            style: {backgroundColor: "#235885"},
            textStyle: {color: "#FFFFFF"},
            text: ":D"
        }
    ])
    const [inputtedDate, setInputtedDate] = useState('') //proper name for the text variable

    const onDateChange = (date) => {
        setSelectedStartDate(date.format('LL'))
    }
        
    useEffect(() => {
        addDayToList(inputtedDate, listOfHiglightedDays)
    }, [inputtedDate])
    
    const addDayToList = (inputtedDate, listOfHiglightedDays) => {

        tempList = listOfHiglightedDays

        newDateObject = {
            date: moment(inputtedDate, "DD-MM-YYYY", true), //true means stricts mode
            style: { backgroundColor: "#235885" },
            textStyle: { color: "#FFFFFF" }
        }

        setCustomDatesStyles( tempList => [...tempList, newDateObject]) // creating a new list of date objects by spreading the old list of date objects and adding a new date object to the end of the new list
    }

    return (
        <View style={styles.container}>
            <CalendarPicker
                onDateChange={onDateChange}
                customDatesStyles={listOfHiglightedDays}
            />

            <View>
                <Text>SELECTED DATE:{selectedStartDate}</Text>
            </View>

            <View>
                <Text>Give a date to highlight:</Text>
                <Text>Format: DD-MM-YYYY</Text>
                <TextInput onChangeText={(text) => setInputtedDate(text)} style={styles.textInputBox}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
    },
    textInputBox: {
        borderWidth: 2,
        borderColor: "#000000"
    }
});

export default Calendar