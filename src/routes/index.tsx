import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { OngRoutes } from './ong.routes';
import { DonorRoutes } from './donor.routes';
import { GuestRoutes } from './guest.routes';
import { AuthRoutes } from './auth.routes';

import { useAuth } from '../hooks/auth';

export function Routes(){

  // const { } = 

  const startRoute = {
    auth: <AuthRoutes />,
    ong: <OngRoutes />,
    donor: <DonorRoutes />,
    guest: <GuestRoutes />
  };

  const { currentRoute } = useAuth();

  return (
    <NavigationContainer>
      {/* <DonorRoutes /> */}

      {startRoute[currentRoute]}
      {/* criar estado currentRoute no contexto de autenticação */}

      {/* 
        O contexto deve ter um UserLogged 
        recebendo uma string se é um visitante, 
        doador ou uma Ong 
      */}
    </NavigationContainer>
  );
}