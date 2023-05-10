import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, Button } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import axios from 'axios'

import { OMDB } from '@env'
import favicon from '../assets/favicon.png'

const SwipingForVoting = () => {

  //states
  const [query, setQuery] = useState([])
  const [arrayOfDataForVoting, setArrayOfDataForVoting] = useState([])
  const [namesOfMovies, setNamesOfMovies] = useState([])

  //placeholder data that comes from our own database
  const [movieDataFromOwnDatabase, setMovieDataFromOwnDatabase] = useState([
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
    }
  ])

  const [indexOfCurrentMovie, setIndexOfCurrentMovie] = useState(0)
  const [listOfVotableMovies, setListOfVotableMovies] = useState([
    {
      name: "Guardians",
      coverImage: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
    },
    {
      name: 'Shrek',
      coverImage: 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
    },
    {
      name: 'Shrek 2',
      coverImage: 'https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
    },
  ])

  //useEffects

  //searches movie data from oamdb with data from our own database 
  useEffect(() => {

    for (var i = 0; i < movieDataFromOwnDatabase.length; i++) {

      var path = movieDataFromOwnDatabase[i].imdbID

      axios.get('http://www.omdbapi.com/?apikey=dd81e50e&i=' + path)
        .then((res) => {
          if (res.status === 200) {
            if (res.data['Response'] == 'False') {
              console.log("Movie not found")
            } else { //Successfully found movie data is processed here.
              handleOamdbData(res.data)
            }
            console.log('')
          } else {
            setQuery([])
            console.log('Something went wrong')
          }
        }).catch(err => {
          setQuery([])
          console.log('Something went wrong')
        })
    }


    var tempListForMovieNames = []

    for(i = 0; i < arrayOfDataForVoting.length; i++){
      tempListForMovieNames.push(arrayOfDataForVoting[i].namesOfMovies)
    }

    setNamesOfMovies(tempListForMovieNames)
    
  }, [])
  

  //functions
  const PositiveVote = () => {
    console.log("pos")
  }

  const NegativeVote = () => {
    console.log("neg")
  }

  const MovieToBottomOfStack = () => {
    console.log("table")
  }

  const handleOamdbData = (data) => {

    console.log("data: ",  data)

    const tempDataObject = {
      name: data.Title,
      poster: data.Poster
    }

    setArrayOfDataForVoting(arrayOfDataForVoting.push(tempDataObject))
    console.log(arrayOfDataForVoting)
  }

  return (
    <View styles={{ flex: 1 }}>
      <View styles={{ flex: 3 }}>
        <Swiper
          cards={[namesOfMovies]}
          renderCard={(card) => {
            return (
              <View style={styles.card}>
                <Image style={{ width: 300, height: 300 }} source={{ uri: listOfVotableMovies.coverImage }} />
                <Text style={styles.text}>{card}</Text>
              </View>
            )
          }}
          onSwiped={() => setIndexOfCurrentMovie(indexOfCurrentMovie + 1)}
          onSwipedAll={() => { console.log('onSwipedAll') }}
          disableTopSwipe={true}
          disableBottonSwipe={false}
          disableLeftSwipe={false}
          disableRigthSwipe={false}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize={3}
          verticalThreshold={0}
          onSwipedLeft={PositiveVote}
          onSwipedRight={NegativeVote}
          onSwipedBottom={MovieToBottomOfStack}
        >
        </Swiper>
      </View>
      <View styles={{ flex: 1 }}>

      </View>
    </View>
  )

}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5FCFF"
    },
    card: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "#E8E8E8",
      justifyContent: "center",
      backgroundColor: "white"
    },
    text: {
      textAlign: "center",
      fontSize: 50,
      backgroundColor: "transparent"
    }
  });


export default SwipingForVoting
