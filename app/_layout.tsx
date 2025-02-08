
// crear archivos que no tenga
// https://www.nativewind.dev/getting-started/expo-router
//  npx expo start --clear

import React, { useEffect } from 'react'

import { Slot, SplashScreen, Stack } from "expo-router";

// Import your global CSS file
import "./global.css";
import { useFonts } from 'expo-font';

// hasta que las fuentes no se cargen, esto no se quitara
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  })


  // manejamos el splash screen
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // si las fuentes no se cargaron y no hay error devolvemos null
  if (!fontsLoaded && !error) return null

  return <Slot />
  // return <Stack />

}

export default RootLayout