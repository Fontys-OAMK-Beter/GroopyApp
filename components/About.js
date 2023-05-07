import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const paragraph = [
    {
        "title": "What the application does/will do",
        "body": "wkghsdbvsdbgjyetyuiwgbvhiewbdhgvbuykedv"
    },
    {
        "title": "Frontend (OAMK)",
        "body": "akjlsgflahsgfasgfjhasgfjasgjfgah<fh"
    },
    {
        "title": "Backend (Fontys)",
        "body": "eutwirtEWTRwteyuwtetrtwertwtriuetriwteryuwteurtwiertwietriwutrTRIskjgfsjdf"
    },

]

const content = paragraph.map((section) =>
    <View style={{marginBottom: 17}} key={section.body}>
        <Text style={{ color: "white", fontSize: 20 }}>{section.title}</Text>
        <Text style={{ color: "white", fontSize: 16 }}>{section.body}</Text>
    </View>

)

const About = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>This application is a practice project between Fontys universite and OAMK students</Text>
            <View style={styles.content}>
                {content}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(30,30,30)"
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 3,
        marginTop: 15,
        marginBottom: 10,
        color: "white"
    },
    content: {
        backgroundColor: "black",
        marginHorizontal: 12,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    smallPrint: {
        fontSize: 15,
    }
})

export default About