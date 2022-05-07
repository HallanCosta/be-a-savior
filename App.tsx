import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { Archivo_900Black } from '@expo-google-fonts/archivo';
import { LogBox, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    prepare();
  }, []);

  async function prepare() {
    try {
      await SplashScreen.preventAutoHideAsync();

      await Font.loadAsync({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Archivo_900Black
      });

      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }

  if (!appIsReady) return null;
  else {
    (async () => { await SplashScreen.hideAsync(); })();
    
    LogBox.ignoreLogs([
      "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
      "expo-app-loading is deprecated in favor of expo-splash-screen: use SplashScreen.preventAutoHideAsync() and SplashScren.hideAsync() instead. https://docs.expo.dev/versions/latest/sdk/splash-screen/"
    ]);

    return (
      <AuthProvider>
        <StatusBar style="auto" translucent />
        <Routes />
      </AuthProvider>
    );
  }
}