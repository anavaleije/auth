import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBLOIfTlynDDV7nvOXec1WXe5r8Quh9_lQ',
      authDomain: 'auth-f107f.firebaseapp.com',
      databaseURL: 'https://auth-f107f.firebaseio.com',
      projectId: 'auth-f107f',
      storageBucket: 'auth-f107f.appspot.com',
      messagingSenderId: '801023343072',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large"/>
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    flex: 1
  }
}

export default App;