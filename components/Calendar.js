import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const Calendar = () => {
    const [listOfHiglightedDays, setCustomDatesStyles] = useState([
        {
            date: moment("09-03-2023", "DD-MM-YYYY", true),
            style: {backgroundColor: "#235885"},
            textStyle: {color: "#FFFFFF"},
            text: "Iron man at 18:00"
        },
        {
            date: moment("16-03-2023", "DD-MM-YYYY", true),
            style: {backgroundColor: "#235885"},
            textStyle: {color: "#FFFFFF"},
            text: "E.T. at 19:00"
        }
    ])
    const [inputtedDate, setInputtedDate] = useState('')
    const [displayedDateContent, setDisplayedDateContent] = useState('')

    const pressingDay = (date) => {
        displayDateContent(date, listOfHiglightedDays)
    }

    const displayDateContent = (date, listOfHiglightedDays) => {
        for (i = 0; i <= (listOfHiglightedDays.length - 1); i++) { //checking if the pressed day matches with a date in the list of days assigned with content
            if (date.format('L') == listOfHiglightedDays[i].date.format('L')) {
                setDisplayedDateContent(listOfHiglightedDays[i].text) //setting the pressed date's content into a state variable that is used to display the content onto the screen
            }
        }
    }

    useEffect(() => {
        addDayToList(inputtedDate, listOfHiglightedDays)
    }, [inputtedDate])
    
    const addDayToList = (inputtedDate, listOfHiglightedDays) => {

        tempList = listOfHiglightedDays

        newDateObject = {
            date: moment(inputtedDate, "DD-MM-YYYY", true), //true means strict mode
            style: { backgroundColor: "#235885" },
            textStyle: { color: "#FFFFFF" }
        }

        setCustomDatesStyles( tempList => [...tempList, newDateObject]) // creating a new list of date objects by spreading the old list of date objects and adding a new date object to the end of the new list
    }

    return (
        <View style={styles.container}>
            <CalendarPicker
                onDateChange={pressingDay}
                customDatesStyles={listOfHiglightedDays}
            />

            <View>
                <Text>Give a date to highlight:</Text>
                <Text>Format: DD-MM-YYYY</Text>
                <TextInput onChangeText={(text) => setInputtedDate(text)} style={styles.textInputBox}/>
            </View>

            <View>
                <Text>Date content:</Text>
                <Text>{displayedDateContent}</Text>
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