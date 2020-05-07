
const image = require('./background.jpg')
import React from 'react';
import {Text, StyleSheet, View,ImageBackground} from 'react-native';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.titulo}>Gobierno de San Luis Potosi</Text>
      </ImageBackground> 
    </View>
  );
};
const styles = StyleSheet.create({
contenedor:{
flex:1,
flexDirection:"column"
},

image:{
  flex:1,
  resizeMode:"cover",
  
},

titulo:{
  marginTop:40,
  fontSize: 26,
  color: '#FFFFFF',
  fontWeight: 'bold',
  textAlign:'center'
}
});

export default App;
