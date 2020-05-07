import {Text, StyleSheet, View, TextInput, Button,TouchableHighlight, Alert, ScrollView} from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({citas, setCitas, guardarMostrarForm}) => {
        const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
        const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

        const [area,guardarArea]= useState('');
        const [nombre,guardarNombre]= useState('');
        const [telefono,guardarTelefono]= useState('');
        const [fecha,guardarFecha]= useState('');
        const [hora,guardarHora]= useState('');
        const [tramite,guardarTramite]= useState('');
      
        const showDatePicker = () => {
          setDatePickerVisibility(true);
        };
      
        const hideDatePicker = () => {
          setDatePickerVisibility(false);
        };
      
        const confirmarFecha = (date) => {
          const opciones = {year: 'numeric', month:'long',day:"2-digit"};
          guardarFecha(date.toLocaleDateString('es-ES',opciones));  
          hideDatePicker();
        };

        //muestro u oculta el time Picker

        const showTimePicker = () => {
            setTimePickerVisibility(true);
          };
        
          const hideTimePicker = () => {
            setTimePickerVisibility(false);
          };

          const confirmarTime = (hora) => {
            const opciones = {hour:'numeric', minute:'2-digit'};
            guardarHora(hora.toLocaleString('es-ES',opciones));
            hideTimePicker();
          };

          //Crear Nueva cita 

          const crearNuevaCita = () =>{
              //validar
              if(area.trim()=='' ||
              nombre.trim()==''||
              telefono.trim()==''||
              fecha.trim()==''||
              hora.trim()==''||
              tramite.trim()==''){
                  //falla la validacion
                  mostrarAlerta();
                  return;
              }

              //Crear una nueva cita
              const cita= {area,nombre,telefono,fecha,hora,tramite};

              cita.id = shortid.generate();

              //agregar al state
              const citasNuevo = [...citas,cita];
              setCitas(citasNuevo);

              //ocultar el formulario
              guardarMostrarForm(false);

              //resetear el formulario

          }

          //muestra alertas si falla la validacion

          const mostrarAlerta = () =>{
              Alert.alert(
                  'Error', //Titulo
                  'Todos los campos son obligatorios', //Mensaje de alerta
                  [{
                          text:'OK' //Arreglo de botones
                  }]
              )
          }

    return (
        <> 
        <ScrollView style={styles.formulario}>
            <View>
                 <Text style={styles.label}> Area: </Text>
                 <TextInput 
                 style={styles.input}
                 onChangeText = {texto=>guardarArea(texto)}

                     /> 
            </View>

            <View>
                 <Text style={styles.label}> Nombre: </Text>
                 <TextInput 
                 style={styles.input}
                 onChangeText = {texto=>guardarNombre(texto)}

                     /> 
            </View>

            <View>
                 <Text style={styles.label}> Teléfono Contacto: </Text>
                 <TextInput 
                 style={styles.input}
                 onChangeText = {texto=>guardarTelefono(texto)}
                 keyboardType='phone-pad'

                     /> 
            </View>

            <View>
                <Text style={styles.label}> Fecha: </Text>
                    <Button title="Seleccionar fecha" onPress={showDatePicker} />
                      <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS='Elige fecha'
                    />
                     <Text> {fecha} </Text>
             </View>

             
            <View>
                <Text style={styles.label}> Hora: </Text>
                    <Button title="Seleccionar hora" onPress={showTimePicker} />
                      <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarTime}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS='Elige hora'
                    />
                    <Text> {hora} </Text>
             </View>

            <View>
                 <Text style={styles.label}> Tramite: </Text>
                 <TextInput 
                 style={styles.input}
                 onChangeText = {texto=>guardarTramite(texto)}

                     /> 
            </View>

            
            <View >
                <TouchableHighlight onPress={() => crearNuevaCita()} style = {styles.btnSubmit}>
                <Text style={styles.textSubmit}> Crear Nueva Cita</Text>
                </TouchableHighlight>
            </View>

        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    formulario:{
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        paddingHorizontal:20,
        paddingVertical:10
    },

    label:{
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        marginTop: 20
    },

    input:{
        marginTop:10,
        height:50,
        backgroundColor:'#fff',
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle:'solid'
    },
    btnSubmit:{
        padding:10,
        backgroundColor: 'green',
        marginVertical: 10
    },

    textSubmit:{
        color: '#fff',
        fontWeight:'bold',
        textAlign: 'center'
    }
})
export default Formulario