/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, Text, Image, View, TextInput, Button} from 'react-native';
import Secondcomponents from './Components/Secondcomponents';

const Cat = () => {
  return <Text>This First Component</Text>;
};
const Dog = () => {
  const name = 'Dog';
  return <Text>This Component use for JSX And Componenet name is {name}</Text>;
};
const getfullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};
const Animal = props => {
  return (
    <View>
      <Text>i'am a {props.name}</Text>
    </View>
  );
};
const Humanconditon = props => {
  const [isBeginner, setBeginner] = useState(true);
  return (
    <View>
      <Text>
        My Name is {props.name}, i was {props.do}. For now i'am
        {isBeginner ? ' Beginner' : ' Intermediate'} !
      </Text>
      <Button
        onPress={() => {
          setBeginner(false);
        }}
        disabled={!isBeginner}
        title={isBeginner ? 'Please Teach Me !!' : 'Tysm'}
      />
    </View>
  );
};

const App = () => {
  return (
    <ScrollView>
      {/* Hello World 
      <Text>Hello World</Text>
      */}
      <Text style={{fontSize: 25, fontWeight: 'bold', marginVertical: 5}}>
        Core Components And Native Components
      </Text>
      <View>
        <Text>Hello</Text>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{width: 200, height: 200}}></Image>
      </View>
      <TextInput
        style={{height: 40, borderColor: 'black', borderWidth: 1}}
        defaultValue="This Input Text"
      />
      {/* React Fundamental */}
      <Text style={{fontWeight: 'bold', marginTop: 5, fontSize: 20}}>
        ReactFundamentals
      </Text>
      {/* Component */}
      <Text style={{fontWeight: 'bold', marginTop: 5}}>Component</Text>
      <Cat />
      <Secondcomponents />
      {/* JSX */}
      <Text style={{fontWeight: 'bold', marginTop: 5}}>JSX</Text>
      <Text>ill using dog Componenet and result its below:</Text>
      <Dog />
      <Text>JSX with Curly braces. ill use component getfullName, Result:</Text>
      <Text>
        The Resul must Zaki Fadlan Learning :
        {getfullName('Zaki', 'Fadlan', 'Learning')}
      </Text>
      {/* Props */}
      <Text style={{marginTop: 5, fontWeight: 'bold'}}>Props</Text>
      <Text>ill try to use name Animals component, Result at below:</Text>
      <Animal name="Props" />
      <Animal name="Komodo" />
      <Animal name="Pig" />
      {/* State */}
      <Text style={{marginTop: 5, fontWeight: 'bold'}}>State</Text>
      <Text>I'ill try to use human condition componenet, Result at Below:</Text>
      <Humanconditon name="Zaki Fadlan" do="Learning React-Native" />
    </ScrollView>
  );
};
export default App;
