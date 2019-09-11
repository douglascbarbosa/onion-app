import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import { login } from '../api/auth';
import Loading from '../components/layout/Loading';
import { Context as UserContext } from '../context/UserContext';

const LoginScreen = ({ navigation }) => {

    const { addUserSession } = useContext(UserContext);

    [email, setEmail] = useState('');
    [password, setPassword] = useState('');
    [showLoading, setShowLoading] = useState(false);
    [validationText, setValidationText] = useState('')

    const loginUser = () => {

        setShowLoading(true);

        login(email, password)
            .then((user) => {
                console.log(user);
                setShowLoading(false);
                navigation.navigate('App');
            })
            .catch( error => {
                setShowLoading(false);
                setValidationText('Invalid user/password')
            })
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
                    validationText={validationText}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6CCCFC',
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
        flex: 4
    }
})

export default LoginScreen;