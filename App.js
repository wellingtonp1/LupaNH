import React from 'react';
import Routes from './src/Routes';
import { StatusBar } from 'react-native';
import { NavigationNativeContainer, NavigationContainer } from '@react-navigation/native';

export default function navinext() {
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
}