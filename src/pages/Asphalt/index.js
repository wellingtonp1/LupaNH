import React,{ useState }  from 'react';
import { View, Text, Button, TouchableOpacity, Picker, PermissionsAndroid, ScrollView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Formik } from 'formik';

import api from '../../services';
import MapView, {Marker} from 'react-native-maps';

import styles from './styles';

import MapWatcher from '../../components/MapWatcher';

export default function Asphalt({ navigation }) {
  
  const [position, setPosition] = useState({
    latitude: 0.0996574,
    longitude: -51.054168,
    latitudeDelta: 0.0033,
    longitudeDelta: 0.0031,
  });
  //
  return (
  
    <View style={{padding:30, backgroundColor: "#ccc"}}>
      
          <View >
           <Text style={styles.pageTitle} >Aponte falta de asfalto</Text>
          </View>

          <View style={{marginTop:30, width: 400, height: 400}}>
              <MapWatcher  />
          </View>   
          </View>
  );
}
