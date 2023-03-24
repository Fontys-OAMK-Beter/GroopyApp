import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const Calendar = () => {
    const [selectedStartDate, setSelectedStartDate] = useState([])
    const [customDatesStyles, setCustomDatesStyles] = useState([
        {
            date: moment("09-03-2023", "DD-MM-YYYY"),
            style: {backgroundColor: "#235885"},
            textStyle: {color: "#FFFFFF"}
        }
    ])
    const [text, setText] = useState('') //proper name for the text variable

    /* useEffect(() => {
        theDate = moment(text,"DD-MM-YYYY")
        setCustomDatesStyles([
          {
              date: moment(theDate),
              style: { backgroundColor: '#D83333' },
              textStyle: { color: '#FFFFFF' }
          }
        ])
      
      }, [text]) */

    const onDateChange = (date) => {
        setSelectedStartDate(date.format('LL'))
    }
        
    useEffect(() => {
        highlightDay(text, customDatesStyles)
    }, [text])
    
    const highlightDay = (text, customDatesStyles) => {

        tempList = customDatesStyles

        newDateObject = {
            date: moment(text, "DD-MM-YYYY", true), //true means stricts mode
            style: { backgroundColor: "#235885" },
            textStyle: { color: "#FFFFFF" }
        }

        setCustomDatesStyles( tempList => [...tempList, newDateObject]) // creating a new list of date objects by spreading the old list of date objects and adding a new date object to the end of the new list
    }

    return (
        <View style={styles.container}>
            <CalendarPicker
                onDateChange={onDateChange}
                customDatesStyles={customDatesStyles}
            />

            <View>
                <Text>SELECTED DATE:{selectedStartDate}</Text>
            </View>

            <View>
                <Text>Give a date to highlight:</Text>
                <Text>Format: DD-MM-YYYY</Text>
                <TextInput onChangeText={(text) => setText(text)} style={styles.textInputBox}/>
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