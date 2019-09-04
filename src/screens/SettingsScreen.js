import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { logout } from '../api/auth';

const SettingsScreen = () => {
    return (
        <View>
            <Text>Settings screen</Text>

            <Button onPress={() => {
                logout();
            }} title="Sign out" />

        </View>
    );
};


export default SettingsScreen;