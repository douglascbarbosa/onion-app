import React from 'react'
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const LoginForm = ({ onSubmit, onSignUp, email, onChangeEmail, password, onChangePassword, validationText }) => {

    return (
        <View style={styles.container}>
            {validationText ? <Text style={styles.validationTextStyle}>{validationText}</Text> : null}
            <TextInput
                placeholder="E-mail"
                placeholderTextColor="#000"
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
                placeholderTextColor="#000"
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
        height: 50,
        backgroundColor: '#fff', //'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 10,
        borderRadius: 5
    },
    buttonSignUpStyle: {
        padding: 15
    },
    buttonContainer: {
        backgroundColor: '#F6922B',
        padding: 15,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16
    },
    validationTextStyle: {
        textAlign: 'center',
        color: '#C13C54',
        fontWeight: '700',
        marginBottom: 5,
    }

});

export default LoginForm;