import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const RegistrationScreen = () => {
    return (
        <View>
            <Text>Registration screen</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
            />
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default RegistrationScreen;