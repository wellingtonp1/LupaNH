/* Core */
import React from 'react';

/* Presentational */
import {View, Image, Text,Button, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';


const MenuItem = ({ menuItem: {  image, title, description } }) => (
 
  
 <View style={styles.container} > 
  <TouchableOpacity activeOpacity = { .3 } >
  <View style={styles.imageContainer} >
           <Image source={{ uri: image }} style={styles.image} />
    </View>
  <View style={styles.infoContainer}>
     <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
   </View>
   </TouchableOpacity>
</View>


);
export default MenuItem;