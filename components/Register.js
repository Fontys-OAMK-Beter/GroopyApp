import React, { useState } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { Post } from './helpers/API'

const Register = ( { navigation }) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [email, setEmail] = useState('')
    const [waitingAPI, setWaitingAPI] = useState(false)

    const submit = () => {
        //attempt to register here
        setWaitingAPI(true)
        const body = {
            name: username,
            email: email,
            password: pwd
        }

        Post('/User/register', body, (res) => {
            console.log(res)
            if(res.status === 200){
                setWaitingAPI(false)
                Alert.alert("User created! please login")
                navigation.navigate('Login')
            }else{
                setWaitingAPI(false)
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
            {waitingAPI ?  (<ActivityIndicator size="large" color="red" />) :
            (<>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Already have an account? Login here!</Text>
            </TouchableOpacity>
            </>)
            }
        </View>
    )
}

export default Register