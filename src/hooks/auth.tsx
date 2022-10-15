import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

import { api } from "../services/api";

import { COLLECTION_USERS } from "../configs/database";

type SignProps = {
  jwt: string;
  rememberMe: boolean;
};

type AuthContextData = {
  isLogged: boolean;
  headers: HeadersAuthProps;
  user: UserProps;
  owner: OwnerProps;
  setOwner: (owner: OwnerProps) => void;
  signIn: ({ jwt, rememberMe }: SignProps) => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export type UserProps = {
  id: string;
  name: string;
  phone: string;
  email: string;
  token: string;
  owner: OwnerProps;
};

export type OwnerProps = "ong" | "donor" | "guest";

type HeadersAuthProps = {
  headers: {
    authorization: string;
  };
};

type JWTProps = UserProps & {
  exp: string;
  iat: string;
  sub: string;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [owner, setOwner] = useState<OwnerProps>();
  const [user, setUser] = useState<UserProps>();
  const [headers, setHeaders] = useState<HeadersAuthProps>(
    {} as HeadersAuthProps
  );

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    const storagedUser = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storagedUser) {
      const userData: UserProps = JSON.parse(storagedUser);

      api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

      setUser(userData);
      setOwner(userData.owner);
    }
  }

  async function signIn({ jwt, rememberMe }: SignProps) {
    console.log("> SignIn", owner);
    const decodedJwt = jwtDecode(jwt) as JWTProps;

    const userData = {
      id: decodedJwt.sub,
      email: decodedJwt.email,
      name: decodedJwt.name,
      phone: decodedJwt.phone,
      owner: decodedJwt.owner,
      token: jwt,
    };

    if (rememberMe) {
      await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
    }

    const headersAuth = {
      headers: {
        authorization: `Bearer ${userData.token}`,
      },
    };

    setHeaders(headersAuth);
    setUser(userData);
  }

  async function signOut() {
    console.log("> Logout");

    AsyncStorage.clear().then(() => {
      setUser(undefined);
      setOwner(undefined);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        headers,
        user: user as UserProps,
        owner: owner as OwnerProps,
        isLogged: !!user,
        setOwner,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
