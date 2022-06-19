import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../utilities/ApiServices';
import { RootState } from '../../redux/store'
import { MaterialIndicator } from 'react-native-indicators';
import { setLoader } from '../../redux/rootReducer';
import Product from '../../components/Product';
import { Search } from '../../components';


const MyProducts = ({ }) => {
    const { products, productsLength, loader } = useSelector((state: RootState) => state.rootReducer)
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [dataAfterFilter, setDataAfterFilter] = useState<any[]>([]);

    useEffect(() => {
        getProducts(dispatch);
    }, [])

    useEffect(() => {
        if (products.length != dataAfterFilter.length) {
            setDataAfterFilter(products);
        }
    }, [products])

    const handleLoadMore = (e: any) => {
        if (!searchValue) {
            dispatch(setLoader(true));
            setTimeout(() => {
                getProducts(dispatch);
            }, 2000);
        }
    }

    const handleChangeText = (e: string) => {
        setSearchValue(e)
        if (e.length > 2) {
            const newData = products.slice().filter(ptoduct => ptoduct.productName.toUpperCase().includes(e.toUpperCase()))
            setDataAfterFilter(newData);
        } else {
            setDataAfterFilter(products);

        }
    }

    const onSearchClear = () => {
        setDataAfterFilter(products);
        setSearchValue('')
    }

    return (
        <View style={styles.container}>
            <Search
                value={searchValue}
                onChange={(e) => handleChangeText(e)}
                onSearchClear={onSearchClear}
            />
            <FlatList
                data={dataAfterFilter || []}
                horizontal={false}
                columnWrapperStyle={styles.columnWrapperStyle}
                onEndReached={e => !searchValue && !loader && productsLength != products.length && handleLoadMore(e)}
                onEndReachedThreshold={0.3}
                ListFooterComponent={() => ((loader) ? <MaterialIndicator color='gray' /> : <View />)}
                numColumns={2}
                renderItem={(({ item }: any) => <Product item={item} />)}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => <Text style={styles.noRes}>No-Results</Text>}
            />
            <View />
        </View >
    );
}
export default MyProducts;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(243,243,242)',
        flex: 1,
        marginVertical: 10,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
    noRes: {
        color: 'rgb(151,145,145)',
        fontSize: 28,
        alignSelf: 'center',
        marginTop: 30,
    },
    columnWrapperStyle: { width: '100%', justifyContent: 'center' },
});
