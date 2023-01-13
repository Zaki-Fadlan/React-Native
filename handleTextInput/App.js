/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  SectionList,
} from 'react-native';

const Myname = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Type here your name"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.result}>
        {text
          .split(' ')
          .map(word => word && 'Noted')
          .join(' ')}
      </Text>
    </View>
  );
};
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
const UseListViews = () => {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Zaki'},
          {key: 'Fadlan'},
          {key: 'Jackson'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};
const SectionListBasic = () => {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
      <SectionList
        sections={[
          {title: 'D', data: ['David', 'Donald', 'Dicky']},
          {title: 'Z', data: ['Zaki', 'Zacky', 'Zeke']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => `basicListEntry-${item.title}`}
      />
    </View>
  );
};
const App = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Handling Text Input</Text>
        <Text style={styles.paragraph}>
          i'll try to create new component with name Myname, resul at below:
        </Text>
        <Myname />
        <Text style={styles.title}>Using a ScrollView</Text>
        <Text style={styles.paragraph}>
          For using ScrollView i will spaming image
        </Text>
        <Image source={logo} style={{marginVertical: 5}} />
        <Image source={logo} style={{marginVertical: 5}} />
        <Image source={logo} style={{marginVertical: 5}} />
        <Image source={logo} style={{marginVertical: 5}} />
        <Image source={logo} style={{marginVertical: 5}} />
        <Image source={logo} style={{marginVertical: 5}} />
        <Image source={logo} style={{marginVertical: 5}} />
        <Image source={logo} style={{marginVertical: 5}} />
        <Image source={logo} style={{marginVertical: 5}} />
        <Image source={logo} style={{marginVertical: 5}} />
        <Text style={styles.title}>Using List View</Text>
        <Text style={styles.paragraph}>
          For generating Data i need FlatList or SectionList
        </Text>
        <Text style={{fontWeight: 'bold', paddingHorizontal: 2}}>
          Using List View
        </Text>
        <UseListViews />
        <Text style={{fontWeight: 'bold', paddingHorizontal: 2}}>
          Using sectionlist
        </Text>
        <SectionListBasic />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {fontWeight: 'bold', fontSize: 20, margin: 10},
  input: {height: 40, borderRadius: 40, borderColor: 'blue'},
  result: {fontSize: 20, fontWeight: 'bold', padding: 5},
  paragraph: {marginHorizontal: 10},
  item: {padding: 10, fontSize: 18, height: 44},
  sectionHeader: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgna(247,247,247,1.0)',
  },
});

export default App;
