import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';
import { Archivo_900Black } from '@expo-google-fonts/archivo';

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Archivo_900Black
  });

  if (!fontsLoaded)
    return <AppLoading /> 

  return (
    <AuthProvider>
      <StatusBar style="auto" translucent />
      <Routes />
    </AuthProvider>
  );
}