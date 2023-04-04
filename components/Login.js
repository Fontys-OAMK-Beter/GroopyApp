import React, { useState, useEffect, useContext } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import * as SS from 'expo-secure-store'

import LoginContext from './LoginContext'

const Login = ( { navigation } ) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')

    const { setIsLoggedIn } = useContext(LoginContext)
    
    useEffect(() => {
        //attempt to login via saved credentials here
        const getUser = async () => {
            let savedUsername = await SS.getItemAsync("username") | ''
            let savedPwd = await SS.getItemAsync("pwd") | ''
            if(savedUsername.length > 0 && savedPwd.length > 0){
                setIsLoggedIn(true)
            }
        }
        getUser()
    }, [])


    const submit = async () => {
        //attempt to login via inputs once backend is 'finished'
        //until then you will just login by pressing the button. No input needed

        //set loggedin state to true here to navigate to main

        if(username.length > 0 && pwd.length > 0){
            await SS.setItemAsync("username", username)
            await SS.setItemAsync("pwd", pwd)
            setIsLoggedIn(true)
        }
    }

    const forgot = () => {
        //redirect to password reset form
    }

    const goRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                onChangeText={(e) => setUsername(e)}
                placeholder='Username'
            />
            <TextInput
                onChangeText={(e) => setPwd(e)}
                placeholder='Password'
            />
            <Button
                title={'Login'}
                onPress={submit}
            />
            <TouchableOpacity onPress={forgot}>
                <Text>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goRegister}>
                <Text>Dont have an account? Register here!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login