import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';

export default function Water({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
      <View style={{padding:30}}>
        <ScrollView>
          <View >
           <Text style={styles.pageTitle} >Aponte problemas com água</Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={styles.description} >Possui água encanada na sua casa, nesse momento ?</Text>
          <Text style={styles.description} >Quantos dias da semana falta água na sua casa?</Text>
          <Text style={styles.description} >Possui poço na sua casa?</Text>
          <Text style={styles.description} >Selecione um tipo de poço:</Text>
          <View style={{marginTop:30}}>
              <Button color="#F5BA39" title="Enviar" onPress={navigateToHome} /> 
          </View>
         
          </View>
        </ScrollView>
      </View>
    </View>
  );
}