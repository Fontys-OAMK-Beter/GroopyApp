import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';


const CalendarViewOnly = () => {
    const [listOfHiglightedDays, setListOfHighlightedDays] = useState([])
    const [displayedDateContent, setDisplayedDateContent] = useState('')

    useEffect(() => {


      setListOfHighlightedDays([
        {
            date: moment("11-05-2023", "DD-MM-YYYY", true),
            style: {backgroundColor: getRandomColor()},
            textStyle: {color: "#FFFFFF"},
            text: "Iron man at 18:00",
            group: 1,
        },
        {
            date: moment("16-05-2023", "DD-MM-YYYY", true),
            style: {backgroundColor: getRandomColor()},
            textStyle: {color: "#FFFFFF"},
            text: "E.T. at 19:00",
            group: 2,
        },
        {
            date: moment("22-05-2023", "DD-MM-YYYY", true),
            style: {backgroundColor: getRandomColor()},
            textStyle: {color: "#FFFFFF"},
            text: "Spirited away at 20:00",
            group: 3,
        }
    ])
    
    }, [])
    

    const getRandomColor = () => {
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)

        var res =`rgb(${r}, ${g}, ${b})`

        return res
    }

    const displayDateContent = (date, listOfHiglightedDays) => {
        for (var i = 0; i <= (listOfHiglightedDays.length - 1); i++) { //checking if the pressed day matches with a date in the list of days assigned with content
            if (date.format('L') == listOfHiglightedDays[i].date.format('L')) {
                setDisplayedDateContent(listOfHiglightedDays[i].text) //setting the pressed date's content into a state variable that is used to display the content onto the screen
            }
        }
    }

    const onDateChange = (date) => {
        displayDateContent(date, listOfHiglightedDays)
    }

    const dayHeaderStyle = () => {
        return {style: styles.dayWrapper, textStyle: styles.dayHeader}
    }
    

  return (
    <View style={styles.container}>
            <CalendarPicker
                onDateChange={(date)=> onDateChange(date)}
                startFromMonday={true}
                showDayStragglers={true}
                customDatesStyles={listOfHiglightedDays}
                previousTitleStyle={styles.prev}
                nextTitleStyle={styles.next}
                yearTitleStyle={styles.title}
                monthYearHeaderWrapperStyle={styles.myWrapper}
                monthTitleStyle={styles.title}
                headerWrapperStyle={styles.headerWrapper}
                customDayHeaderStyles={()=>dayHeaderStyle()}
                todayBackgroundColor="#a81717"
                textStyle={styles.text}
                previousTitle="Back"
            />

            <View style={{paddingLeft: "20%", marginVertical: "5%"}}>
                <Text style={{fontSize: 15, color: "white", fontWeight: "500"}}>Event on selection: {displayedDateContent}</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255, 0)',
    },
    prev: {
        color: "white",
        width: "100%",
        fontSize: 15
    },
    next: {
        width: "100%",
        color: "white",
        textAlign: "right",
        fontSize: 15
    },
    title: {
        fontSize: 21,
        color: "white",
        fontWeight: "bold",
        shadowColor: "black",
        shadowRadius: 15,

    },
    dayWrapper: {
        
    },
    dayHeader: {
        fontSize: 17,
    },
    headerWrapper: {
        paddingHorizontal: 15,
        alignContent: "center",
        textAlign: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "700"
    },
    myWrapper: {
        justifyContent: "center",
    }
});

export default CalendarViewOnly