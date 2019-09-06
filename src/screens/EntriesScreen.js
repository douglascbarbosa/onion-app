import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import EntriesList from '../components/Entries/EntriesList';
import { format } from 'date-fns'
import Icon from 'react-native-vector-icons/FontAwesome';



const EntriesScreen = () => {

    const entries = [
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

    ]

    const getTotal = (entries) =>  {
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
    
    const incomes = entries.filter(entry => entry.category === 'Income');
    const investiments = entries.filter(entry => entry.category === 'Investment');

    const fixedExpenses = entries.filter(entry => entry.category === 'Fixed expenses');
    const variableExpenses = entries.filter(entry => entry.category === 'Variable expense');

    const balance = getTotal(entries);

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
                <Text style={{...styles.totalText, color: balance < 0 ? '#C13C54' : '#343F4B' }}>R$ {parseFloat(balance / 100).toFixed(2)}</Text>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        // backgroundColor: '#F4F7F8'
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

export default EntriesScreen;