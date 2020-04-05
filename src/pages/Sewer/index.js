import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

import styles from './styles';
import MapView, {Marker} from 'react-native-maps';

export default function Sewer({ navigation }) {
 
  const [position, setPosition] = useState({
    latitude: 0.0996574,
    longitude: -51.054168,
    latitudeDelta: 0.0033,
    longitudeDelta: 0.0031,
  });
  

 
  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
     <View style={{padding:30}}>
        <ScrollView>
          <View >
           <Text style={styles.pageTitle} >Aponte problemas com esgoto</Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={styles.description} >Sua casa possui coleta de esgoto?</Text>
          <Text style={styles.description} >Sua casa possui fossa?</Text>
       
          <View style={{marginTop:30}}>
              <Button color="#F5BA39" title="Enviar" onPress={navigateToHome} /> 
          </View>
         
          </View>
        </ScrollView>
      </View>
    </View>
  );
}