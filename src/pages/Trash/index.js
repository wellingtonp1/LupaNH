import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

import styles from './styles';

export default function Trash({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
    <View style={{padding:30}}>
        <ScrollView>
          <View >
           <Text style={styles.pageTitle} >Aponte problemas com coleta de lixo</Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={styles.description} >Possui coleta de lixo na sua casa?</Text>
          <Text style={styles.description} >Com que frequencia?</Text>
       
          <View style={{marginTop:30}}>
              <Button color="#F5BA39" title="Enviar" onPress={navigateToHome} /> 
          </View>
         
          </View>
        </ScrollView>
      </View>
    </View>
  );
}