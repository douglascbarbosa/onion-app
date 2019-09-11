import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import firebase from 'react-native-firebase';
import { Context as UserContext } from '../context/UserContext';
import { loadUserInfo } from '../api/user';

const AuthLoadingScreen = ({ navigation }) => {

  const { addUserSession } = useContext(UserContext);

  useEffect(() => {

    setTimeout(
      () => {
        firebase.auth().onAuthStateChanged(async (user) => {
          
          if (user) {
            const userInfo = await loadUserInfo(user._user.uid);
            addUserSession({ ...userInfo._value });
            navigation.navigate('App');
          } else {
            navigation.navigate('Auth');
          }
        });
      },
      2000
    )


  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Onion</Text>
    </View>
  )

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