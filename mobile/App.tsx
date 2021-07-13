import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { 
  Poppins_400Regular, 
  Poppins_700Bold, 
  Poppins_500Medium 
} from '@expo-google-fonts/poppins';
import { Archivo_900Black } from '@expo-google-fonts/archivo';

import { AppOngRoutes } from './src/routes/Ong/app.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Archivo_900Black
  });

  if (!fontsLoaded)
    return <AppLoading /> 

  return (
    <NavigationContainer>
      <StatusBar style="auto" translucent />
      <AppOngRoutes />
      {/* 
        O contexto deve ter um UserLogged 
        recebendo uma string se é um visitante, 
        doador ou uma Ong 
      */}
    </NavigationContainer>
  );
}