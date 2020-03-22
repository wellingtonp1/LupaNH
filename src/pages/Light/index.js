import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Light({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
      <Text>Aponte Problemas - Light</Text>
      <Button title="Navigate to Home" onPress={navigateToHome} />
      
    </View>
  );
}