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
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Iluminação',
        description: '',
        
      },
      {
        id: 2,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Água',
        description: 'Lain pop sky blue',
      
      },
      {
        id: 3,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Coleta de Lixo',
        description: 'Andrea nappa dusty pink',
        
      },
      {
        id: 4,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Esgoto',
        description: 'Lain pop sky blue',
     
      },
      {
        id: 5,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Asfalto',
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