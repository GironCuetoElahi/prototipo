import React from 'react';
import {Text, StyleSheet,View, TouchableHighlight} from 'react-native'

const Cita = ({item,eliminarTramite}) =>{

        const dialogoEliminar = id => {
            console.log('eliminando...',id)
    
            eliminarTramite(id)
        }

    return (
 <View style={styles.cita}>
        <View>
           <Text style={styles.label} > Area:  </Text>
           <Text style={styles.text}> {item.area} </Text>
        </View>

        <View>
           <Text style={styles.label}> Nombre:  </Text>
           <Text style={styles.text}> {item.nombre} </Text>
        </View>

        <View >
           <Text style={styles.label}> Tramite:  </Text>
           <Text style={styles.text}> {item.tramite} </Text>
        </View>

        <View >
        <TouchableHighlight onPress={() => dialogoEliminar(item.id)} style = {styles.btneliminar}>
        <Text style={styles.texteliminar}> Eliminar &times;  </Text>
        </TouchableHighlight>
        </View>

</View>
    )

}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth:1,
        paddingVertical:20,
        paddingHorizontal:10
    },

    label: {
    fontWeight: 'bold',
    fontSize:18,
    marginTop:20,
    color: '#fff'
    },

    text: {
        fontSize:18,
        color: '#fff'
    },

    btneliminar:{
        padding:10,
        backgroundColor: 'red',
        marginVertical: 10
    },

    texteliminar:{
        color: '#fff',
        fontWeight:'bold',
        textAlign: 'center'
    }
})
export default Cita