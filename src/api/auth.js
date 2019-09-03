import firebase from 'react-native-firebase';

// export const login = async (email, password) => {

//     try {

//         const user = await firebase.auth().signInWithEmailAndPassword(email, password);

//         console.log(user);

//     } catch (error) {
//         console.log(error);
//     }

// }

export const login = (email, password) => {
    
    return firebase.auth().signInWithEmailAndPassword(email, password);

}
