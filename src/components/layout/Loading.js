import React from 'react';
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native';

const Loading = ({ show }) => {
    return (
       show ? <View style={styles.container} >
            <ActivityIndicator size="large" />
            <Text style={styles.textStyle}>Loading...</Text>
        </View> : null
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000
    },
    textStyle: {
        padding: 10,
        fontWeight: 'bold'
    }
})

export default Loading;