import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/products.store'

const ProductScreen = () => {

  const navigation = useNavigation()

  const params = useLocalSearchParams()
  console.log({ params })

  const { id } = params
  const product = products.find(product => product.id === id)

  useEffect(() => {
    // para cambiar el titulo de acuerdo al producto
    navigation.setOptions({ title: product?.title })
  }, [])


  if (!product) {
    return <Redirect href="/products" />
  }


  return (
    <View>
      <Text className='font-work-black text-2xl'>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text className='font-work-black'>${product.price}</Text>
    </View>
  )
}

export default ProductScreen