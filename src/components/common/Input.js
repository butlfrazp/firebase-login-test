import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions
} from 'react-native';

const INPUT_WIDTH = Dimensions.get('window').width * 0.8;

const Input = (props) => {
  const {
    input
  } = styles
  return (
    <View>
      <TextInput
        style={input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor='#4a4a4a'
        secureTextEntry={props.secureTextEntry}
        autoCapitalize='none'
      />
    </View>
  )
}

const styles = {
  input: {
    height: 40,
    width: INPUT_WIDTH,
    borderColor: '#4a4a4a',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'white'
  }
}

export { Input };
