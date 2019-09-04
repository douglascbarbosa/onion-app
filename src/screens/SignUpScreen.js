import React, { useState } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import FormSignUp from '../components/forms/FormSignUp';
import Loading from '../components/layout/Loading';
import { signUp, registerUser } from '../api/user';

const SignUpScreen = () => {

    [name, setName] = useState('');
    [email, setEmail] = useState('');
    [password, setPassword] = useState('');
    [showLoading, setShowLoading] = useState(false);


    const signUpUser = () => {

        setShowLoading(true);

        signUp(email, password)
            .then(({user}) => {
              setShowLoading(false);
              registerUser({name, email, uid : user.uid})  
            })
            .catch(error => {
                setShowLoading(false);
                console.log(error);
            })

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Loading show={showLoading} />
            <View style={styles.logoContainer}>
                <Text style={styles.logo} >Onion</Text>
            </View>
            <View style={styles.formContainer}>
                <FormSignUp
                    name={name}
                    onChangeName={setName}
                    email={email}
                    onChangeEmail={setEmail}
                    password={password}
                    onChangePassword={setPassword}
                    onSubmit={signUpUser}
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

export default SignUpScreen;