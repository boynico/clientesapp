import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native'

const Insurance: () => React$Node = ({route, navigation}) => {
  //UI
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={styles.botonarriba}>
              <Image
                style={styles.botonesarriba}
                source={{
                  uri: 'https://image.flaticon.com/icons/png/512/55/55239.png',
                }}
              />
              <Text style={{alignSelf: 'center'}}>FOUR WHEELS</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.botonarriba}>
              <Image
                style={styles.botonesarriba}
                source={{
                  uri:
                    'https://toppng.com/uploads/preview/motorcycle-icon-11562943268vracxoczhd.png',
                }}
              />
              <Text style={{alignSelf: 'center'}}>TWO WHEELS</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view2}>
          <TouchableOpacity>
            <View style={styles.botonabajo}>
              <Image
                style={styles.botonesabajo}
                source={{
                  uri: 'https://imgur.com/yMPQHWf.png',
                }}
              />
              <Text>PRODUCT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.botonabajo}>
              <Image
                style={styles.botonesabajo}
                source={{
                  uri: 'https://imgur.com/DqBuaN7.png',
                }}
              />
              <Text>MEMBERS</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.botonabajo}>
              <Image
                style={styles.botonesabajo}
                source={{
                  uri: 'https://imgur.com/gzAnrpa.png',
                }}
              />
              <Text>OFFERS</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.botonabajo}>
              <Image
                style={styles.botonesabajo}
                source={{
                  uri: 'https://imgur.com/rEMhmub.png',
                }}
              />
              <Text>CHAT</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view3}>
          <Button title='CALCULATE YOUR EMI' color='#fcba03' />
        </View>
      </View>
    </>
  )
}
//Al poner alignItems flex end en teoría debería irse a la parte baja de la pantalla según tengo entendido, pero se va al final de la linea y lo corrijo con Align Self
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
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
    width: 100,
    height: 100,
    margin: 15,
  },
  view1: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  view2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 3,
  },
  botonarriba: {
    flex: 1,
    padding: 20,
  },
  botonabajo: {
    alignItems: 'center',
  },
})
export default Insurance
