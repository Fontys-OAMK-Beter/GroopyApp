import React, { useState, useEffect, useContext } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity, Alert } from 'react-native'
import * as SS from 'expo-secure-store'
import { Post } from './helpers/API'

import LoginContext from './LoginContext'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { setIsLoggedIn } = useContext(LoginContext)

    let loadingIcon

    useEffect(() => {
        setIsLoading(true)
        //attempt to login via saved credentials here
        const validate = async () => {
            let userToken = ""

            try {
                userToken = await SS.getItemAsync("token")
                console.log("usertoken: " + userToken)
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

        //set loggedin state to true here to navigate to main
        if (username.length > 0 && pwd.length > 0) {

            const body = {
                email: username,
                password: pwd
            }

            Post('/User/login', body, async (res) => {
                console.log(res)
                if (res.status === 200) {
                    //setIsLoggedIn(true)
                    console.log(res.headers.authorization)
                    try {
                        await SS.setItemAsync("token", res.headers.authorization)
                        setUsername('')
                        setPwd('')
                        setIsLoggedIn(true)
                    } catch (e) {
                        console.log(e)
                        Alert.alert('An error occurred please try again')
                    }
                } else {
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
                    <Text>{loadingIcon}</Text>
                    <TouchableOpacity onPress={forgot}>
                        <Text>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goRegister}>
                        <Text>Dont have an account? Register here!</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    )
}

export default Login