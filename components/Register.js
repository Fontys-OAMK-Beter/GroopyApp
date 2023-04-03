import React, { useState } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'


const Login = ( { navigation }) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [email, setEmail] = useState('')
    
    const submit = () => {
        console.log(username, pwd, email)
        //attempt to register here
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                onChangeText={(e) => setUsername(e)}
                placeholder='Username'
            />
            <TextInput
                onChangeText={(e) => setEmail(e)}
                placeholder='email@email.com'
            />
            <TextInput
                onChangeText={(e) => setPwd(e)}
                placeholder='Password'
            />
            <Button
                title={'Login'}
                onPress={submit}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Already have an account? Login here!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login