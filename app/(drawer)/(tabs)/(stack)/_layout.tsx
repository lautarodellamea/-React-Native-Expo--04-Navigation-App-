// https://docs.expo.dev/router/advanced/stack/

import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { Text } from 'react-native'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const StackLayout = () => {

  const navigation = useNavigation()

  const onHeaderLeftClick = (canGoBack: boolean) => {

    if (canGoBack) {
      navigation.dispatch(StackActions.pop())

      // router.back()
      return
    }

    navigation.dispatch(DrawerActions.toggleDrawer)
  }


  return (
    <Stack
      // configuraciones globales
      screenOptions={{
        // headerShown: false, // oculta el header
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white', // cambiamos el color de fondo
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? 'arrow-back' : 'grid-outline'}
            size={20}
            className='mr-2'
            onPress={() => onHeaderLeftClick(canGoBack!)} />),
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