import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UnAuthStack from './UnAuthStack';

const Stack = createNativeStackNavigator();

export enum BaseScreens {
    UnAuthStack = "UnAuthStack",
    AuthStack = "AuthStack",
}

export type BaseScreenParams = {
    [BaseScreens.UnAuthStack]: undefined;
    [BaseScreens.AuthStack]: undefined;
}

export type BaseScreenProps<RouteName extends keyof BaseScreenParams = BaseScreens> = NativeStackScreenProps<BaseScreenParams, RouteName>;
export type BaseStackNavigationProp<RouteName extends keyof BaseScreenParams = BaseScreens> = NativeStackNavigationProp<BaseScreenParams, RouteName>;
export type BaseStackRouteProp<RouteName extends keyof BaseScreenParams = BaseScreens> = RouteProp<BaseScreenParams, RouteName>;

const BaseStack = () => {

    return (
        <Stack.Navigator initialRouteName={BaseScreens.UnAuthStack}>
            <Stack.Screen name={BaseScreens.AuthStack} component={AuthStack} />
            <Stack.Screen name={BaseScreens.UnAuthStack} component={UnAuthStack} />
        </Stack.Navigator>
    )
}

export default BaseStack

const styles = StyleSheet.create({})