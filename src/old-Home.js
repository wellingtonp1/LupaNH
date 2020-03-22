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


const Home = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
    <HeaderBar />
    <Image style={styles.head}  source={require('../images/lupanh.png')} />
    <Button 
      title="Ir para About"
      onPress={() => navigation.navigate('Page2') }
    />
    <ScrollView>
    <Menu />
    </ScrollView>
    <Tabs /> 
  </View>
);

Home.navigationOptions = {
  title: null,
}

export default Home;

//const Home = ({ navigation }) => (
  //   return (
       
    //      <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
      //       <HeaderBar />
        //      <Image style={styles.head} source={require('../images/lupanh.png')} />
          //    <ScrollView>
            //    <Menu />
            //  </ScrollView>
            // <Tabs /> 
         // </View>   
          
//);
   
   const styles = StyleSheet.create({
     
    head: {
       width: 390,
       height: 210,
    }
   });
   
  // Home.navigationOptions = {
 //   title: 'Home',
//  }
//export default Home;