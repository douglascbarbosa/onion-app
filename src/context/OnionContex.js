import { format } from 'date-fns'
import createDataContext from './createDataContext';
import { newEntry } from '../api/entry';


export const ADD_ENTRY = 'add_entry';
export const EDIT_ENTRY = 'edit_entry';
export const DELETE_ENTRY = 'delete_entry';

const OnionReducer = (state, action) => {
    switch (action.type) {
        case ADD_ENTRY:
            return [...state, action.payload]
        case DELETE_ENTRY: 
            return state.filter((entry) => entry.id !== action.payload);    
        default:
            return state;
    }
}




const addEntry = dispatch => {
    return async (payload, uid) => {

        try {
            const newEntryInfo = await newEntry(payload, uid);
            dispatch({type: ADD_ENTRY, payload: {id: newEntryInfo.key, ...payload}});

        }catch(error) {
            console.log('error', error);
        }
    }
}

const deleteEntry = dispatch => {
    return (id) => {
        dispatch({ type: DELETE_ENTRY, payload: id})
    }
}

const entriesDemo = [
    {
        id: 1,
        title: 'Energy',
        category: 'Fixed expenses',
        date: format(new Date(), 'yyyy/MM/dd'),
        status: 'overdue',
        expense: true,
        amount: 18050
    },
    {
        id: 2,
        title: 'Credit card',
        category: 'Variable expense',
        date: format(new Date(), 'yyyy/MM/dd'),
        installments: 5,
        currentInstallment: 2,
        status: 'payed',
        paymentDate: format(new Date(), 'yyyy/MM/dd'),
        expense: true,
        amount: 150000
    },
    {
        id: 3,
        title: 'Energia',
        category: 'Fixed expenses',
        date: format(new Date(), 'yyyy/MM/dd'),
        status: 'planned',
        expense: true,
        amount: 18000
    },
    {
        id: 4,
        title: 'Selic',
        category: 'Investment',
        date: format(new Date(), 'yyyy/MM/dd'),
        paymentDate: format(new Date(), 'yyyy/MM/dd'),
        status: 'payed',
        expense: true,
        amount: 20000
    },
    {
        id: 5,
        title: 'Wage',
        category: 'Income',
        date: format(new Date(), 'yyyy/MM/dd'),
        paymentDate: format(new Date(), 'yyyy/MM/dd'),
        status: 'payed',
        expense: false,
        amount: 200000
    }

];


export const { Context, Provider } = createDataContext(OnionReducer, {addEntry, deleteEntry}, entriesDemo);