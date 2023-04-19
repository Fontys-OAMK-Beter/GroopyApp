import React, { useState } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity, Alert } from 'react-native'
import { BASE_URL } from '@env'

const Login = ( { navigation }) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [email, setEmail] = useState('')
    
    const submit = () => {
        //test stuff to make sure everything is working as intended
        console.log(username, pwd, email)
        Alert.alert(BASE_URL)
        //attempt to register here
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                onChangeText={(e) => setUsername(e)}
                style={{textAlign: 'left'}}
                placeholder='Username'
            />
            <TextInput
                onChangeText={(e) => setEmail(e)}
                placeholder='email@email.com'
                autoComplete='email'
            />
            <TextInput
                onChangeText={(e) => setPwd(e)}
                placeholder='Password'
                secureTextEntry={true}
            />
            <Button
                title={'Register'}
                onPress={submit}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Already have an account? Login here!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login