import React, { useState, createContext, useContext, useEffect } from 'react'

import { IUser } from 'interfaces'
import { StorageHelper } from '../helpers/storage.helper'

type UserContextProps = {
  user: IUser | undefined
  setUser: (user: IUser) => void
}

const Context = createContext<UserContextProps>({ user: undefined, setUser: () => {} })

export const useUserContext = () => useContext(Context)

export const UserContext: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(StorageHelper.getItem('user'))

  useEffect(() => {
    if (user) StorageHelper.saveItem('user', user)
  }, [user])

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
}
