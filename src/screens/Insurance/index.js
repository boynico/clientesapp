import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
    FlatList
} from 'react-native';


const Insurance: () => React$Node = ({ route, navigation }) => {



    //UI
    return (
        <>
            <View>
                <View style={{
                    flexWrap: "wrap", justifyContent: "center", flexDirection: 'row', marginTop: 50
                }}>
                    <TouchableOpacity>
                        <View>
                            <Image
                                style={styles.botonesarriba}
                                source={{
                                    uri: 'https://image.flaticon.com/icons/png/512/55/55239.png',
                                }}
                            />
                            <Text style={{ alignSelf: "center" }}>
                                Four Wheels
                        </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View>
                            <Image
                                style={styles.botonesarriba}
                                source={{
                                    uri: 'https://toppng.com/uploads/preview/motorcycle-icon-11562943268vracxoczhd.png',
                                }}
                            />
                            <Text style={{ alignSelf: "center" }}>
                                Two Wheels
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 40, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>

                    <TouchableOpacity>
                        <View>
                            <Image
                                style={styles.botonesabajo}
                                source={{
                                    uri: 'https://i.imgur.com/rLE0oiI.png',
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Image
                                style={styles.botonesabajo}
                                source={{
                                    uri: 'https://i.imgur.com/VCzQDRD.png',
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Image
                                style={styles.botonesabajo}
                                source={{
                                    uri: 'https://i.imgur.com/q0Ki9Pf.png',
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Image
                                style={styles.botonesabajo}
                                source={{
                                    uri: 'https://i.imgur.com/mrCrZvb.png',
                                }}
                            />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ justifyContent: "center", alignItems: "flex-end", alignSelf: "center" }}>
                    <Button
                        title="CALCULATE YOUR EMI"
                        color="#fcba03"
                    />
                </View>




            </View>
        </>
    );
};
//Al poner alignItems flex end en teoría debería irse a la parte baja de la pantalla según tengo entendido, pero se va al final de la linea y lo corrijo con Align Self
const styles = StyleSheet.create({
    botonesabajo: {
        width: 150,
        height: 120,
        margin: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
    },
    botonesarriba: {
        width: 66,
        height: 58,
        margin: 15,
    }
});
export default Insurance;
