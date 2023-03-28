import React, { useState } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'


const Login = () => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')

    const submit = () => {
        console.log(username, pwd)
        //API call here
    }

    const forgot = () => {
        console.log("aaaaaaaaaaaaaaaaaaaaaa")
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
        </View>
    )
}

export default Login