import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Context } from '../../context/OnionContex';

const EntryItem = ({ entry }) => {
    const { deleteEntry } = useContext(Context);

    return (
        <View style={{ ...styles.container, backgroundColor: getbackgroundColor(entry) }}>
            <View style={styles.checkConteiner}>
                {entry.status === 'payed' ? <Icon name="check-circle-o" size={25} color='#86BA8D' /> : <Icon name="circle-o" size={25} />}
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <Text style={styles.title}>{entry.title}</Text>
                    <Text style={styles.title}>R$ {parseFloat(entry.amount / 100).toFixed(2)}</Text>
                </View>
                <View style={styles.info}>
                    <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                        <Text style={styles.text}>{entry.date}</Text><Text style={styles.payedText}>{entry.paymentDate}</Text>
                    </View>
                    <Text style={styles.text}>{entry.installments ? entry.installments + ' of ' + entry.currentInstallment : null}</Text>
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity>
                    <Icon name='edit' size={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { deleteEntry(entry.id) }} >
                    <Icon name='trash-o' size={25} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const getbackgroundColor = ({ status }) => {
    switch (status) {
        case 'payed':
            return 'rgba(92, 245, 193, 0.11)'
        case 'overdue':
            return 'rgba(193, 60, 84, 0.11)'
        default:
            return '#fff'

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#8492A6'
    },
    title: {
        color: '#47525E',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        color: '#343F4B',
        fontSize: 16
    },
    payedText: {
        color: '#86BA8D',
        fontSize: 16,
        marginLeft: 5
    },
    checkConteiner: {
        justifyContent: 'center',
        padding: 15
    },
    infoContainer: {
        flex: 1,
        marginVertical: 5
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 5,
        flexGrow: 5
    },
    optionsContainer: {
        padding: 5,
        justifyContent: 'space-between'
    }
})

export default EntryItem;