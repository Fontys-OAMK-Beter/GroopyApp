import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '@react-native-material/core'
import { OMDB } from '@env'
import axios from 'axios'

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


const Search = () => {

  const [query, setQuery] = useState([])
  const [path, setPath] = useState("")
  const [err, setErr] = useState("")

  useEffect(() => {
    setQuery(res["Search"])

  }, [])

  const results = query.map((movie) =>
    <View style={{ backgroundColor: "red", width: "95%", marginBottom: "2%", height: "8%" }} key={movie.imdbID}>
        <Text style={{fontSize: 20, overflow: "hidden" , paddingRight: "20%"}}>{movie.Title.substring(0, 28)}</Text>
        <Text style={{fontSize: 16,}}>{movie.Year}</Text>
        <View></View>
    </View>
  )

  const handleSearch = () => {
    axios.get(OMDB + path)
      .then((res) => {
        if (res.status === 200) {
          setQuery(res.data["Search"])
          setPath('')
          setErr('')
        } else {
          setErr('Something went wrong')
        }
      }).catch(err => {
        setErr('Something went wrong')
      })
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', height: "100%" }}>
      <View style={{flex: 1, flexDirection: "row"}}>
        <TextInput style={{ marginTop: "5%", marginBottom: "5%" }}
          onChangeText={(e) => setPath(e)}
          placeholder='Search for a movie with title'
        />
        <Button
          title="debug Search"
          onPress={() => handleSearch()}
        />
      </View>
      {err.length > 1 && <Text>{err}</Text>}
      {results}
    </View>
  )
}

export default Search