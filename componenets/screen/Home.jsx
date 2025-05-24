import { Button, Text, View } from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button  title='About' 
      onPress={() => navigation.navigate('About')}/>
    </View>
  )
}

export default Home
