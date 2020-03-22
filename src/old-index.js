import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
   Button,
 } from 'react-native';

import Menu from './components/Menu';
import Tabs from './components/Tabs';
import HeaderBar from './components/HeaderBar';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

//pages
import Home from './Home';
import Page2 from './Page2';
import PageHelp from './PageHelp';
import PageHelpMenuItem from './components/Menu/MenuItem';


const mainNavigation = createSwitchNavigator({
  Home,
  Page2,
  PageHelp,
  PageHelpMenuItem
});

//const App: () => React$Node = () => {
// return (
    
  //   <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
    //     <HeaderBar />
      //     <Image style={styles.head} source={require('../images/lupanh.png')} />
        //   <ScrollView>
          //   <Menu />
        //   </ScrollView>
      //    <Tabs /> 
    //   </View>   
       
    //    );
//};

//const styles = StyleSheet.create({
  
  //head: {
    //width: 390,
    //height: 210,
//  }
//});

//export default App;
export default createAppContainer(mainNavigation);