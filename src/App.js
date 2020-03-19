
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  ToolbarAndroid } from 'react-native';

import Menu from './components/Menu';
import Tabs from './components/Tabs';

const App: () => React$Node = () => {
  return (
    <>
       <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
          <Image style={styles.head} source={require('../images/lupanh.png')} />
          <ScrollView>
             <Menu />
          </ScrollView>
          <Tabs /> 
         </View>   
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    
    },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
 
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  head: {
    width: 390,
    height: 210,
  }
});

export default App;
