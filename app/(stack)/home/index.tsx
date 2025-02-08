import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>

        <Link href={"/products"} asChild>
          <CustomButton color="primary" children="Ir a productos" className='mb-5' />
        </Link>

        <CustomButton className='mb-5' color="primary" children="Ir a productos" onPress={() => router.push("/products")} />

        <CustomButton className='mb-5' color="secondary" children="Ir a perfil" onPress={() => router.push("/profile")} />

        <CustomButton className='mb-5' color="tertiary" children="Ir a ajustes" onPress={() => router.push("/settings")} />

        <CustomButton className='mb-5' variant='text-only' color="primary" children="Ir a productos" onPress={() => router.push("/products")} />


        <Link className='pb-5' href="/products">Products</Link>
        <Link className='pb-5' href="/profile">Perfil</Link>
        <Link className='pb-5' href="/settings">Ajustes</Link>
        <Text className='text-black '>asdasd</Text>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen