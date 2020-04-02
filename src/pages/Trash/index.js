import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

import api from '../../services';


import styles from './styles';

export default function Trash({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home');
  }
  //

  async function handleReportItPress(){
 
    api.post('api/light/', {
         
          HasLightPole: true,
          Long: -51.0539441,
          Lat: 0.0963026,
          IsItWorking: true,
          Description: 'no comments'
    })
    .then(res => console.log('Sucesso!', res))
    .catch(err => console.log('Deu ruim :(', err)
    ); 
  };
  //
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
              <Button color="#F5BA39" title="Enviar" onPress={handleReportItPress} /> 
          </View>
         
          </View>
        </ScrollView>
      </View>
    </View>
  );
}