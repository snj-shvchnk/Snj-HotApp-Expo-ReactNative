import { Text, View } from './Themed';
import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

export function SearchForm({ searchHandler }: { searchHandler: Function }) {
    const [inputValue, inputValueHandler] = useState({ value: '' });
    return (
        <View style={styles.SearchForm}>
            <TextInput
                style={styles.SearchField}
                value={inputValue.value}
                placeholder='Search me please ~&gt;'
                onChange={(e) => {
                    const newValue = e.nativeEvent.text;
                    console.log('Search:', { inputValue, newValue });
                    inputValueHandler({ value: newValue });
                }}
            />
            <TouchableOpacity
                style={styles.SearchButton}
                onPress={() => {
                    inputValueHandler({ value: '' });
                    searchHandler({ ...inputValue });
                }}
            >

                <Text style={styles.SearchBtnLabel}>
                    <FontAwesome name='key' />
                    YES
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    SearchForm: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 15,
        backgroundColor: 'rgba(200,200,200,0.3)',
        // borderRadius: 3,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13,
        width: '83%',
        opacity: 0.9,
    },
    SearchField: {
        width: '70%',
        color: '#333',
        fontSize: 18,
        paddingLeft: 20,
        borderColor: '#aaa',
        borderWidth: 0,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
    },
    SearchButton: {
        width: '30%',
        backgroundColor: Colors.dark.snjPunch,
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13,
    },
    SearchBtnLabel: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        padding: 5,
    }
});
