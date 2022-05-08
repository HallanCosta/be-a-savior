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

type SignProps = {
  jwt: string;
  rememberMe: boolean;
  route: OwnerProps;
}

type AuthContextData = {
  isLogged: boolean;
  user: UserProps | null;
  owner: OwnerProps;
  setOwner: (owner: OwnerProps) => void;
  currentRoute: OwnerProps;
  setCurrentRoute: (route: OwnerProps) => void;
  signInGuest: () => void;
  signIn: ({ jwt, rememberMe, route }: SignProps) => Promise<void>;
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
  const [currentRoute, setCurrentRoute] = useState('' as OwnerProps);
  // const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    const storagedUser = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storagedUser) {
      const userData: UserProps = JSON.parse(storagedUser); 

      api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

      setOwner(userData.owner);
      setCurrentRoute(userData.owner);
      setUser(userData);
    } 
  }

  async function signIn({ 
    jwt, 
    rememberMe, 
    route
  }: SignProps) {
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
    setCurrentRoute(route);
  }

  async function signOut() {
    console.log('> Logout');
    // setCurrentRoute('' as OwnerProps);

    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  async function signInGuest() {
    setUser({} as UserProps);
    setOwner('guest');
    setCurrentRoute('guest');
  }

  return (
    <AuthContext.Provider value={{
      user,
      owner,
      currentRoute,
      isLogged: !!user,
      setOwner,
      signInGuest,
      setCurrentRoute,
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