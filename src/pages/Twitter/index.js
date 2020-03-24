import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

export default function Twitter({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
     <Text style={styles.pageTitle}>Aponte Problemas - Twiiter</Text>
      <Button color="#F5BA39" title="Navigate to Home" onPress={navigateToHome} />
      
    </View>
  );
}