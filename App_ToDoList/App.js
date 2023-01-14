/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Task from './components/Task';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/bg.jpg')} style={styles.image}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 35,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontSize: 32,
              fontWeight: 'bold',
              color: '#fff',
              textShadowColor: 'rgba(0, 0, 0, 0.50)',
              textShadowOffset: {width: 1, height: 1},
              textShadowRadius: 40,
            }}>
            Today Task
          </Text>
        </View>
        <ScrollView style={{paddingHorizontal: 20, maxHeight: '70%'}}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderColor: 'transparent',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderColor: 'transparent',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default App;
