import React from 'react';
import { View, TextInput as Input, Text, StyleSheet } from 'react-native';

const LabelInput = ({ text }) => {
    return <Text style={styles.label}>{text}</Text>
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: '#616161',
        marginBottom: 5,
        fontWeight: '700'
    }
});

export default LabelInput;