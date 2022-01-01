import React, 
{ 
  createContext,
  ReactNode,
  useContext, 
  useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import { COLLECTION_USERS } from '../configs/database';

export type UserProps = {
  id: string;
  name: string;
  phone: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: UserProps;
  owner: OwnerProps;
  currentRoute: CurrentRouteProps;
  setCurrentRoute: (route: CurrentRouteProps) => void;
  setOwner: (owner: OwnerProps) => void;
  signIn: (jwt: string) => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export type OwnerProps = 'ong' | 'donor' | 'guest';

type CurrentRouteProps = OwnerProps | 'auth';

type JWTProps = {
  email: string;
  exp: string;
  iat: string;
  sub: string;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

  const [owner, setOwner] = useState({} as OwnerProps);
  const [currentRoute, setCurrentRoute] = useState<CurrentRouteProps>('auth');
  const [user, setUser] = useState<UserProps>({} as UserProps);

  async function signIn(jwt: string) {
    console.log('Logged');

    const decodedJwt = jwtDecode(jwt) as JWTProps;

    const userData = {
      id: decodedJwt.sub,
      email: decodedJwt.email,
      name: 'Hállan da Silva Costa',
      phone: '18997676538',
      token: jwt
    };

    await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
    
    setUser(userData);
    setCurrentRoute(owner);
  }

  async function signOut() {
    setCurrentRoute('auth');
  }

  return (
    <AuthContext.Provider value={{
      user,
      owner,
      currentRoute,
      setCurrentRoute,
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