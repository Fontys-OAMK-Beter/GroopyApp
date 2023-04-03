import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'


const Login = ( { navigation } ) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')

    
    useEffect(() => {
        //attempt to login via saved credentials here
    }, [])


    const submit = () => {
        //attempt to login via inputs once backend is 'finished'
        //until then you will just login by pressing the button. No input needed

        navigation.navigate('Main')
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