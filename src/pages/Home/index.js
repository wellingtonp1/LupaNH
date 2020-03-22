import React from 'react';
import { ScrollView, View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home({ navigation }) {
  function navigateToLight() {
    navigation.navigate('Light');
  }
  function navigateToWater() {
    navigation.navigate('Water');
  }
  function navigateToTrash() {
    navigation.navigate('Trash');
  }
  function navigateToSewer() {
    navigation.navigate('Sewer');
  }
 
  return (

    <View style={{ flex: 1, backgroundColor: '#2A7549', padding: 10 }}>
    <Image style={styles.head}  source={require('../../../images/lupanh.png')} />
    <Text>Clicando nos ícones abaixo você responde a questões relacionadas aos temas tratados. Assim você ajuda a melhorar a infraestrutura do nosso bairro.</Text>
    <ScrollView>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',}} >
      <View style={styles.container} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={navigateToLight}>
        <View style={styles.imageContainer} >
                <Image source={{ uri: 'https://imglupa.blob.core.windows.net/img/light.png' }} style={styles.image} />
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Iluminação</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={navigateToWater}>
        <View style={styles.imageContainer} >
                <Image source={{ uri: 'https://imglupa.blob.core.windows.net/img/water.png' }} style={styles.image} />
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Água</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={navigateToTrash}>
        <View style={styles.imageContainer} >
                <Image source={{ uri: 'https://imglupa.blob.core.windows.net/img/trash.png' }} style={styles.image} />
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Coleta de lixo</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container} > 
        <TouchableOpacity activeOpacity = { .3 } onPress={navigateToSewer}>
        <View style={styles.imageContainer} >
                <Image source={{ uri: 'https://imglupa.blob.core.windows.net/img/sewer.png' }} style={styles.image} />
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Esgoto</Text>
    
        </View>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
   
  </View>


  );
}