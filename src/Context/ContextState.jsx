import React, {useState} from 'react'
import AppContext from './AppContext'

function ContextState({children}) {
const [user, setUser] = useState('fashion')
const [password, setPassword] = useState('1111')
const [address, setAdress] = useState('Johannesburg')

  return (
    <AppContext.Provider value={[user, password,address]}>
         {children}
    </AppContext.Provider>
  )
}

export default ContextState
