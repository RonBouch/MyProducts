import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ViewProduct = () => {
    const route = useRoute();
    const product: any = route?.params
    return (
        <View style={styles.container}>
            <Image source={{ uri: product?.img || '' }} style={styles.img} />
            <View style={styles.aboutContainer}>
                <Text style={styles.price}>{product?.price}</Text>

                <Text style={styles.title}>{product?.productName}</Text>
                <Text style={styles.about}>
                    {product?.about}
                </Text>
                <View style={styles.bottomCon}>
                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.apple.com/store') }} //TODO
                        style={styles.btnCon}>
                        <Text style={styles.btnTxt}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >


    );
};

export default ViewProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: { fontWeight: 'bold', fontSize: 24, },
    aboutContainer: {
        padding: 16,
    },
    img: { width: '100%', height: '60%' },
    price: { fontWeight: 'bold', fontSize: 20, color: '#805203', textAlign: 'right' },
    about: { color: '#1c1a18', fontSize: 16, fontFamily: 'arial' },
    bottomCon: { marginTop: 20, width: '100%', paddingHorizontal: 36 },
    btnCon: { backgroundColor: '#ffa100', borderRadius: 20, alignItems: 'center', height: 40, justifyContent: 'center' },
    btnTxt: { color: 'white', fontWeight: 'bold', fontSize: 18 },
});
