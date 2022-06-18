import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { ViewProduct, MyProducts } from '../screens';
import { SCREENS } from '../utilities/enums';
import { Text, View } from 'react-native';
// import { Header } from '../components';
import Svg, { Path } from 'react-native-svg';

export type RootStack = StackNavigationProp<RootStackParam>;

export type RootStackParam = {
    MyProducts: any;
    ViewProduct: any;
};

const Stack = createNativeStackNavigator<RootStackParam>();


const stackScreenOptions = (title: string, props: NativeStackScreenProps<RootStackParam>) => ({
    headerMode: 'none',
    headerShadowVisible: true,
    header: () => (
        <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            {/* <BackBtn /> */}
            {/* <Header title={title?.toString()} {...props} /> */}
            <Text>
                {title}
            </Text>

        </View>
    ),
})

export const RootNavigator = () => {

    return (
        <NavigationContainer  >
            <Stack.Navigator initialRouteName={SCREENS.Login} screenOptions={{ headerBackTitleVisible: false }}>
                <Stack.Screen name={SCREENS.MyProducts} component={MyProducts} options={(props) => ({ ...stackScreenOptions("My-Products", props) })} />
                <Stack.Screen name={SCREENS.ViewProduct} component={ViewProduct} options={(props) => ({ ...stackScreenOptions('View-Product', props) })} />
            </Stack.Navigator >
        </NavigationContainer >
    );
}
export default RootNavigator;

