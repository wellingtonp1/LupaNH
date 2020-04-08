import React,{ useState }  from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, Picker, StyleSheet, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import api from '../../services';
import MapView, {Marker} from 'react-native-maps';

export default function Sewer({ navigation }) {
 
  const [position, setPosition] = useState({
    latitude: 0.0996574,
    longitude: -51.054168,
    latitudeDelta: 0.0033,
    longitudeDelta: 0.0031,
    _hasSanitation: false,
    _hasCesspool: false
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


  async function handleReportItPress(){

    // aqui o valor correto da variavel aparece
  
    console.log('valor da variavel: ', selectedValue)
    
    api.post('api/sewer/', {
          
          // aqui nao vai, erro 400
          HasSanitation: selectedValue,
          Long: position.longitude,
          Lat: position.latitude,
          HasCesspool: position._hasCesspool,
          Description: 'no comments'
    })
    .then(res => 
      alert('Problema reportado com sucesso!')
    )
    .catch(err => alert('Ocorreu um erro: ', err)
    ); 
  };
  

  const [selectedValue, setSelectedValue] = useState("true");
  const [selectedValue1, setSelectedValue1] = useState("true");

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
     <View style={{padding:30}}>
        <ScrollView>
          <View >
           <Text style={styles.pageTitle} >Aponte problemas com esgoto</Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={styles.description} >Sua casa possui coleta de esgoto?</Text>
          <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Sim" value='true' />
                    <Picker.Item label="Não" value='false' />
                  </Picker>
          </View>

          <Text style={styles.description} >Sua casa possui fossa?</Text>
          
          <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValue1}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                  >
                    <Picker.Item label="Sim" value='true' />
                    <Picker.Item label="Não" value='false' />
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
        style={{height: 150}}
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