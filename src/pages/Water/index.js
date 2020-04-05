import React,{ useState }  from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, Picker, StyleSheet, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import api from '../../services';
import MapView, {Marker} from 'react-native-maps';

export default function Water({ navigation }) {
  
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

  async function handleReportItPress(){
    console.log('PipedWater', selectedValue0.value)
    console.log('HasOftenLack', selectedValue1)
    console.log('HasBorehole', selectedValue2)
    console.log('Kindof', selectedValue3)
    
    api.post('api/water/', {
         
          HasPipedWater: selectedValue0.value,
          HasOftenWaterLack: 0,
          Long: position.longitude,
          Lat: position.latitude,
          HasBorehole: false,
          KindofBorehole: 0,
          Description: 'no comments'
    })
    .then(res => 
      console.log('Sucesso!', res)
    )
    .catch(err => console.log('Deu ruim :(', err)
    ); 
  };
  
  function navigateToHome() {
    navigation.navigate('Home');
  }


  const [selectedValue0, setSelectedValue0] = useState("true");
  const [selectedValue1, setSelectedValue1] = useState("0");
  const [selectedValue2, setSelectedValue2] = useState("true");
  const [selectedValue3, setSelectedValue3] = useState("0");

  return (
    <View style={{ flex: 1, backgroundColor: '#2A7549' }}>
      <View style={{padding:30}}>
        <ScrollView>
          <View >
           <Text style={styles.pageTitle} >Aponte problemas com água</Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={styles.description} >Possui água encanada na sua casa, nesse momento ?</Text>
          <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValue0}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue0(itemValue)}
                  >
                    <Picker.Item label="Sim" value='true' />
                    <Picker.Item label="Não" value='false' />
                  </Picker>
                </View>
          <Text style={styles.description} >Quantos dias da semana falta água na sua casa?</Text>
          <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValue1}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                  >
                    <Picker.Item label="Nunca" value="0" />
                    <Picker.Item label="1 vez" value="1" />
                    <Picker.Item label="3 ou mais vezes" value="2" />
                  </Picker>
                </View>
          <Text style={styles.description} >Possui poço na sua casa?</Text>
          <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValue2}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Sim" value="true" />
                    <Picker.Item label="Não" value="false " />
                  </Picker>
                </View>
          <Text style={styles.description} >Selecione um tipo de poço:</Text>
          <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValue3}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Artesiano" value="0" />
                    <Picker.Item label="Amazonas" value="1" />
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
        style={{height: 180}}
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