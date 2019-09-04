import firebase from 'react-native-firebase';

export const login = (email, password) => {
    
    return firebase.auth().signInWithEmailAndPassword(email, password);

}

export const logout = () => {
    
    return firebase.auth().signOut();

}
