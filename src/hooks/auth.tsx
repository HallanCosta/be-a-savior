import React, 
{ 
  createContext,
  ReactNode,
  useContext, 
  useState
} from 'react';

export type UserProps = {
  name: string;
  phone: string;
  email: string;
}

export type OwnerProps = 'ong' | 'donor' | 'guest';

type CurrentRouteProps = OwnerProps | 'auth';

type AuthContextData = {
  user: UserProps;
  owner: OwnerProps;
  currentRoute: CurrentRouteProps;
  setCurrentRoute: (route: CurrentRouteProps) => void;
  setOwner: (owner: OwnerProps) => void;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

  const [owner, setOwner] = useState({} as OwnerProps);
  const [currentRoute, setCurrentRoute] = useState<CurrentRouteProps>('auth');
  const [user, setUser] = useState<UserProps>({} as UserProps);

  async function signIn() {
    console.log('Logged');

    setUser({
      name: 'Hállan da Silva Costa',
      phone: '18997676538',
      email: 'hallan.costa1@hotmail.com'
    });

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