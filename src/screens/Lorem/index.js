import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    FlatList,
    Image,
    ScrollView
} from 'react-native';


const Lorem: () => React$Node = ({ route, navigation }) => {




    //UI
    return (
        <>

            <ScrollView>
                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", marginTop: 10 }}>
                    <View style={{ marginEnd: 25 }}>
                        <Image
                            style={{
                                width: 140,
                                height: 140,
                            }}
                            source={{
                                uri: 'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
                            }}
                        />
                    </View>
                    <View style={{ width: 175 }}>
                        <View>
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
                                Lorem ipsum dolor sit amet consectetur
                        </Text>
                            <Text>
                                by Fran Smith
                        </Text>
                        </View>
                        <View>
                            <View style={{ width: 90, marginTop: 25 }}>
                                <Button
                                    title="LABEL 1"
                                    color="#111111"
                                />
                            </View>

                            <Text>
                                5 comentarios
                            </Text>
                        </View>

                    </View>
                </View>


                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", marginTop: 10 }}>
                    <View style={{ marginEnd: 25 }}>
                        <Image
                            style={{
                                width: 140,
                                height: 140,
                            }}
                            source={{
                                uri: 'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
                            }}
                        />
                    </View>
                    <View style={{ width: 175 }}>
                        <View>
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
                                Vivamus fermentum elementum nunc
                        </Text>
                            <Text>
                                by John Atler
                        </Text>
                        </View>
                        <View>
                            <View style={{ width: 200, marginTop: 25 }}>
                                <View style={{ width: 90}}>
                                    <Button
                                        title="LABEL 2"
                                        color="#111111"
                                    />
                                </View>

                            </View>

                            <Text>
                                15 comentarios
                            </Text>
                        </View>

                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", marginTop: 10 }}>
                    <View style={{ marginEnd: 25 }}>
                        <Image
                            style={{
                                width: 140,
                                height: 140,
                            }}
                            source={{
                                uri: 'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
                            }}
                        />
                    </View>
                    <View style={{ width: 175 }}>
                        <View>
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
                                adipiscing elit donec aenean facilisis,
                        </Text>
                            <Text>
                                by John Atler
                        </Text>
                        </View>
                        <View>
                            <View style={{ width: 200, marginTop: 25, flexDirection: "row" }}>
                                <View style={{ width: 90, marginRight: 5}}>
                                    <Button
                                        title="LABEL 3"
                                        color="#111111"
                                    />
                                </View>
                                <View style={{ width: 90 }}>
                                    <Button
                                        title="LABEL 4"
                                        color="#111111"
                                    />
                                </View>


                            </View>

                            <Text>
                                15 comentarios
                            </Text>
                        </View>

                    </View>
                </View>



                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", marginTop: 10 }}>
                    <View style={{ marginEnd: 25 }}>
                        <Image
                            style={{
                                width: 140,
                                height: 140,
                            }}
                            source={{
                                uri: 'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
                            }}
                        />
                    </View>
                    <View style={{ width: 175 }}>
                        <View>
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
                                adipiscing elit donec aenean facilisis,
                        </Text>
                            <Text>
                                by John Atler
                        </Text>
                        </View>
                        <View>
                            <View style={{ width: 90, marginTop: 25 }}>
                                <Button
                                    title="LABEL 2"
                                    color="#111111"
                                />
                            </View>

                            <Text>
                                15 comentarios
                            </Text>
                        </View>

                    </View>
                </View>



                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", marginTop: 10 }}>
                    <View style={{ marginEnd: 25 }}>
                        <Image
                            style={{
                                width: 140,
                                height: 140,
                            }}
                            source={{
                                uri: 'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
                            }}
                        />
                    </View>
                    <View style={{ width: 175 }}>
                        <View>
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
                                adipiscing elit donec aenean facilisis,
                        </Text>
                            <Text>
                                by John Atler
                        </Text>
                        </View>
                        <View>
                            <View style={{ width: 90, marginTop: 25 }}>
                                <Button
                                    title="LABEL 2"
                                    color="#111111"
                                />
                            </View>

                            <Text>
                                15 comentarios
                            </Text>
                        </View>

                    </View>
                </View>




                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", marginTop: 10 }}>
                    <View style={{ marginEnd: 25 }}>
                        <Image
                            style={{
                                width: 140,
                                height: 140,
                            }}
                            source={{
                                uri: 'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
                            }}
                        />
                    </View>
                    <View style={{ width: 175 }}>
                        <View>
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
                                adipiscing elit donec aenean facilisis,
                        </Text>
                            <Text>
                                by John Atler
                        </Text>
                        </View>
                        <View>
                            <View style={{ width: 90, marginTop: 25 }}>
                                <Button
                                    title="LABEL 2"
                                    color="#111111"
                                />
                            </View>

                            <Text>
                                15 comentarios
                            </Text>
                        </View>

                    </View>
                </View>



                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", marginTop: 10 }}>
                    <View style={{ marginEnd: 25 }}>
                        <Image
                            style={{
                                width: 140,
                                height: 140,
                            }}
                            source={{
                                uri: 'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
                            }}
                        />
                    </View>
                    <View style={{ width: 175 }}>
                        <View>
                            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
                                adipiscing elit donec aenean facilisis,
                        </Text>
                            <Text>
                                by John Atler
                        </Text>
                        </View>
                        <View>
                            <View style={{ width: 90, marginTop: 25 }}>
                                <Button
                                    title="LABEL 2"
                                    color="#111111"
                                />
                            </View>

                            <Text>
                                15 comentarios
                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>



        </>
    );
};


export default Lorem;
