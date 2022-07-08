import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { OngRoutes } from './ong.routes';
import { DonorRoutes } from './donor.routes';
import { GuestRoutes } from './guest.routes';
import { AuthRoutes } from './auth.routes';

import { useAuth } from '../hooks/auth';
import { OngProvider } from '../hooks/ong';

export function Routes(){
  const { owner, isLogged, currentRoute, setCurrentRoute } = useAuth();

  const allRoutesApp = {
    auth  : <AuthRoutes />,
    ong   : <OngRoutes />,
    donor : <DonorRoutes />,
    guest : <GuestRoutes />
  };
  
  const routesOwner = allRoutesApp[isLogged ? owner : 'auth'];

  if (currentRoute === 'ong')
    return (
      <OngProvider>
        <NavigationContainer>
          {routesOwner}
        </NavigationContainer>
      </OngProvider>
    );
  else if (currentRoute === 'donor') 
    return (
      <NavigationContainer>
        {routesOwner}
      </NavigationContainer>
    );
  else if (currentRoute === 'guest')
    return (
      <NavigationContainer>
        {routesOwner}
      </NavigationContainer>
    );
  else
    return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    );
}