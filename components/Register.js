import React, { useState } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity, Alert } from 'react-native'
import { Post } from './helpers/API'

const Register = ( { navigation }) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [email, setEmail] = useState('')
    
    const submit = () => {
        //attempt to register here
        const body = {
            name: username,
            email: email,
            password: pwd
        }

        Post('/User/register', body, (res) => {
            if(res.status === 200){
                Alert.alert("User created! please login")
                navigation.navigate('Login')
            }else{
                Alert.alert("Something went wrong please try again")
            }
        })
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

export default Register