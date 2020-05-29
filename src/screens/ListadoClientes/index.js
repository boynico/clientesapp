import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    FlatList
} from 'react-native';


const ListadoClientes: () => React$Node = ({ route, navigation }) => {

    //aquí declaro el param que leo
    const { arrayparam } = route.params;


    //borro un cliente
    const borrarCliente = async (stringid) => {
        try {
            await AsyncStorage.removeItem(stringid);
            console.log("Se ha borrado el item con id " + stringid)
        } catch (error) {
            console.log(error.message);
        }
    }

    //edito un cliente
    const editarCliente = (objeto) => {
        //voy a la pantalla Home y le envio el objeto cliente entero
        navigation.navigate('Edit', {
            objetoparam: objeto,
        });
    }


    //UI
    return (
        <>

            <View>
                <FlatList
                    style={{ marginTop: 40 }}
                    data={arrayparam}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <>
                            <View style={{ marginBottom: 50 }}>
                                <View style={{ marginStart: 5, alignSelf: "center", backgroundColor: "#575656", width: 350 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 17, padding: 5, color: "white" }}>Nombre Completo: {item.nombre} {item.apellido}</Text>
                                </View>
                                <View style={{ marginStart: 5, alignSelf: "center", backgroundColor: "#575656", width: 350 }}>
                                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 17, padding: 5 }}>Correo: {item.correo} </Text>
                                </View>
                                <View style={{ width: 350, alignSelf: "center", flexDirection: 'row', justifyContent: "center" }}>
                                    <Button
                                        color="#ff4f4f"
                                        title="Borrar Cliente"
                                        onPress={() => borrarCliente(item.id)}
                                    />
                                    <Button
                                        color="#8592c9"
                                        title="Editar Cliente"
                                        onPress={() => editarCliente(item)}
                                    />
                                </View>

                            </View>

                        </>
                    )
                    }
                />
            </View>



        </>
    );
};


export default ListadoClientes;
