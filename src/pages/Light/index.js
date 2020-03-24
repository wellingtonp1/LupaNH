import React from 'react';
import { View, Text, Button, CheckBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

export default function Light({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
      <View style={{padding:30}}>
        <ScrollView>
          <View >
           <Text style={styles.pageTitle} >Aponte Problemas com a iluminação pública</Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={styles.description} >Existe Poste ?</Text>
       
          <Text style={styles.description} >As luzes estão funcionando ?</Text>
          <View style={{marginTop:30}}>
              <Button color="#F5BA39" title="Enviar" onPress={navigateToHome} /> 
          </View>
         
          </View>
        </ScrollView>
      </View>
     </View>
  );
}