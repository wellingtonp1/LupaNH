import React,{ useState }  from 'react';
import { View, Text, Button, TouchableOpacity, Picker, StyleSheet, PermissionsAndroid, ScrollView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';


import api from '../../services';
import MapView, {Marker} from 'react-native-maps';

import styles from './styles';

export default function Trash({ navigation }) {
  
  const [position, setPosition] = useState({
    latitude: 0.0996574,
    longitude: -51.054168,
    latitudeDelta: 0.0033,
    longitudeDelta: 0.0031,
  });
  
  const request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Localização',
          message: 'A aplicação precisa da permissão de localização.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          pos => {
            setPosition({
              ...position,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          },
          error => {
            console.log(error);
            Alert.alert('Houve um erro ao pegar a latitude e longitude.');
          },
        );
      } else {
        Alert.alert('Permissão de localização não concedida');
      }
    } catch (err) {
      console.log(err);
    }
  };

  function navigateToHome() {
    navigation.navigate('Home');
  }

  async function handleReportItPress(){
    console.log('com string - ',selectedValueOften)
    console.log(selectedValueOften)
    api.post('api/trash/', {
         
          HasWasteCollection: selectedValue.value,
          Long: position.longitude,
          Lat: position.latitude,
          HowOften: selectedValueOften,
          Description: 'no comments'
    })
    .then(res => 
      alert('Problema reportado com sucesso!')
    )
    .catch(err => 
     
      alert('Ocorreu um erro, verifique sua internet e tente novamente ', err)
    ); 
  };
 
  const [selectedValue, setSelectedValue] = useState("true");
  const [selectedValueOften, setSelectedValueIsItWorking] = useState("true");
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
          <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(position.var1)}
                  >
                    <Picker.Item label="Sim" value="true" />
                    <Picker.Item label="Não" value="false" />
                  </Picker>
                </View>

          <Text style={styles.description} >Com que frequencia?</Text>
          <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValueOften}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValueIsItWorking(itemValue)}
                  >
                    <Picker.Item label="Nenhuma" value="0" />
                    <Picker.Item label="1x Semana" value="1" />
                    <Picker.Item label="3x Semana" value="2" />
                  </Picker>
                </View>

                <TouchableOpacity
            style={styles.locationButton}
            onPress={() => {
              request_location_runtime_permission();
            }}>
           
           <Text style={{marginTop: 40, color: "#fff"}} >Verifique sua localização</Text>
            <Icon  color={'#fff'} size={30} />
           
      </TouchableOpacity>
            <MapView
        style={{height: 200}}
        region={position}
        onPress={e =>
          setPosition({
            ...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            longitudeDelta: 0.0134,
            latitudeDelta: 0.0143
          })
        }>
        <Marker
          coordinate={position}
          title={'Você esta aqui!'}
          description={'Usaremos suas coordenadas'}
        />
      </MapView>

          <View style={{marginTop:30}}>
              <Button color="#F5BA39" title="Enviar" onPress={handleReportItPress} /> 
          </View>
         
          </View>
        </ScrollView>
      </View>
    </View>
  );
}