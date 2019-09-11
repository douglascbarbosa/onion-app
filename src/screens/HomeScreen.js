import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Context as UserContext } from '../context/UserContext';

const HomeScreen = ({navigation}) => {
  const { state } = useContext(UserContext);
  return (
    <View>

      <Text> {state.username} </Text>
      
    </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
