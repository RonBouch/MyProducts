import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../utilities/ApiServices';
import { RootState } from '../../redux/store'
import { MaterialIndicator } from 'react-native-indicators';
import { clearProductsLength, setLoader } from '../../redux/rootReducer';
import Product from '../../components/Product';
import { Search } from '../../components';
import { debounce } from "lodash";


const MyProducts = ({ }) => {
    const { products, productsLength, loader } = useSelector((state: RootState) => state.rootReducer)
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        getProducts(dispatch);
    }, [])

    const getNewData = (e?: string) => {
        dispatch(clearProductsLength())
        getProducts(dispatch, e);
    }

    const handleNewDataWithDebounce = useCallback(debounce(getNewData, 1000), []);

    const handleLoadMore = (e: any) => {
        dispatch(setLoader(true));
        setTimeout(() => getProducts(dispatch, searchValue), 1000);
    }

    const handleChangeText = useCallback((e: string) => {
        setSearchValue(e)
        dispatch(setLoader(true));
        handleNewDataWithDebounce(e);
    }, [searchValue])

    const onSearchClear = useCallback(() => {
        setSearchValue('')
        getProducts(dispatch);
    }, [searchValue])

    return (
        <View style={styles.container}>
            <Search
                value={searchValue}
                onChange={handleChangeText}
                onSearchClear={onSearchClear}
            />
            <FlatList
                data={products || []}
                horizontal={false}
                columnWrapperStyle={styles.columnWrapperStyle}
                onEndReached={e => !loader && productsLength != products.length && handleLoadMore(e)}
                onEndReachedThreshold={0.02}
                ListFooterComponent={() => ((loader) ? <MaterialIndicator color='gray' /> : <View />)}
                numColumns={2}
                renderItem={(({ item }: any) => <Product item={item} />)}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => <Text style={styles.noRes}>{searchValue && loader ? <View /> : 'No-Results'}</Text>}
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
