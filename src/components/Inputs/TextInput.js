import React from 'react';
import { View, TextInput as Input, StyleSheet } from 'react-native';
import Label from '../Inputs/Label';

const TextInput = (props) => {

    return (
        <View style={styles.container}>
            <Label text={props.label} />
            <Input
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
        fontWeight: '700'
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        color: 'rgba(0,0,0, 0.4)',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#8492A6'
    },
});

export default TextInput;