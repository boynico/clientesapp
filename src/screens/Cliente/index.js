/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const ClientePantalla: () => React$Node = ({ navigation }) => {

    //cada una de las partes del objeto que guardo en State
    const [clienteNombre, setclienteNombre] = useState('');
    const [clienteApellido, setclienteApellido] = useState('');
    const [clienteCorreo, setclienteCorreo] = useState('');
    const [contador, setContador] = useState(1);

    let listaClientes = [];

    //lo primero que hago es ver si está guardado en el AsyncStorage el valor del contador
    useEffect(() => { comprobarIds() }, []);

    const comprobarIds = async () => {
        try {
            const idleido = await AsyncStorage.getItem('ultimoid');
            if (idleido != null) {
                setContador(parseInt(idleido) + 1);
                console.log(`El ultimo cliente tiene id ${idleido}`);
            } else {
                console.log("No se han guardado datos aún.");
                setContador(1);
            }
        } catch (error) {
            console.log(error.message);
        }

    }

    const cargarClientes = async () => {
        try {
            //convierto el contador final en string para buscar en Async Storage - 1 porque el valor actual no tiene asignado cliente
            let ultimoid_int = parseInt(contador - 1);

            //limpio la lista para evitar que hayan errores
            listaClientes = [];

            //recorro en bucle todos los valores que se han guardado.
            for (let i = 1; i <= ultimoid_int; i++) {
                try {
                    //convierto i en String para buscarlo con esa key, ya que las key son de tipo String
                    const stringid = i.toString();
                    //leo el objeto que toque del bucle
                    const stringleido = await AsyncStorage.getItem(stringid);

                    //compruebo que no sea null, porque si lo borran no quiero ejecutar el código que sigue
                    if (stringleido != null) {
                        console.log(`Se ha leido el siguiente item : ${stringleido}.`);

                        //convierto el String leido en un objeto para trabajar con él
                        let objetotemporal = JSON.parse(stringleido);

                        //meto los datos en el array
                        listaClientes.push(objetotemporal);

                    } else {
                        console.log(`El cliente con id ${i} ha sido borrado.`)
                    }

                } catch (error) {
                    console.log(error.message);
                }
            }

        } catch (error) {
            console.log(error.message);
        }

        //tras leer los datos, abro la pantalla de la lista y le envio el array, uno por uno

        navigation.navigate('Details', {
            arrayparam: listaClientes,
        });



    }

    const abrirInsurance = () => {
        navigation.navigate('Insurance');
    }

    const abrirLorem = () => {
        navigation.navigate("Lorem");
    }



    //objeto final
    let clienteObjeto = ({ nombre: '', apellido: '', correo: '', id: '' });

    //insertar cliente
    const insertarCliente = async () => {
        /*meto los datos de los inputs en el objeto cliente
          el valor id no es int, es String porque saltan avisos de que no se debe poner como id un int en AsyncStorage, entonces lo paso a string y ya*/
        clienteObjeto = ({ nombre: clienteNombre, apellido: clienteApellido, correo: clienteCorreo, id: contador.toString() });
        //convierto el objeto en JSON
        const clienteJSON = JSON.stringify(clienteObjeto);
        try {
            //inserto el JSON en Async storage, la clave es el STRING de contador, que tiene el mismo valor que el id del objeto
            await AsyncStorage.setItem(clienteObjeto.id, clienteJSON);
            console.log(`Meto item con id ${clienteObjeto.id} y json: ${clienteJSON}`);

            //reset de los textinput para que al pulsar el botón se borre el texto
            setclienteNombre('');
            setclienteApellido('');
            setclienteCorreo();

            //guardo el valor final del contador en el AsyncStorage
            /*
            Si no lo guardo como String me salta este error:
            The value for key "ultimoid" is not a string. This can lead to unexpected behavior/errors. Consider stringifying it.
            */
            await AsyncStorage.setItem('ultimoid', contador.toString());

        } catch (err) {
            console.log(err)
        }
        //aumento el valor del contador
        setContador(contador + 1);
    }

    //UI
    return (
        <>
            <View>
                <Text style={styles.titulo}>Insertar Cliente</Text>
            </View>

            <View style={styles.estiloForm}>
                <View>
                    <Text style={styles.inputTitulo}> Nombre </Text>
                    <TextInput
                        placeholder="Introduzca su nombre"
                        onChangeText={(val) => setclienteNombre(val)}
                        value={clienteNombre}
                    />
                </View>
                <View>
                    <Text style={styles.inputTitulo}> Apellidos </Text>
                    <TextInput
                        placeholder="Introduzca sus apellidos"
                        onChangeText={(val) => setclienteApellido(val)}
                        value={clienteApellido}
                    />
                </View>
                <View>
                    <Text style={styles.inputTitulo}> Correo </Text>
                    <TextInput
                        placeholder="Introduzca su correo"
                        onChangeText={(val) => setclienteCorreo(val)}
                        value={clienteCorreo}
                    />
                </View>
            </View>
            <View style={styles.estiloBoton}>
                <Button
                    onPress={insertarCliente}
                    title="Añadir cliente"
                />
            </View>
            <View style={styles.btnDetails}>
                <Button
                    title="Ir a la pantalla de Clientes"
                    onPress={() => {
                        cargarClientes();
                    }}
                />
            </View>
            <View>
                <Button
                    title="Ir a insurance"
                    onPress={() => {
                        abrirInsurance();
                    }}
                />
                <Button
                    title="Ir a la página de Lorem"
                    onPress={() => {
                        abrirLorem();
                    }}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 35,
        marginTop: 25
    },
    estiloForm: {
        padding: 25,
    },
    inputTitulo: {
        textAlign: "center",
        fontSize: 15,
    },
    inputBox: {
        fontSize: 15,
    },
    estiloBoton: {
        width: 200,
        alignSelf: "center"
    }, btnDetails: {
        width: 300,
        alignSelf: "center",
        marginTop: 250,
    }
});

export default ClientePantalla;
