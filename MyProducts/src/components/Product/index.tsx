import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStack } from '../../routes/RootNavigator';
import { SCREENS } from '../../utilities/enums';

const Product = ({ item }: any | undefined) => {
    const navigation = useNavigation<RootStack>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.productName}</Text>

            <Image source={{ uri: item.img || '' }} style={styles.img} />
            <Text numberOfLines={2} style={styles.about}>{item?.about}</Text>

            <View style={styles.bottomContainer}>

                <Text style={styles.price}>{item?.price}</Text>
                <TouchableOpacity onPress={() => navigation.navigate(SCREENS.ViewProduct, item)}
                    style={styles.moreInfo}>
                    <Text style={styles.moreInfoTxt}>More info</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}
export default Product;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.2,
        borderRadius: 10,
        margin: 6,
        padding: 14,
        width: '45%',
        backgroundColor: 'white',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
    img: { width: 100, height: 100 },
    about: { color: '#6e6d6b' },
    bottomContainer: { justifyContent: 'space-around', flexDirection: 'row', marginTop: 10, width: '100%', alignItems: 'center' },
    price: { fontWeight: 'bold' },
    moreInfo: { backgroundColor: '#ffa100', padding: 6, borderRadius: 20 },
    moreInfoTxt: { color: 'white', fontWeight: 'bold' },
});
