import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EntryForm from '../components/forms/EntryForm';
import { Context as OnionContext } from '../context/OnionContex'; 
import { Context as UserContext } from '../context/UserContext'; 

const CreateEntryScreen = () => {

    const { addEntry } = useContext(OnionContext);
    const user = useContext( UserContext ).state;

    return (
        <View style={styles.container}>
            <EntryForm  onSubmit={(entry) => { addEntry(entry, user.uid) }} />
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