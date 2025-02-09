import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import { Link } from 'expo-router'

const ProductScreen = () => {
  return (
    <View className='flex flex-1'>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id} // es como el key de react
        renderItem={({ item }) =>
          <View className='mt-10'>
            <Text className='text-2xl font-work-black'>{item.title}</Text>
            <Text className=''>{item.description}</Text>


            <View className='flex flex-row justify-between'>
              <Text className='font-work-black'>${item.price}</Text>
              <Link href={`/products/${item.id}`}>Ver detalles</Link>
            </View>
          </View>

        }
      >

      </FlatList>
    </View>
  )
}

export default ProductScreen