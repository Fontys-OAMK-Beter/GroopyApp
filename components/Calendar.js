import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import CalendarPicker from 'react-native-calendar-picker';

const Calendar = () => {
    const [selectedStartDate, setSelectedStartDate] = useState([])

    /* useEffect(() => {
      
    
    }, [selectedStartDate]) */
    
    const onDateChange = (date) => {
        setSelectedStartDate(date.format('LL'))
    }


  return (
    <View style={styles.container}>
        <CalendarPicker
          onDateChange={onDateChange}
        />

        <View>
          <Text>SELECTED DATE:{ selectedStartDate }</Text>
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