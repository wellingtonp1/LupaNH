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


const PageHelp = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Page 2 ;D</Text>
    <Button 
      title="Ir para About"

      onPress={() => navigation.navigate('Home') }
    />
  </View>
);

PageHelp.navigationOptions = {
  title: null,
}

export default PageHelp;
