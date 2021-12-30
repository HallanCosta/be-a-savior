import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { OngRoutes } from './ong.routes';
import { DonorRoutes } from './donor.routes';
import { GuestRoutes } from './guest.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  return (
    <NavigationContainer>
      <AuthRoutes />

      {/* 
        O contexto deve ter um UserLogged 
        recebendo uma string se é um visitante, 
        doador ou uma Ong 
      */}
    </NavigationContainer>
  );
}