import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
const dataTodo = [
  {
    idTask: '1',
    titletask: 'OK1',
    datetask: '2022',
  },
  {
    idTask: '2',
    titletask: 'OK1',
    datetask: '2022',
  },
];
const Task = () => {
  const [count, setCount] = useState(0);
  const onPress = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View>
      {/* Loop From here */}
      <View style={styles.item}>
        <View style={styles.items}>
          <TouchableOpacity
            style={styles.itemLeft}
            onPress={onPress}></TouchableOpacity>
          <Text style={styles.taskItem}>Hello</Text>
        </View>
      </View>
      {/* Line */}
      <View
        style={{
          borderWidth: 1,
          borderRadius: 1,
          borderColor: '#fff',
        }}></View>
      {/* End of loop */}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 20,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemLeft: {
    width: 31,
    height: 31,
    backgroundColor: '#8D91F4',
    opacity: 0.4,
    borderRadius: 31,
    marginRight: 10,
  },
  taskItem: {
    maxWidth: '80%',
  },
});
export default Task;
