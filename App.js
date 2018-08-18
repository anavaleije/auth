import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBLOIfTlynDDV7nvOXec1WXe5r8Quh9_lQ',
      authDomain: 'auth-f107f.firebaseapp.com',
      databaseURL: 'https://auth-f107f.firebaseio.com',
      projectId: 'auth-f107f',
      storageBucket: 'auth-f107f.appspot.com',
      messagingSenderId: '801023343072',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm /> 
      </View>
    );
  }
}

export default App;