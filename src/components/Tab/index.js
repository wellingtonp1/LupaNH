import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Help from '../../pages/Help';
import Home from '../../pages/Home';
import News from '../../pages/News';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabRoute() {
  return (
   <Tab.Navigator  tabBarOptions={{activeBackgroundColor:'#F5BA39', inactiveBackgroundColor:'#F5BA39', activeTintColor:'#777', inactiveTintColor: '#000'}} >
       <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Notícias" component={News} />
      <Tab.Screen name="Sobre" component={Help} />
    </Tab.Navigator>
  );
}