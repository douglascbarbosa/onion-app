import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TextInput from '../Inputs/TextInput';
import Picker from '../Inputs/Picker';


const CATEGORY_EXPENSE_FIXED = 'Fixed expense';
const CATEGORY_EXPENSE_VARIABLE = 'Variable expense';
const CATEGORY_INVESTIMENT = 'Investment';
const CATEGORY_INCOME = 'Income';

const STATUS_PLANNED = 'Planned'
const STATUS_PAYED = 'Payed';

const categoryOptions =
    [
        { label: CATEGORY_EXPENSE_FIXED, value: CATEGORY_EXPENSE_FIXED },
        { label: CATEGORY_EXPENSE_VARIABLE, value: CATEGORY_EXPENSE_VARIABLE },
        { label: CATEGORY_INVESTIMENT, value: CATEGORY_INVESTIMENT },
        { label: CATEGORY_INCOME, value: CATEGORY_INCOME }
    ]


const statusOptions =
    [
        { label: STATUS_PLANNED, value: STATUS_PLANNED },
        { label: STATUS_PAYED, value: STATUS_PAYED }
    ]


const EntryForm = () => {

    return (
        <ScrollView>
            <TextInput
                label="Title"
            />

            <TextInput
                label="Amount"
            />

            <Picker
                label="Category"
                options={categoryOptions}
            />

            <TextInput
                label="Date"
            />

            <TextInput
                label="Instalments"
            />

            <Picker
                label="Status"
                options={statusOptions}
            />

            <TouchableOpacity style={styles.buttonContainer} >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
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
})



export default EntryForm;