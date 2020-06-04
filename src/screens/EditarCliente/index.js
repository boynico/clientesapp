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
import { ButtonAdd } from '../../components/ButtonAddClient';


const EditarCliente: () => React$Node = ({ route, navigation }) => {

    const [clienteNombre, setclienteNombre] = useState('');
    const [clienteApellido, setclienteApellido] = useState('');
    const [clienteCorreo, setclienteCorreo] = useState('');

    //aquí declaro el param que leo
    const { objetoparam } = route.params;

    //pongo los valores del objeto que leo en los States para que se ponga como value en los inputs
    useEffect(() => { rellenarInputs() }, []);

    const rellenarInputs = () => {
        setclienteNombre(objetoparam.nombre);
        setclienteApellido(objetoparam.apellido);
        setclienteCorreo(objetoparam.correo);
    }


    //objeto final
    let clienteObjeto = ({ nombre: '', apellido: '', correo: '', id: '' });

    //metodo de editar
    const editar = async (idcliente) => {
        //declaro los datos en un objeto y lo convierto a JSON
        clienteObjeto = ({ nombre: clienteNombre, apellido: clienteApellido, correo: clienteCorreo, id: idcliente });
        const clienteJSON = JSON.stringify(clienteObjeto);
        try {
            await AsyncStorage.setItem(clienteObjeto.id, clienteJSON);
            console.log(`Editado el cliente con id ${clienteObjeto.id} y json: ${clienteJSON}`);
        } catch (error) {
            console.log(error.message);
        }
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
            <ButtonAdd
                onPress={() => editar(objetoparam.id)}>
                Editar Cliente
                </ButtonAdd>
            
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
        fontWeight: "bold",
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

export default EditarCliente;
