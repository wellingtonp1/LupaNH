/* Core */
import React from 'react';

/* Presentational */
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const MenuItem = ({ menuItem: { image, title, description } }) => (
  <View style={styles.container}>
         
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

export default MenuItem;