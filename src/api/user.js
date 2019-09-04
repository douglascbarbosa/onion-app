import firebase from 'react-native-firebase';

export const signUp = (email, password) => {
    
    return firebase.auth().createUserWithEmailAndPassword(email, password);

};

export const registerUser = (user) => {

    return firebase.database().ref(`users/${user.uid}`).set(user);
};
