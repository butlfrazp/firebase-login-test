import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Input, Button } from './common';
import * as firebase from 'firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  };

  onUserCreate = ({email, password}) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => alert(error))
      .then(user => {
        this.setState({ email: '', password: ''})
      })
    })
    .then(user => {
      this.setState({ email: '', password: ''})
    });
  }

  render() {
    const {
      container
    } = styles
    return (
      <View style={container}>
        <Text style={{fontSize: 36, fontFamily: 'Avenir Next Condensed', color: 'white'}}>Login</Text>
        <Input
          placeholder="joesmith@gmail.com"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder="password123"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        <Button
          title="Create"
          onPress={this.onUserCreate.bind(this, this.state)}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  }
}

export default Login;
