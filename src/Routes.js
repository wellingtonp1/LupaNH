import { createStackNavigator } from '@react-navigation/stack'; 

import TabRoute from './components/Tab';
import React from 'react';

const Stack = createStackNavigator();


import Home from './pages/Home';
import Light from './pages/Light';
import Water from './pages/Water';
import Trash from './pages/Trash';
import Sewer from './pages/Sewer';



export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#F5BA39'}, headerTintColor: '#000'}}  >
      <Stack.Screen name="Home" component={TabRoute} options={{ title: 'Aponte Problemas' ,headerTitleAlign: "center" }} />
      <Stack.Screen  name="Light"  component={Light} options={{ title: 'Iluminação' ,headerTitleAlign: "center" }}  />
      <Stack.Screen  name="Water"  component={Water} options={{ title: 'Problemas com Água' ,headerTitleAlign: "center" }}  />
      <Stack.Screen  name="Trash"  component={Trash} options={{ title: 'Lixo' ,headerTitleAlign: "center" }}  />
      <Stack.Screen  name="Sewer"  component={Sewer} options={{ title: 'Problemas de Esgoto' ,headerTitleAlign: "center" }}  />
    </Stack.Navigator>
      
  );
}