import React, { useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { Button } from '@react-native-material/core';

const Calendar = () => {
    const [listOfHiglightedDays, setListOfHighlightedDays] = useState([
        {
            date: moment("09-04-2023", "DD-MM-YYYY", true),
            style: {backgroundColor: "#235885"},
            textStyle: {color: "#FFFFFF"},
            text: "Iron man at 18:00",
            group: 1,
        },
        {
            date: moment("16-04-2023", "DD-MM-YYYY", true),
            style: {backgroundColor: "#235885"},
            textStyle: {color: "#FFFFFF"},
            text: "E.T. at 19:00",
            group: 2,
        },
        {
            date: moment("22-04-2023", "DD-MM-YYYY", true),
            style: {backgroundColor: "#235885"},
            textStyle: {color: "#FFFFFF"},
            text: "Spirited away at 20:00",
            group: 3,
        },
    ])
    const [listOfToggledHighlightedDays, setListOfToggledHighlightedDays] = useState([])
    const [inputtedDate, setInputtedDate] = useState('')
    const [inputtedContent, setInputtedContent] = useState('')
    const [displayedDateContent, setDisplayedDateContent] = useState('')
    const [assignedGroup, setAssignedGroup] = useState('all')

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

    const inputDateAndContent = () => {
        addDayToList(inputtedDate, inputtedContent, listOfHiglightedDays, assignedGroup)
    }
    
    const addDayToList = (inputtedDate, inputtedContent, listOfHiglightedDays, assignedGroup) => {

        tempList = listOfHiglightedDays

        newDateObject = {
            date: moment(inputtedDate, "DD-MM-YYYY", true), //true means strict mode
            style: { backgroundColor: "#235885" },
            textStyle: { color: "#FFFFFF" },
            text: inputtedContent,
            group: assignedGroup,
        }

        setListOfHighlightedDays( tempList => [...tempList, newDateObject]) // creating a new list of date objects by spreading the old list of date objects and adding a new date object to the end of the new list
    }

    const displayToggledDays = (toggleOption) => {

        tempList = []

        if(toggleOption != "all"){
            for(i = 0; i < listOfHiglightedDays.length; i++){
                if(listOfHiglightedDays[i].group == toggleOption){
                    tempList.push(listOfHiglightedDays[i])
                }
            }
        }else{
            tempList = listOfHiglightedDays
        }

        setListOfToggledHighlightedDays(tempList)
    } 

    return (
        <View style={styles.container}>
            <CalendarPicker
                onDateChange={pressingDay}
                customDatesStyles={listOfToggledHighlightedDays}
            />

            <View>
                <View>
                    <Text>Give a date to highlight:</Text>
                    <Text>Format: DD-MM-YYYY</Text>
                    <TextInput onChangeText={(aDate) => setInputtedDate(aDate)} style={styles.textInputBox}/>
                </View>

                <View style={styles.contentInputViewStyle}>
                    <View>
                        <Text>Give content for the date:</Text>
                        <Text>e.g. String</Text>
                        <TextInput onChangeText={(aString) => setInputtedContent(aString)} style={styles.textInputBox}/>
                    </View>
                    <View>
                        <Text>Assign a group</Text>
                        <Text>1, 2 or 3</Text>
                        <TextInput onChangeText={(aNumber) => setAssignedGroup(aNumber)} style={styles.textInputBox}/>
                    </View>
                </View>

                <View>
                    <Button title={'highlight a day'} onPress={() => inputDateAndContent() }/>
                </View>
            </View>

            <View style={{paddingLeft: 20}}>
                <Text>Date content: {displayedDateContent}</Text>
            </View>

            <View style={styles.buttonViewStyle}>
                <Button title={'All events'} onPress={() => displayToggledDays('all')}/>
                <Button title={'Group 1'} onPress={() => displayToggledDays(1)}/>
                <Button title={'Group 2'} onPress={() => displayToggledDays(2)}/>
                <Button title={'Group 3'} onPress={() => displayToggledDays(3)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
    textInputBox: {
        borderWidth: 2,
        borderColor: "#000000",
    },
    buttonViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    contentInputViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    }
});

export default Calendar