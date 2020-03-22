import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function News({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View>
      <Text>Aponte Problemas - News</Text>
      <Button title="Navigate to Home" onPress={navigateToHome} />
      
    </View>
  );
}