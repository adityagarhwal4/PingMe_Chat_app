import React from 'react'
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UnAuthStack from './UnAuthStack';

const Stack = createStackNavigator();

export enum BaseStackScreens {
    AuthStack = "AuthStack",
    UnAuthStack = "UnAuthStack"
}

export type BaseStackScreenParams = {
    [BaseStackScreens.AuthStack]: undefined;
    [BaseStackScreens.UnAuthStack]: undefined;
}

export type BaseStackScreenProps<RouteName extends keyof BaseStackScreenParams = BaseStackScreens> = StackScreenProps<BaseStackScreenParams, RouteName>;
export type BaseStackNavigationProp<RouteName extends keyof BaseStackScreenParams = BaseStackScreens> = StackNavigationProp<BaseStackScreenParams, RouteName>;
export type BaseStackRouteProp<RouteName extends keyof BaseStackScreenParams = BaseStackScreens> = RouteProp<BaseStackScreenParams, RouteName>;

const BaseStack = () => {
    return (
        <Stack.Navigator initialRouteName={BaseStackScreens.UnAuthStack}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={BaseStackScreens.AuthStack}
                component={AuthStack}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={BaseStackScreens.UnAuthStack}
                component={UnAuthStack}
            />
        </Stack.Navigator>
    )
}

export default BaseStack;