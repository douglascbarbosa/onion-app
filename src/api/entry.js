import firebase from 'react-native-firebase';

const ENTRY_PATH = 'entries';

export const newEntry = async (entry, uid) => {
    return firebase.database().ref(`/users/${uid}/${ENTRY_PATH}`).push({...entry});
}

export const getAllEntries = async (uid, id) => {

    if (id) {
        return firebase.database().ref(`/users/${uid}/${ENTRY_PATH}/${id}`).once('value');
    } else {
        return firebase.database().ref(`/users/${uid}/${ENTRY_PATH}`).once('value');
    }

}
