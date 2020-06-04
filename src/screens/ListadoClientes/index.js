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
import { RowClient } from '../../components/RowClient';


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
                            <RowClient>
                                {item.nombre} {item.apellido} {item.correo}
                            </RowClient>

                            <View style={styles.rowButtons}>
                                <Button
                                    color="#a587e0"
                                    title="Borrar Cliente"
                                    onPress={() => borrarCliente(item.id)}
                                />
                                <Button
                                    color="#ff8c80"
                                    title="Editar Cliente"
                                    onPress={() => editarCliente(item)}
                                />
                            </View>
                        </>
                    )
                    }
                />
            </View>



        </>
    );
};

const styles = StyleSheet.create({
    rowButtons: {
        width: 350, 
        alignSelf: "center", 
        flexDirection: 'row', 
        justifyContent: "center",
    },

});

export default ListadoClientes;
