/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import MenuItem from './MenuItem';
import styles from './styles';


export default class Menu extends Component {
  state = {
    menuItem: [
      {
        id: 1,
        image: 'https://imglupa.blob.core.windows.net/img/light.png',
        title: 'Iluminação',
        description: '',
        
      },
      {
        id: 2,
        image: 'https://imglupa.blob.core.windows.net/img/water.png',
        title: 'Água',
        description: 'Lain pop sky blue',
      
      },
      {
        id: 3,
        image: 'https://imglupa.blob.core.windows.net/img/trash.png',
        title: 'Coleta de Lixo',
        description: 'Andrea nappa dusty pink',
        
      },
      {
        id: 4,
        image: 'https://imglupa.blob.core.windows.net/img/sewer.png',
        title: 'Esgoto',
        description: 'Lain pop sky blue',
     
      },
            
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.menuItem.map(menuItem => <MenuItem key={menuItem.id} menuItem={menuItem} />) }
      </View>
    );
  }
}