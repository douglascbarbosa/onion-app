import createDataContext from './createDataContext';

export const ADD_USER_SESSION = 'add_user_session';
export const DELETE_USER_SESSION = 'remove_user_session';

INITIAL_USER = {};

const UserReducer = (state, action) => {
    switch (action.type) {
        case ADD_USER_SESSION:
            return action.payload
        case DELETE_USER_SESSION: 
            return {}    
        default:
            return state;
    }
}

const addUserSession = dispatch => {
    return (user) => {
        dispatch({ type: ADD_USER_SESSION, payload: {...user}})
    }
}

export const { Context, Provider } = createDataContext(UserReducer, {addUserSession}, INITIAL_USER);


