import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

const BUTTON_WIDTH = Dimensions.get('window').width* 0.8;

const Button = (props) => {
  const {
    container
  } = styles;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={container}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    width: BUTTON_WIDTH,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#4a4a4a',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
}

export { Button };
