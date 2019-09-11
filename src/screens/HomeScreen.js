import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  console.log(navigation);

  return (
    <View>
      <Text>August 2019</Text>
      <Text>Balance: R$ 1.000,00</Text>
      <Text>accumulated: R$ 1.000,00</Text>

      <Button onPress={() => {
        navigation.navigate('Registration')
      }} title="New Entry" />

    </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
