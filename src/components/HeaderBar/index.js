/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const HeaderBar = (navigation) => (
  <View style={styles.container}>
    <Icon name="ios-help" size={24} style={styles.icon} onPress={() => this.navigation.navigate('Page2')} />
    <Text style={styles.title}>Aponte Problemas</Text>
    <Icon name="ios-more" size={24} style={styles.icon} />
  </View>
);

export default HeaderBar;