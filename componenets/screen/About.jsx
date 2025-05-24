import React from "react";
import { View, Text, Button } from "react-native";

const About = ({ navigation }) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button 
        title="Open main page" 
        onPress={() => navigation.replace('MainPage')}
      />
    </View>
  );
};

export default About;
