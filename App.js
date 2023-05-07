import React, { useState, useMemo } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import LoginContext from './components/LoginContext'
import MainStack from './components/navigation/MainStack';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  //black magic used to pass state down as context
  const authenticated = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn, setIsLoggedIn])

  //Login validation will happen in the login and register screens. The state is saved as context and used that way later

  return (
    <LoginContext.Provider value={authenticated}>
      <StatusBar barStyle="light-content"/>
      <MainStack />
    </LoginContext.Provider>
  );
}
