import React, { useContext, useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Modal } from 'react-native'
import * as SS from 'expo-secure-store'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from '@react-native-material/core'
import { AuthGet } from './helpers/API'
import axios from 'axios'


import CalendarViewOnly from './CalendarViewOnly'

const UserPage = ({ navigation }) => {

    const { setIsLoggedIn } = useContext(LoginContext)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [query, setQuery] = useState([])

    const movieData = []

    useEffect(() => {
        AuthGet('/movie/userMovies', (res) => {
            if (res.status === 200) {
                setQuery([res.data])
            } else {
                console.log(res)
            }
        })
    }, [])

    useEffect(() => {

        query[0].forEach(movie =>

            axios.get(`http://www.omdbapi.com/?apikey=dd81e50e&i=${movie.movie_id}`)
                .then((res) => {
                    const tempDetails = {
                        title: res.data.Title,
                        year: res.data.Year,
                        poster: res.data.Poster
                    }
                    movieData.push(tempDetails)
                    console.log(movieData)
                }).catch((err) => {
                    console.log(err)
                })
        );
    }, [query])


    const logout = async () => {
        await SS.deleteItemAsync("token")
        setIsLoggedIn(false)
    }


    const favourites = movieData.map((movie, i) =>
        <View style={{ backgroundColor: "rgba(156, 32, 23, 0.9)", marginBottom: 8, width: "95%", padding: 5, borderRadius: 5 }} key={i}>
            <Text style={{ fontSize: 23, color: "white", textShadowColor: "black", textShadowRadius: 29, fontWeight: "bold", overflow: "hidden", paddingRight: 20 }}>{movie.title}</Text>
            <Text style={{ fontSize: 16, }}>{movie.year}</Text>
        </View>
    )

    return (
        <ScrollView style={styles.container}>

            <Modal animationType='slide'
                transparent={true}
                visible={modalIsOpen}
                onRequestClose={() => setModalIsOpen(!modalIsOpen)}
            >
                <View style={styles.modalContainer}>
                    <ScrollView style={{ marginBottom: 40, marginTop: 20 }}>
                        {favourites}
                    </ScrollView>
                    <TouchableOpacity style={styles.hideBtn}
                        onPress={() => setModalIsOpen(!modalIsOpen)}>
                        <Text style={styles.modalText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>


            <View style={{ padding: "3%" }}>
                <View style={{
                    width: 200,
                    height: 200,
                    borderRadius: 200 / 2,
                    marginTop: 10,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto"
                }} >
                    <Icon name="account-circle" color="red" size={200} />
                </View>
                <View style={{ marginTop: "7%" }}>
                    <View style={styles.calendarContainerOuter}>
                        <View style={styles.calendarContainer}>
                            <CalendarViewOnly />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setModalIsOpen(!modalIsOpen)} style={styles.btnCont}>
                        <Text style={styles.btnText}>View favourite movies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => logout()} style={styles.btnCont}>
                        <Text style={styles.btnText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default UserPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(30,30,30)"
    },
    btnCont: {
        backgroundColor: "rgba(156, 32, 23, 0.9)",
        marginBottom: "1%",
        width: "98%",
        padding: 15,
        marginTop: "2%",
        borderRadius: 5,
    },
    btnText: {
        fontSize: 23,
        color: "white",
        textShadowColor: "black",
        textShadowRadius: 10,
        fontWeight: "bold",
        overflow: "hidden",
        paddingRight: 20
    },
    calendarContainer: {
        flex: 1,
        backgroundColor: "rgba(156, 32, 23, 0)",
        borderRadius: 15,
    },
    calendarContainerOuter: {
        flex: 1,
        backgroundColor: "rgba(156, 32, 23, 0.9)",
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: "5%",
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 7,
        marginVertical: 30,
        marginBottom: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.90)',
        borderRadius: 15
    },
    modalText: {
        fontSize: 19,
        color: "white",
        textShadowRadius: 4,
        textShadowColor: "black"
    },
    modalTitle: {
        fontSize: 34,
        color: "rgb(176, 15, 4)",
        textShadowRadius: 3,
        textShadowColor: "black",
        fontWeight: "bold"
    },
    hideBtn: {
        bottom: 1,
        marginBottom: 15,
        backgroundColor: "rgb(176, 15, 4)",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontSize: 20,
    }
})