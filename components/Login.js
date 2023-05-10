import React, { useState, useEffect, useContext } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import * as SS from 'expo-secure-store'
import { Post } from './helpers/API'

import LoginContext from './LoginContext'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [waitingAPI, setWaitingAPI] = useState(false)
    const { setIsLoggedIn } = useContext(LoginContext)

    useEffect(() => {
        setIsLoading(true)
        //attempt to login via saved credentials here
        const validate = async () => {
            let userToken = ""

            try {
                userToken = await SS.getItemAsync("token")
            } catch (error) {
                Alert.alert("token restoration failed")
            }
            if (userToken === null || userToken === "") {
                setIsLoading(false)
            } else {
                setIsLoggedIn(true)
            }
        }
        validate()
    }, [])

    const submit = async () => {
        //attempt to login via inputs once backend is 'finished'
        //until then you will just login by pressing the button. No input needed
        setWaitingAPI(true)
        //set loggedin state to true here to navigate to main
        if (username.length > 0 && pwd.length > 0) {

            const body = {
                email: username,
                password: pwd
            }

            Post('/User/login', body, async (res) => {
                if (res.status === 200) {
                    try {
                        await SS.setItemAsync("token", res.data.token)
                        setUsername('')
                        setPwd('')
                        setWaitingAPI(false)
                        setIsLoggedIn(true)
                    } catch (e) {
                        setWaitingAPI(false)
                        console.log(e)
                        Alert.alert('An error occurred please try again')
                    }
                } else {
                    setWaitingAPI(false)
                    Alert.alert('Incorrect email or password')
                }
            })
        }
    }


    const forgot = async () => {
        //redirect to password reset form
        Alert.alert(await SS.getItemAsync("token"))
    }

    const goRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <>
            {isLoading ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Loading please wait</Text>
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) : (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        onChangeText={(e) => setUsername(e)}
                        placeholder='Email'
                    />
                    <TextInput
                        onChangeText={(e) => setPwd(e)}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    <Button
                        title={'Login'}
                        onPress={submit}
                    />
                    {waitingAPI ? (<ActivityIndicator size='large' color="red" />) : (
                        <>
                            <TouchableOpacity onPress={forgot}>
                                <Text>Forgot password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goRegister}>
                                <Text>Dont have an account? Register here!</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            )}
        </>
    )
}

export default Login