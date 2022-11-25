import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '../components/Themed';
import Colors from '../constants/Colors';

export default function FavoriteItem(
    { item, clickHandler }:
        {
            item: {
                value: number,
                title: string
            },
            clickHandler: Function
        }) {
    return (
        <TouchableOpacity
            style={styles.favoriteBox}
            onPress={() => clickHandler(item)}
        >
            <Text style={styles.favoriteValue}>
                {item.value}&deg;
            </Text>
            <Text style={styles.favoriteTitle}>
                {item.title}
            </Text>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    favoriteValue: {
        fontSize: 27,
        fontWeight: '300',
        paddingTop: 25,
        textAlign: 'center',
        letterSpacing: -0.3,
        opacity: 0.9,
    },
    favoriteTitle: {
        textAlign: 'center',
        fontSize: 15,
        letterSpacing: 3,
        opacity: 0.6,
        fontWeight: 'bold',
    },
    favoriteBox: {
        maxWidth: '30%',
        height: 100,
        width: '30%',
        margin: 3,
        overflow: 'hidden',
        backgroundColor: Colors.dark.snjPunch,
        opacity: 0.6,
    },
});
