import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Image,
  ScrollView,
} from 'react-native'
import {LoremRow} from '../../components/LoremRow'

const Lorem: () => React$Node = ({route, navigation}) => {
  //UI
  return (
    <>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View style={{marginEnd: 25}}>
            <Image
              style={{
                width: 140,
                height: 140,
              }}
              source={{
                uri:
                  'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
              }}
            />
          </View>
          <View style={{width: 175}}>
            <LoremRow/>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View style={{marginEnd: 25}}>
            <Image
              style={{
                width: 140,
                height: 140,
              }}
              source={{
                uri:
                  'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
              }}
            />
          </View>
          <View style={{width: 175}}>
            <LoremRow/>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View style={{marginEnd: 25}}>
            <Image
              style={{
                width: 140,
                height: 140,
              }}
              source={{
                uri:
                  'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
              }}
            />
          </View>
          <View style={{width: 175}}>
            <LoremRow/>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View style={{marginEnd: 25}}>
            <Image
              style={{
                width: 140,
                height: 140,
              }}
              source={{
                uri:
                  'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
              }}
            />
          </View>
          <View style={{width: 175}}>
            <LoremRow/>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View style={{marginEnd: 25}}>
            <Image
              style={{
                width: 140,
                height: 140,
              }}
              source={{
                uri:
                  'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
              }}
            />
          </View>
          <View style={{width: 175}}>
            <LoremRow/>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View style={{marginEnd: 25}}>
            <Image
              style={{
                width: 140,
                height: 140,
              }}
              source={{
                uri:
                  'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
              }}
            />
          </View>
          <View style={{width: 175}}>
            <LoremRow/>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View style={{marginEnd: 25}}>
            <Image
              style={{
                width: 140,
                height: 140,
              }}
              source={{
                uri:
                  'https://pxcom.aero/wp-content/uploads/default-user-icon-profile.png',
              }}
            />
          </View>
          <View style={{width: 175}}>
            <LoremRow/>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default Lorem
