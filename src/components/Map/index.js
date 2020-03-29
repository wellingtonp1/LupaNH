/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';


export default class Map extends Component {

state = {
    region: null
};



    render(){

    //    const { region } = this.state;
       
        return(
            <View style={{ flex: 1}}>
             <MapView style={{ flex: 1, margin: 10}} 
               region={{latitude: -23.6965032, longitude: -46.7615448, latitudeDelta: 0.0143,
                   longitudeDelta: 0.0134}} 
              //  region={region}
                showsUserLocation 
                loadingEnabled
            />
            </View>
        );

    } 
}

