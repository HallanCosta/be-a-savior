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

type AuthContextData = {
  isLogged: boolean;
  user: UserProps;
  owner: OwnerProps;
  currentRoute: CurrentRouteProps;
  setOwner: (owner: OwnerProps) => void;
  setCurrentRoute: (route: CurrentRouteProps) => void;
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
}

export type OwnerProps = 'ong' | 'donor' | 'guest';

type CurrentRouteProps = OwnerProps | 'auth';

type JWTProps = {
  email: string;
  exp: string;
  iat: string;
  sub: string;
};

type LoggedProps = {
  owner: OwnerProps | 'auth';
  value: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

  const [owner, setOwner] = useState({} as OwnerProps);
  const [currentRoute, setCurrentRoute] = useState<CurrentRouteProps>('auth');
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [isLogged, setIsLogged] = useState(false);

  async function signIn(jwt: string, rememberMe: boolean) {
    console.log('Logged');

    const decodedJwt = jwtDecode(jwt) as JWTProps;

    const userData = {
      id: decodedJwt.sub,
      email: decodedJwt.email,
      name: 'Hállan da Silva Costa',
      phone: '18997676538',
      token: jwt
    };

    if (rememberMe) {
      await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
    }
    
    setUser(userData);
    setCurrentRoute(owner);
  }
  
  async function signOut() {
    // setIsLogged({
    //   owner: 'auth',
    //   value: false
    // });
    AsyncStorage.clear().then(() => {
      setUser({} as UserProps);
    });
    setCurrentRoute('auth');
  }

  return (
    <AuthContext.Provider value={{
      user,
      owner,
      currentRoute,
      isLogged: !!user,
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