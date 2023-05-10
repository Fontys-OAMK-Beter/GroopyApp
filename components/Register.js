import React, { useState } from 'react'
import { View, Image, TextInput, Text, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { Post } from './helpers/API'
import { Video } from 'expo-av'
import styles from './Styles'
import videoBackground from '../assets/Promo_cc_light_blur.mp4'
import logo from '../assets/Logo_v2.png'

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
        <>
            <View style={styles.videoContainer}>
                <Video source={videoBackground} 
                    rate={1.0}
                    isMuted={true}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={styles.videoBackground}
                />
            </View>
            <View style={styles.loginContainer}>
                <View style={styles.authPageLogo}>
                    <Image source={logo} style={styles.authPageLogoImage}/>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: "#9e13e8"
                    }}>Groopy Swoopy</Text>
                </View>
                <View style={styles.authInputsContainer}>
                    <TextInput
                        onChangeText={(e) => setUsername(e)}
                        placeholder='Username'
                        style={styles.authInputs}
                    />
                    <TextInput
                        onChangeText={(e) => setEmail(e)}
                        placeholder='email@email.com'
                        autoComplete='email'
                        style={styles.authInputs}
                    />
                    <TextInput
                        onChangeText={(e) => setPwd(e)}
                        placeholder='Password'
                        secureTextEntry={true}
                        style={styles.authInputs}
                    />
                </View>
                <View style={styles.authButtons}>
                    <Button
                        title={'Register'}
                        onPress={submit}
                        color={styles.authButtons.color}
                    />
                </View>
                {waitingAPI ?  (<ActivityIndicator size="large" color="red" />) :
                (<View style={styles.authOptions}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style = {styles.authOptionsText}>Already have an account? Login here!</Text>
                </TouchableOpacity>
                </View>)
                }
            </View>
    </>
    )
}

export default Register