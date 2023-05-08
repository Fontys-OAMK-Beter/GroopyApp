import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, Button } from 'react-native'
import Swiper from 'react-native-deck-swiper'

import favicon from '../assets/favicon.png'

const SwipingForVoting = () => {

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

  const PositiveVote = () => {
    console.log("pos")
  }

  const NegativeVote = () => {
    console.log("neg")
  }

  const MovieToBottomOfStack = () => {
    console.log("table")
  }

  return (
    <View styles={{ flex: 1 }}>
      <View styles={{ flex: 3 }}>
        <Swiper
          cards={[listOfVotableMovies[0].name, listOfVotableMovies[1].name, listOfVotableMovies[2].name]}
          renderCard={(card) => {
            return (
              <View style={styles.card}>
                <Image style={{ width: 300, height: 300 }} source={{ uri: listOfVotableMovies[0].coverImage }} />
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
