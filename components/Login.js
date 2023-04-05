import React, { useState, useEffect, useContext } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity, Alert } from 'react-native'
import * as SS from 'expo-secure-store'

import LoginContext from './LoginContext'

const Login = ( { navigation } ) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')

    const { setIsLoggedIn } = useContext(LoginContext)
    
    useEffect(() => {
        //attempt to login via saved credentials here
        const validate = async () => {
            let savedUsername

            try {
                savedUsername = await SS.getItemAsync("username")
            } catch (error) {
                Alert.alert("token restoration failed")
            }
            if(savedUsername != null){
                setIsLoggedIn(true)
            }
        }

        validate()

    }, [])


    const submit = async () => {
        //attempt to login via inputs once backend is 'finished'
        //until then you will just login by pressing the button. No input needed

        //set loggedin state to true here to navigate to main
        if(username.length > 0 && pwd.length > 0){
            await SS.setItemAsync("username", username)
            setIsLoggedIn(true)
        }
    }

    const forgot = async () => {
        //redirect to password reset form
        Alert.alert(await SS.getItemAsync("username"))
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
                secureTextEntry={true}
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