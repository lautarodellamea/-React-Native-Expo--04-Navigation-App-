import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation()

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }


  return (
    <SafeAreaView>
      <View>
        {/* <Text>Home</Text> */}

        {/* otra forma de redireccionar pero debemos usar el forwardRef en el componente y toda esa vaina */}
        {/* <Link href={"/tabs/(stack)/products"} asChild>
          <CustomButton color="primary" children="Ir a productos" className='mb-5' />
        </Link> */}

        <CustomButton className='mb-2' color="primary" children="Ir a productos" onPress={() => router.push("/products")} />

        <CustomButton className='mb-2' color="secondary" children="Ir a perfil" onPress={() => router.push("/profile")} />

        <CustomButton className='mb-2' color="tertiary" children="Ir a ajustes" onPress={() => router.push("/settings")} />

        <CustomButton className='mb-2' variant='text-only' color="primary" children="Ir a productos" onPress={() => router.push("/products")} />


        {/* <Link className='pb-5' href="/products">Products</Link>
        <Link className='pb-5' href="/profile">Perfil</Link>
        <Link className='pb-5' href="/settings">Ajustes</Link>
        <Text className='text-black '>asdasd</Text> */}


        <CustomButton onPress={onToggleDrawer}>Abrir Menu</CustomButton>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen