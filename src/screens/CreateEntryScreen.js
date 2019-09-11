import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EntryForm from '../components/forms/EntryForm';

const CreateEntryScreen = () => {
    
    return (
        <View style={styles.container}>
            <EntryForm />
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F7F8',
        padding: 20
    }
})


export default CreateEntryScreen;