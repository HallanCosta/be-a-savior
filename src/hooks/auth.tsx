import React, 
{ 
  createContext,
  ReactNode,
  useContext, 
  useEffect, 
  useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import { api } from '../services/api';

import { COLLECTION_USERS } from '../configs/database';

type AuthContextData = {
  isLogged: boolean;
  user: UserProps | null;
  owner: OwnerProps;
  setOwner: (owner: OwnerProps) => void;
  signIn: (jwt: string, rememberMe: boolean) => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export type UserProps = {
  id: string;
  name: string;
  phone: string;
  email: string;
  token: string;
  owner: OwnerProps
}

export type OwnerProps = 'ong' | 'donor' | 'guest';

type JWTProps = UserProps & {
  exp: string;
  iat: string;
  sub: string;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

  const [owner, setOwner] = useState('' as OwnerProps);
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    const storagedUser = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storagedUser) {
      const userData: UserProps = JSON.parse(storagedUser); 

      api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

      setOwner(userData.owner);
      setUser(userData);
    } 
  }

  async function signIn(jwt: string, rememberMe: boolean) {
    const decodedJwt = jwtDecode(jwt) as JWTProps;

    const userData = {
      id: decodedJwt.sub,
      email: decodedJwt.email,
      name: decodedJwt.name,
      phone: decodedJwt.phone,
      owner: decodedJwt.owner,
      token: jwt
    };

    if (rememberMe) {
      await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
    }
    
    setUser(userData);
  }
  
  async function signOut() {
    console.log('logout');

    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{
      user,
      owner,
      isLogged: !!user,
      setOwner,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )

}


function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}