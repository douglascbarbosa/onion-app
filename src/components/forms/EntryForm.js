import React, { useState } from 'react';
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


const EntryForm = ({ onSubmit }) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(CATEGORY_EXPENSE_FIXED);
    const [date, setDate] = useState('');
    const [instalments, setInstalments] = useState('')
    const [status, setStatus] = useState(STATUS_PLANNED);

    return (
        <ScrollView>
            <TextInput
                label="Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />

            <TextInput
                label="Amount"
                value={amount}
                onChangeText={(text) => setAmount(text)}
            />

            <Picker
                label="Category"
                options={categoryOptions}
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            />

            <TextInput
                label="Date"
                value={date}
                onChangeText={(text) => setDate(text)}
            />

            <TextInput
                label="Instalments"
                value={instalments}
                onChangeText={(text) => setInstalments(text)}
            />

            <Picker
                label="Status"
                options={statusOptions}
                selectedValue={status}
                onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}

            />

            <TouchableOpacity style={styles.buttonContainer} onPress={() => { onSubmit({title, amount, category, date, instalments, status})} } >
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