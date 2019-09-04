import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import firebase from 'react-native-firebase';



class AuthLoadingScreen extends React.Component {

  async componentDidMount() {
    // this._bootstrapAsync();
    const loadInfo = await this._bootstrapAsync();
  } 

  _bootstrapAsync = async () => {

    return new Promise((resolve) =>
      setTimeout(
        () => {

          firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            resolve('result');
            if (user) {
              this.props.navigation.navigate('App');
            } else {
              this.props.navigation.navigate('Auth');
            }
          });
        },
        2000
      )
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Onion</Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6CCCFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 32,
  }
});

export default AuthLoadingScreen;