import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import EntryItem from './EntryItem';

const EntriesList = ({ title, data, totalAmount, navigation }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowEntry', { id: item.id })}>
                            <EntryItem entry={item} />
                        </TouchableOpacity>
                    )
                }}
                style={styles.list}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={{ ...styles.totalText, color: totalAmount < 0 ? '#C13C54' : '#343F4B' }}>R$ {parseFloat(totalAmount / 100).toFixed(2)}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 15
    },
    list: {
        borderWidth: 1,
        borderColor: '#8492A6',
        borderRadius: 5,
        marginHorizontal: 15,
    },
    totalContainer: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#8492A6',
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff'
    },
    totalText: {
        fontSize: 16,
        color: '#343F4B',
        fontWeight: 'bold'
    },


})

export default withNavigation(EntriesList);