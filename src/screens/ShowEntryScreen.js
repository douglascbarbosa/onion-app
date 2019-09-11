import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context } from '../context/OnionContex';

const ShowEntryScreen = ({ navigation }) => {
    const { state } = useContext( Context );
    const id = navigation.getParam('id');

    const entry = state.find((entry) => entry.id === id);


    return <View>
        <Text>{entry.title}</Text>
    </View>
}

export default ShowEntryScreen;