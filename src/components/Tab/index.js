import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

import Help from '../../pages/Help';
import Home from '../../pages/Home';
import News from '../../pages/News';


export default function TabRoute() {
  return (
   <Tab.Navigator tabBarOptions={{ activeBackgroundColor:'#F5BA39', inactiveBackgroundColor:'#F5BA39', activeTintColor:'#777', inactiveTintColor: '#000'}} >
       <Tab.Screen name="Início" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" color="#333" size={24} />,
        }} />
      <Tab.Screen name="Notícias" component={News}  options={{
          tabBarLabel: 'Notícias',
          tabBarIcon: () => <Icon name="list" color="#333" size={24} />,
        }} />
      <Tab.Screen name="Sobre" component={Help}  options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: () => <Icon name="help" color="#333" size={24} />,
        }} />
    </Tab.Navigator>
  );
}