import React, { useState } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import { login } from '../api/auth';
import Loading from '../components/layout/Loading';

const LoginScreen = ({ navigation }) => {

    [email, setEmail] = useState('');
    [password, setPassword] = useState('');
    [showLoading, setShowLoading] = useState(false);

    const loginUser = () => {

        setShowLoading(true);
        
        login(email, password)
            .then((user) => {
                console.log(user);
                setShowLoading(false);
                navigation.navigate('Home');
            })
            .catch( error => {
                setShowLoading(false);
                console.log('Login erro code', error.code);
                console.log('Login erro message', error);                
            })
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <Loading show={showLoading} />
            <View style={styles.logoContainer}>
                <Text style={styles.logo} >Onion</Text>
            </View>
            <View style={styles.formContainer}>
                <LoginForm
                    email={email}
                    onChangeEmail={(emailText) => setEmail(emailText)}
                    password={password}
                    onChangePassword={(passwordText) => setPassword(passwordText)}
                    onSubmit={loginUser}
                    onSignUp={() => { navigation.navigate('SignUp') }}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E6396',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 6

    },
    logo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF'
    },
    formContainer: {
        flex: 4,
    }
})

export default LoginScreen;