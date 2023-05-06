import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, Modal, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '@react-native-material/core'
import { OMDB } from '@env'
import axios from 'axios'
import { Icon } from '@react-native-material/core'
import { ScrollView } from 'react-native-gesture-handler'

//dummy data for styling purposes, no need to spam the api
const res = {
  "Search": [
    {
      "Title": "Shrek",
      "Year": "2001",
      "imdbID": "tt0126029",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek 2",
      "Year": "2004",
      "imdbID": "tt0298148",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek the Third",
      "Year": "2007",
      "imdbID": "tt0413267",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek Forever After",
      "Year": "2010",
      "imdbID": "tt0892791",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek the Halls",
      "Year": "2007",
      "imdbID": "tt0897387",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDE0NGZkOGMtNGY4My00OTM4LTliM2MtM2Y5OTVjOTFmNTA5XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek 4-D",
      "Year": "2003",
      "imdbID": "tt0360985",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDVlOWZkNTEtNTcxZS00NDVhLWFlZWItYWFhNmZmZWNhYzU1XkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek the Musical",
      "Year": "2013",
      "imdbID": "tt3070936",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2U4YzBhNmYtNzAxZS00ZjcyLTg5NDEtMDM4ODVkMTZlZmNkXkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek in the Swamp Karaoke Dance Party",
      "Year": "2001",
      "imdbID": "tt0307461",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTlmZjQzNmYtMjA1Ny00N2JkLWJhM2ItYTU3ODQ4Zjc2MWE1XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek Retold",
      "Year": "2018",
      "imdbID": "tt9334162",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDY3ZDFjZWYtNDhmNC00OGVjLWIxZDYtNzlmYTAyYjMwNTcyXkEyXkFqcGdeQXVyNTk5NzczMDE@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek: Thriller Night",
      "Year": "2011",
      "imdbID": "tt2051999",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDFhOGVlY2MtMGVlYS00OTdjLThkNzYtOTMwMDExMTA0YjQ3XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg"
    }
  ],
  "totalResults": "45",
  "Response": "True"
}

//more placeholder data
const groups = [
  {
    "name": "group 1",
    "id": "1"
  },
  {
    "name": "group 2",
    "id": "2"
  },
  {
    "name": "group 3",
    "id": "3"
  }
]


const Search = () => {
  const [query, setQuery] = useState([])
  const [path, setPath] = useState("")
  const [err, setErr] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [movieModalVisible, setMovieModalVisible] = useState(false)
  const [groupModalVisible, setGroupModalVisible] = useState(false)

  useEffect(() => {
    setQuery(res["Search"])

  }, [])

  useEffect(() => {
    if (path.length > 2) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      if (path.length > 2) {
        setIsLoading(true)
        handleSearch()
      }

    }, 500)

    return () => clearTimeout(timer)
  }, [path])

  const results = query.map((movie) =>
    <View style={{ backgroundColor: "rgba(156, 32, 23, 0.9)", marginBottom: 8, width: 380, padding: 5, borderRadius: 5 }} key={movie.imdbID}>
      <TouchableOpacity onPress={() => handlePress(movie.Title, movie.Year, movie.imdbID)}>
        <Text style={{ fontSize: 20, overflow: "hidden", paddingRight: 20 }}>{movie.Title}</Text>
        <Text style={{ fontSize: 16, }}>{movie.Year}</Text>
      </TouchableOpacity>
    </View>
  )
  const handleSearch = () => {
    axios.get(OMDB + path)
      .then((res) => {
        if (res.status === 200) {
          if (res.data['Response'] == 'False') {
            setErr("Movie not found")
            setQuery([])
          } else {
            setQuery(res.data["Search"])
          }
          setErr('')
        } else {
          setQuery([])
          setErr('Something went wrong')
        }
      }).catch(err => {
        setQuery([])
        setErr('Something went wrong')
      })
    setIsLoading(false)
    console.log("sent")
  }

  const handlePress = (title, year, imdb) => {
    console.log(title, year, imdb)
    //TODO: popup for adding the movie in question to pool, or adding it to favourites
    Alert.alert(year, title, [
      {
        text: 'Cancel',
        style: "cancel"
      },
      {
        text: 'Add to favourites',
        onPress: () => addToFavourites(imdb)
      },
      {
        text: 'Add to group pool',
        onPress: () => addToPool(imdb)
      },
    ], { cancelable: true })
  }

  const addToFavourites = (imdb) => {
    console.log("ID to add: ", imdb)
  }

  const addToPool = (imdb) => {

    //get users group info and show this
    setGroupModalVisible(true)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: "rgb(40, 40, 40)" }}>
      {/* Group modal */}
      <Modal animationType='slide'
        transparent={true}
        visible={groupModalVisible}
        onRequestClose={() => setGroupModalVisible(!groupModalVisible)}
      >
        <View style={styles.modalContainer}>
          <Text>Choose a group</Text>
          <TouchableOpacity
            onPress={() => setGroupModalVisible(!groupModalVisible)}>
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ScrollView style={{ marginBottom: 6, width: 380, marginTop: 4 }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 2,}}>
          <Icon name="movie-search" size={30} color="rgb(156, 32, 23)" style={{ backgroundColor: "white", marginBottom: 5, borderTopLeftRadius: 7, borderBottomLeftRadius: 7, height: 40, marginTop: 4 }} />
          <View style={{ backgroundColor: "white", borderTopRightRadius: 7, borderBottomRightRadius: 7, height: 40, marginRight: 10, marginBottom: 5, marginTop: 4 }}>
            <TextInput style={{ flex: 1, flexWrap: "nowrap", fontSize: 20, overflow: "hidden" }}
              textAlign='left'
              textBreakStrategy='balanced'
              onChangeText={(e) => setPath(e)}
              placeholder='Search for a movie with title '
            />
          </View>
          {isLoading && <ActivityIndicator size="large" color="red" />}
        </View>
        {err.length > 1 && <Text>{err}</Text>}
        {results}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: "2%",
    marginVertical: "20%",
    backgroundColor: 'rgba(45, 45, 45, 0.9)',
    borderColor: "red",
    borderRadius: 10
  },
})

export default Search