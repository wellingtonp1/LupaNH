import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

export default function News({ navigation }) {
 

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
      <Text style={styles.pageTitle}>Notícias</Text>
          
    </View>
  );
}