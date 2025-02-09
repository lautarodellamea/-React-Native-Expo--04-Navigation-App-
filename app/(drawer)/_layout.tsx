import { View, Text } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import CustomDrawer from '@/components/shared/CustomDrawer'

const DrawerLayoyt = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawer}

        screenOptions={{
          // headerShown: false,
          overlayColor: 'rgba(0, 0, 0, 0.5)',
          drawerActiveTintColor: "indigo",
          headerShadowVisible: false,
          sceneStyle: {
            backgroundColor: 'white',

          }

        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            drawerLabel: 'Tabs + Stack',
            title: 'Tabs + Stack',
            drawerIcon: ({ color, size }) => (<Ionicons name='albums-outline' color={color} size={size} />)
          }}
        />
        <Drawer.Screen
          name="user/index"
          options={{

            drawerLabel: 'User',
            title: 'Usuario',
            drawerIcon: ({ color, size }) => (<Ionicons name='person-circle-outline' color={color} size={size} />)
          }}
        />
        <Drawer.Screen
          name="schedule/index"
          options={{
            drawerLabel: 'Horario',
            title: 'Horario',
            drawerIcon: ({ color, size }) => (<Ionicons name='calendar-outline' color={color} size={size} />)
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerLayoyt