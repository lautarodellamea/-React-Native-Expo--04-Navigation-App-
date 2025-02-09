// Tabs
// https://docs.expo.dev/router/advanced/tabs/

// Icons
// https://docs.expo.dev/guides/icons/
// https://ionic.io/ionicons

import { View, Text } from 'react-native'
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      headerShown: false, // oculta el header
      // tabBarStyle: { backgroundColor: '#000' }, // cambiamos el color de fondo
      // tabBarActiveBackgroundColor: '#fff', // cambiamos el color de fondo al seleccionar una pestaña
      // tabBarShowLabel: false, // oculta los titulos
    }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          // tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          // tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout