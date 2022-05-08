import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { OngRoutes } from './ong.routes';
import { DonorRoutes } from './donor.routes';
import { GuestRoutes } from './guest.routes';
import { AuthRoutes } from './auth.routes';

import { OwnerProps, useAuth } from '../hooks/auth';
import { useIncidents, IncidentsProvider } from '../hooks/incidents';

export function Routes(){

  const { owner, isLogged, currentRoute, setCurrentRoute } = useAuth();

  const allRoutesApp = {
    auth: <AuthRoutes />,
    ong: <OngRoutes />,
    donor: <DonorRoutes />,
    guest: <GuestRoutes />
  };
  
  const routesOwner = allRoutesApp[isLogged ? owner : 'auth'];

  if (currentRoute === 'ong')
    return (
      <IncidentsProvider>
        <NavigationContainer>
          {routesOwner}
        </NavigationContainer>
      </IncidentsProvider>
    );
  else if (currentRoute === 'donor') 
    return (
      <IncidentsProvider>
        <NavigationContainer>
          {routesOwner}
        </NavigationContainer>
      </IncidentsProvider>
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