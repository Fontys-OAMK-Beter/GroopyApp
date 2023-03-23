import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
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

    /* useEffect(() => {
      
    
    }, [selectedStartDate]) */

    const onDateChange = (date) => {
        setSelectedStartDate(date.format('LL'))
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
    },
});

export default Calendar