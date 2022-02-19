import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { OngRoutes } from './ong.routes';
import { DonorRoutes } from './donor.routes';
import { GuestRoutes } from './guest.routes';
import { AuthRoutes } from './auth.routes';

import { useAuth } from '../hooks/auth';
import { useOng, OngProvider } from '../hooks/ong';

export function Routes(){

  const { owner, isLogged } = useAuth();

  const startRoute = {
    auth: <AuthRoutes />,
    ong: <OngRoutes />,
    donor: <DonorRoutes />,
    guest: <GuestRoutes />
  };
  
  const routes = startRoute[isLogged ? owner : 'auth'];

  if (owner === 'ong')
    return (
      <OngProvider>
        <NavigationContainer>
          {routes}
        </NavigationContainer>
      </OngProvider>
    );
  else if(owner === 'donor') 
    return (
      <NavigationContainer>
        {routes}
      </NavigationContainer>
    );
  else
    return (
      <NavigationContainer>
        {startRoute['auth']}
      </NavigationContainer>
  );

}