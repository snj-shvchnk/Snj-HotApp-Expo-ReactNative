import { Text, View } from './Themed';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export function MainItem({ item }: { item: any }) {
    const { id, value, title } = item;
    return (
        <View key={id} style={styles.mainItemBox}>
            <Text style={styles.title}>{value}&deg;</Text>
            <Text style={styles.description}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainItemBox: {
        backgroundColor: Colors.dark.snjPunch,
        opacity: 0.8,
        padding: 35,
        paddingBottom: 40,
        borderRadius: 3,
        minWidth: '60%',
    },
    title: {
        paddingTop: 10,
        fontSize: 70,
        fontWeight: '300',
        textAlign: 'center',
    },
    description: {
        fontSize: 40,
        fontWeight: 'bold',
        opacity: 0.6,
        textAlign: 'center',
        paddingBottom: 10,
        letterSpacing: 4,
    }
});
