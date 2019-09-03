import React from 'react'
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const LoginForm = ({ onSubmit, onSignUp, email, onChangeEmail, password, onChangePassword }) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="E-mail"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                returnKeyType="next"
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                style={styles.input}
                value={email}
                onChangeText={onChangeEmail}

            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                value={password}
                onChangeText={onChangePassword}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit} >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSignUpStyle} onPress={onSignUp}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        borderRadius: 5
    },
    buttonSignUpStyle: {
        padding: 15
    },
    buttonContainer: {
        backgroundColor: '#0ECCA0',
        padding: 15,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }

});

export default LoginForm;