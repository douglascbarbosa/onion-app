import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import EntriesList from '../components/Entries/EntriesList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Context as OnionContext } from '../context/OnionContex';



const EntriesScreen = () => {
    const { state } = useContext(OnionContext);

    const getTotal = (entries) => {
        let expense = 0;
        let income = 0;

        entries.forEach((entry) => {
            if (entry.expense) {
                expense += entry.amount;
            } else {
                income += entry.amount;
            }
        })

        return income - expense;
    }

    const incomes = state.filter(entry => entry.category === 'Income');
    const investiments = state.filter(entry => entry.category === 'Investment');

    const fixedExpenses = state.filter(entry => entry.category === 'Fixed expenses');
    const variableExpenses = state.filter(entry => entry.category === 'Variable expense');

    const balance = getTotal(state);

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Icon name="calendar-o" size={30} color='#fff' />
                <Text style={styles.dateTextStyle}>September 2019</Text>
            </View>
            <ScrollView style={styles.entriesListContainer}>

                <EntriesList data={incomes} title="Income" totalAmount={getTotal(incomes)} />
                <EntriesList data={investiments} title="Investment" totalAmount={getTotal(investiments)} />
                <EntriesList data={fixedExpenses} title="Fixed expenses" totalAmount={getTotal(fixedExpenses)} />
                <EntriesList data={variableExpenses} title="Variable expense" totalAmount={getTotal(variableExpenses)} />
            </ScrollView>
            <View style={styles.summaryContainer}>
                <Text style={styles.totalText}>Balance</Text>
                <Text style={{ ...styles.totalText, color: balance < 0 ? '#C13C54' : '#343F4B' }}>R$ {parseFloat(balance / 100).toFixed(2)}</Text>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    dateContainer: {
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#F6922B'

    },
    dateTextStyle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    entriesListContainer: {
        flex: 9
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderTopColor: '#8492A6',
        borderTopWidth: 1,
        marginTop: 5

    },
    totalText: {
        fontSize: 16,
        color: '#343F4B',
        fontWeight: 'bold',

    },

})


EntriesScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('CreateEntry')}>
                <Icon name="plus" style={{marginRight: 10}} size={25} color='#000' />
            </TouchableOpacity>
        )
    }
}

export default EntriesScreen;