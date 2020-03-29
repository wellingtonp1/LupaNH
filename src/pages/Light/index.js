import React from 'react';
import { View, Text, Button, CheckBox, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { withFormik } from 'formik';
import Map from '../../components/Map';

import styles from './styles';

const Form = (props) => (
  <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
      <View >
         <Text style={styles.pageTitle} >Aponte Problemas com a iluminação pública</Text>
      </View>
 <View>

    <Text style={styles.description} >Existe Poste ?</Text>
    <TextInput style={ styles.formField }
      value={props.values.HasLightPole}
      onChangeText={text => props.setFieldValue('HasLightPole', text)}
    />
     <Text style={styles.description} >As luzes estão funcionando ?</Text>
    <TextInput style={ styles.formField }
      value={props.values.IsItWorking}
      onChangeText={text => props.setFieldValue('IsItWorking', text)}
    />

    <Button color="#F5BA39"
      onPress={props.handleSubmit}
      title="Enviar as informações"
    />
  </View>
  
    <Map />
   

  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ HasLightPole: '', HasLightPole: '', Long: '', Lat: '', Description: '' }),

  handleSubmit: (values, { setSubmitting, setErrors }) => {
    apiService.post('https://lupanhapi.azurewebsites.net/api/light/', values)
      .then(/* sucesso */)
      .catch(err => {
        setSubmitting(false);
        setErrors({ message: err.message });
      });
  }
})(Form);

  
//  return (
  //  <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
   //   <View style={{padding:30}}>
    //    <ScrollView>
     //     <View >
      //     <Text style={styles.pageTitle} >Aponte Problemas com a iluminação pública</Text>
       //   </View>
        //  <View style={{marginTop:30}}>
        //  <Text style={styles.description} >Existe Poste ?</Text>
       
     //     <Text style={styles.description} >As luzes estão funcionando ?</Text>
     //     <View style={{marginTop:30}}>
      ///        <Button color="#F5BA39" title="Enviar" onPress={navigateToHome} /> 
        //  </View>
         
        //  </View>
    //    </ScrollView>
    //  </View>
    // </View>
 // );
// }