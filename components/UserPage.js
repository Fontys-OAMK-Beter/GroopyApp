import React, { useContext, useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Modal, ScrollView } from 'react-native'
import * as SS from 'expo-secure-store'
import { Icon } from '@react-native-material/core'
import { AuthGet } from './helpers/API'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { DecodeJWT } from './helpers/API'

import CalendarViewOnly from './CalendarViewOnly'

const UserPage = () => {

    const { setIsLoggedIn } = useContext(LoginContext)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [query, setQuery] = useState([])
    const [movieData, setMovieData] = useState([])
    const [favourites, setFavourites] = useState([])
    const [userData, setUserData] = useState('')
    const navigation = useNavigation()

    const getUser = async () => {
        setUserData(await DecodeJWT())
    }

    useEffect(() => {
        loadData()
        getUser()

        const unsubscribe = navigation.addListener('focus', () => {
            loadData();
            getUser()
        });

        return unsubscribe

    }, [])

    const loadData = () => {
        AuthGet('/movie/userMovies', (res) => {
            if (res.status === 200) {
                setQuery(prevQuery => [...prevQuery, ...res.data])
                console.log("q", res.data)
            } else {
                console.log(res)
            }
        })
    }

    useEffect(() => {
        query.forEach(movie =>

            axios.get(`http://www.omdbapi.com/?apikey=dd81e50e&i=${movie.movie_id}`)
                .then((res) => {
                    console.log("m", JSON.stringify(movie))
                    console.log(res.data)
                    console.log("id: ", movie.movie_id)
                    const tempDetails = {
                        title: res.data.Title,
                        year: res.data.Year,
                        poster: res.data.Poster
                    }
                    setMovieData(movieData => [tempDetails, ...movieData])
                }).catch((err) => {
                    console.log(err)
                })
        );
    }, [query])

    useEffect(() => {
        const tempFavourites = movieData.map((movie, i) =>
            <View style={{ backgroundColor: "rgba(156, 32, 23, 0.9)", marginBottom: 8, width: "95%", padding: 5, borderRadius: 5 }} key={i}>
                <Text style={{ fontSize: 23, color: "white", textShadowColor: "black", textShadowRadius: 29, fontWeight: "bold", overflow: "hidden", paddingRight: 20 }}>{movie.title}</Text>
                <Text style={{ fontSize: 16, }}>{movie.year}</Text>
            </View>
        )
        setFavourites(tempFavourites);
    }, [movieData])



    const logout = async () => {
        await SS.deleteItemAsync("token")
        setIsLoggedIn(false)
    }


    const genFavoutires = () => {
        const tempFavourites = movieData.map((movie, i) =>
            <View style={{ backgroundColor: "rgba(156, 32, 23, 0.9)", marginBottom: 8, width: "95%", padding: 5, borderRadius: 5 }} key={i}>
                <Text style={{ fontSize: 23, color: "white", textShadowColor: "black", textShadowRadius: 29, fontWeight: "bold", overflow: "hidden", paddingRight: 20 }}>{movie.title}</Text>
                <Text style={{ fontSize: 16, }}>{movie.year}</Text>
            </View>
        )
        setFavourites(tempFavourites);
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <ScrollView style={styles.container}>

            <Modal animationType='slide'
                transparent={true}
                visible={modalIsOpen}
                onRequestClose={() => setModalIsOpen(!modalIsOpen)}
            >
                <View style={styles.modalContainer}>
                    <ScrollView style={{ marginBottom: "5%", marginTop: "2%", height: "70%" }}>
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
                    <Icon name="account-circle" color="#ffffff99" size={200} />
                </View>
                <View>
                    <Text>{(userData.email)}</Text>
                </View>
                <View style={{ marginTop: "7%" }}>
                    <View style={styles.calendarContainerOuter}>
                        <View style={styles.calendarContainer}>
                            <CalendarViewOnly />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => genFavoutires()} style={styles.btnCont}>
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
        backgroundColor: "#30000000",
        borderRadius: 15,
    },
    calendarContainerOuter: {
        flex: 1,
        backgroundColor: "black",
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: "5%",
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: "3%",
        marginVertical: "10%",
        marginBottom: "10%",
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
        marginBottom: "3%",
        backgroundColor: "rgb(176, 15, 4)",
        borderRadius: 10,
        paddingVertical: "5%",
        paddingHorizontal: "5%",
        fontSize: 20,
    }
})