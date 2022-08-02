import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { OngRoutes } from './ong.routes';
import { DonorRoutes } from './donor.routes';
import { GuestRoutes } from './guest.routes';
import { AuthRoutes } from './auth.routes';

import { useAuth } from '../hooks/auth';
import { IncidentProvider } from '../hooks/incident';
import { OngProvider } from '../hooks/ong';
import { DonorProvider } from '../hooks/donor';

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
      <IncidentProvider>
        <OngProvider>
          <NavigationContainer>
            {routesOwner}
          </NavigationContainer>
        </OngProvider>
      </IncidentProvider>
    );
  else if (currentRoute === 'donor') 
    return (
      <IncidentProvider>
        <DonorProvider>
          <NavigationContainer>
            {routesOwner}
          </NavigationContainer>
        </DonorProvider>
      </IncidentProvider>
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