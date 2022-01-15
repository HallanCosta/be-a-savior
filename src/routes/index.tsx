import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { OngRoutes } from './ong.routes';
import { DonorRoutes } from './donor.routes';
import { GuestRoutes } from './guest.routes';
import { AuthRoutes } from './auth.routes';

import { useAuth } from '../hooks/auth';

export function Routes(){

  const startRoute = {
    auth: <AuthRoutes />,
    ong: <OngRoutes />,
    donor: <DonorRoutes />,
    guest: <GuestRoutes />
  };

  const { owner, isLogged } = useAuth();

  return (
    <NavigationContainer>
      {
        startRoute[isLogged ? owner : 'auth']
      }
    </NavigationContainer>
  );
}