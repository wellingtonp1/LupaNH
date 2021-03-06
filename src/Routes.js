import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'; 

import TabRoute from './components/Tab';
import React from 'react';

const Stack = createStackNavigator();



import Light from './pages/Light';
import Water from './pages/Water';
import Trash from './pages/Trash';
import Sewer from './pages/Sewer';
import Asphalt from './pages/Asphalt';


export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: {backgroundColor: '#F5BA39' }}} >
      <Stack.Screen name="Home" component={TabRoute} options={{ title: 'Aponte Problemas' ,headerTitleAlign: "center" }} />
      <Stack.Screen  name="Light"  component={Light} options={{ title: 'Problemas com Iluminação' ,headerTitleAlign: "center" }}  />
      <Stack.Screen  name="Water"  component={Water} options={{ title: 'Problemas com Água' ,headerTitleAlign: "center" }}  />
      <Stack.Screen  name="Trash"  component={Trash} options={{ title: 'Problemas com Lixo' ,headerTitleAlign: "center" }}  />
      <Stack.Screen  name="Sewer"  component={Sewer} options={{ title: 'Problemas de Esgoto' ,headerTitleAlign: "center" }}  />
      <Stack.Screen  name="Asphalt"  component={Asphalt} options={{ title: 'Problemas de Asfalto' ,headerTitleAlign: "center" }}  />
    </Stack.Navigator>
      
  );
}