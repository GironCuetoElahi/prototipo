
const image = require('./background.jpg')
import {Text, StyleSheet, View,ImageBackground, FlatList, TouchableHighlight, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, { useState } from 'react';
import Cita from './componentes/cita'
import Formulario from './componentes/Formulario'

const App = () => {

  const[mostrarform, guardarMostrarForm] = useState(false);

  //definir el state de citas
  const [citas, setCitas]=useState([])

  //eliminar tramites del state
  const eliminarTramite = id => {
    setCitas( (citasActuales) =>{
      return citasActuales.filter( cita => cita.id !== id)
    })
  }

    const mostrarFormulario = () =>{
      guardarMostrarForm(!mostrarform);
    }

    const cerrarTeclado = () => {
      Keyboard.dismiss();
    }

  return (
    <TouchableWithoutFeedback onPress={ ()=>cerrarTeclado() }>
    <View style={styles.contenedor}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.titulo}>Administrador de Citas</Text>

        <View >
                <TouchableHighlight onPress={() => mostrarFormulario()} style = {styles.btnMostrarform}>
                <Text style={styles.textMostrarform}> {mostrarform ? 'Cancelar Crear Cita': 'Crear Cita'}</Text>
                </TouchableHighlight>
            </View>
        
        <View style={styles.contenido}>

          {mostrarform ? (
             <>   
             <Text style={styles.titulo}>{'Crear Nueva cita'}</Text>
             <Formulario 
             citas={citas} 
             setCitas={setCitas} 
             guardarMostrarForm={guardarMostrarForm} />

             </>  
          ):(
            <>
            <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas': 'No hay citas, agrega una'}</Text>
            <FlatList
            style={styles.listado}
            data={citas}
            renderItem={ ({item})=> <Cita item={item} eliminarTramite={eliminarTramite} />}
            keyExtractor={cita=>cita.id}
        />
            </>
          )}

        </View>

      </ImageBackground> 
    </View>
    </TouchableWithoutFeedback>
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
  marginTop: Platform.OS === 'ios' ? 40 : 20 ,
  fontSize: 26,
  color: '#FFFFFF',
  fontWeight: 'bold',
  textAlign:'center'
},
contenido:{
  flex:1,
  marginHorizontal: '2.5%'
},
listado:{
  flex:1
},
btnMostrarform:{
  padding:10,
  backgroundColor: 'green',
  marginVertical: 10
},

textMostrarform:{
  color: '#fff',
  fontWeight:'bold',
  textAlign: 'center'
}
});

export default App;
