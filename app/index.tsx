import { Link, Redirect } from 'expo-router';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {


  return <Redirect href="/(stack)/home" />


  // return (

  //   // el SafeAreaView es para que no se vea el contenido debajo de la barra de navegacion del propio celular
  //   <SafeAreaView>
  //     <View className='mt-6 mx-2'>
  //       <Text className='text-3xl text-blue-500' style={{ fontFamily: 'WorkSans-Black' }}>Hola Mundo</Text>

  //       <Text className='text-3xl font-work-light text-secondary'>Hola Mundo</Text>

  //       <Text className='text-3xl font-work-medium text-secondary-200'>Hola Mundo</Text>

  //       <Text className='text-3xl font-work-black text-primary'>Hola Mundo</Text>

  //       <Link href="/products" className='text-3xl font-work-black text-white bg-blue-500 p-2 w-fit'>Ir a productos</Link>

  //     </View>
  //   </SafeAreaView>
  // );
}
