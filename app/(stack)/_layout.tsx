// https://docs.expo.dev/router/advanced/stack/

import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack
      // configuraciones globales
      screenOptions={{
        // headerShown: false // oculta el header
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white', // cambiamos el color de fondo

        }
      }}
    >

      <Stack.Screen
        name="home/index"
        options={{
          title: 'Inicio',
          animation: 'ios_from_left',
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: 'Productos',
          animation: 'ios_from_right',
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
          animation: 'fade',
        }}
      />

      <Stack.Screen
        name="settings/index"
        options={{
          title: 'Ajustes',
          animation: 'fade_from_bottom',
        }}
      />

    </Stack>
  )
}

export default StackLayout