import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import MobileNumberScreen from '../screens/MobileNumberScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';

const Stack = createNativeStackNavigator();

export enum UnAuthStackScreens {
    MobileNumberScreen = 'MobileNumberScreen',
    OtpVerificationScreen = 'OtpVerificationScreen'
}

export type UnAuthStackScreenParams = {
    [UnAuthStackScreens.MobileNumberScreen]: undefined;
    [UnAuthStackScreens.OtpVerificationScreen]: undefined;
}

export type UnAuthStackScreensProps<RouteName extends keyof UnAuthStackScreenParams = UnAuthStackScreens> = NativeStackScreenProps<UnAuthStackScreenParams, RouteName>;
export type UnAuthStackNavigationProp<RouteName extends keyof UnAuthStackScreenParams = UnAuthStackScreens> = NativeStackNavigationProp<UnAuthStackScreenParams, RouteName>;
export type UnAuthStackkRouteProp<RouteName extends keyof UnAuthStackScreenParams = UnAuthStackScreens> = RouteProp<UnAuthStackScreenParams, RouteName>;

const UnAuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={UnAuthStackScreens.MobileNumberScreen} component={MobileNumberScreen} />
            <Stack.Screen name={UnAuthStackScreens.OtpVerificationScreen} component={OtpVerificationScreen} />
        </Stack.Navigator>
    )
}

export default UnAuthStack

const styles = StyleSheet.create({})