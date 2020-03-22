import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Twitter({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View>
      <Text>Aponte Problemas - Twiiter</Text>
      <Button title="Navigate to Home" onPress={navigateToHome} />
      
    </View>
  );
}