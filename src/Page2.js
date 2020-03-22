import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
   Button,
 } from 'react-native';

import Menu from './components/Menu';
import Tabs from './components/Tabs';
import HeaderBar from './components/HeaderBar';


const Page2 = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Page 2 ;D</Text>
    <Button 
      title="Ir para About"
      title="Ir para About"
      onPress={() => navigation.navigate('Home') }
    />
  </View>
);

Page2.navigationOptions = {
  title: 'Home',
}

export default Page2;
