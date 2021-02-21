import React, { createContext, useState, useMemo } from 'react'

import accounts from '../pages/login/accounts.json'

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
  // state is not complex, otherwise useReducer is nicer
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  const getAccounts = useMemo(() => {
    return Object.fromEntries(accounts.map(item => [item.username, item.password]))
  })

  const value = { isLoggedIn, login, logout, getAccounts }

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}


