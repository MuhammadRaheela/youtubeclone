import { Button, Text, View } from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button  title='Go To Details' 
      onPress={() => navigation.navigate('Details')}/>
    </View>
  )
}

export default Home
