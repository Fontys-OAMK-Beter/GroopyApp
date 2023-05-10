import React, { useState, useEffect, useContext } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity, Alert, ActivityIndicator, Image } from 'react-native'
import * as SS from 'expo-secure-store'
import { Post } from './helpers/API'
import { Audio, Video } from 'expo-av';
import styles from './Styles'
import logo from '../assets/Logo_v2.png'

import LoginContext from './LoginContext'
import LoadingSpinner from './helpers/LoadingSpinner'
import videoBackground from '../assets/Promo_cc_light_blur.mp4'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [waitingAPI, setWaitingAPI] = useState(false)
    const { setIsLoggedIn } = useContext(LoginContext)

    useEffect(() => {
        setIsLoading(true)
        //attempt to login via saved credentials here
        const validate = async () => {
            let userToken = ""

            try {
                userToken = await SS.getItemAsync("token")
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
        setWaitingAPI(true)
        //set loggedin state to true here to navigate to main
        if (username.length > 0 && pwd.length > 0) {

            const body = {
                email: username,
                password: pwd
            }

            Post('/User/login', body, async (res) => {
                if (res.status === 200) {
                    try {
                        await SS.setItemAsync("token", res.headers.authorization)
                        setUsername('')
                        setPwd('')
                        setWaitingAPI(false)
                        setIsLoggedIn(true)
                    } catch (e) {
                        setWaitingAPI(false)
                        console.log(e)
                        Alert.alert('An error occurred please try again')
                    }
                } else {
                    setWaitingAPI(false)
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
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) : (
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
                                placeholder='Email'
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
                                title={'Login'}
                                onPress={submit}
                                color={styles.authButtons.color}
                                
                            />
                        </View>
                        {waitingAPI ? (
                                // <ActivityIndicator size='large' color="red" />
                                LoadingSpinner({title: 'Logging in...', onlySpinner: false})
                            ) : (
                            <View style={styles.authOptions}>
                                <TouchableOpacity onPress={forgot}>
                                    <Text style = {styles.authOptionsText}>Forgot password?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={goRegister}>
                                    <Text style = {styles.authOptionsText}>Dont have an account? Register here!</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </>
            )}
            
        </>

    )
}

export default Login