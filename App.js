import React, { useState, useMemo, createContext } from 'react';

import LoginContext from './components/LoginContext'
import MainStack from './components/navigation/MainStack';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  //black magic used to pass state down as prop easily
  const authenticated = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn, setIsLoggedIn])

  //this stack is mainly just ussed for login so users can be authenticated before getting access to the app
  //Login elements are conditionally added to the stack so that the user cannot use back button to go back to them if they are logged in
  //Login validation will happen in the login and register screens. The state is saved as context and used that way later

  //main stack here
  return (
    <LoginContext.Provider value={authenticated}>
      <MainStack />
    </LoginContext.Provider>
  );
}
