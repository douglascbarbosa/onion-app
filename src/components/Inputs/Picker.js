import React from 'react';
import { View, Text, StyleSheet, Picker as NativePicker } from 'react-native';
import Label from '../Inputs/Label';


const renderOptions = (options) => {
    return options.map(option => <NativePicker.Item key={option.value} label={option.label} value={option.value} />);
}

const Picker = (props) => {

    return (
        <View style={styles.container}>
            <Label text={props.label} />
            <View style={styles.picker}>
                <NativePicker
                    style={{ color: 'rgba(0,0,0, 0.4)' }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                    }>

                    {props.options ? renderOptions(props.options) : null}

                </NativePicker>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5
    },
    picker: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        color: 'rgba(0,0,0, 0.4)',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#8492A6'
    },
});

export default Picker;