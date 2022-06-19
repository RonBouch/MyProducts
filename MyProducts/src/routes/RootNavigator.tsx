import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { ViewProduct, MyProducts } from '../screens';
import { SCREENS } from '../utilities/enums';
import { Button, Text } from 'react-native';

export type RootStack = StackNavigationProp<RootStackParam>;

export type RootStackParam = {
    MyProducts: any;
    ViewProduct: any;
};

const Stack = createNativeStackNavigator<RootStackParam>();


const stackScreenOptions = (title: string) => ({
    headerStyle: {
        backgroundColor: 'rgb(243,243,242)',
    },
    headerTitle: () => <Text style={{ fontSize: 22 }}>{title}</Text>,
    headerRight: () => (
        <Button
            onPress={() => { }}
            title="Info"
            color="#fff"
        />
    ),
})

export const RootNavigator = () => {

    return (
        <NavigationContainer  >
            <Stack.Navigator initialRouteName={SCREENS.Login} screenOptions={{ headerBackTitleVisible: false }}>
                <Stack.Screen name={SCREENS.MyProducts} component={MyProducts} options={(props) => ({ ...stackScreenOptions("Apple-Products") })} />
                <Stack.Screen name={SCREENS.ViewProduct} component={ViewProduct} options={(props) => ({ ...stackScreenOptions('More-Info') })} />
            </Stack.Navigator >
        </NavigationContainer >
    );
}
export default RootNavigator;

