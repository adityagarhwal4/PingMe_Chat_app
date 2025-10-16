import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import ChatsScreen from '../screens/ChatsScreen';

const Stack = createStackNavigator();

export enum AuthStackScreens {
    ChatsScreen = "ChatsScreen"
}

export type AuthStackScreenParams = {
    [AuthStackScreens.ChatsScreen]: undefined;
}

export type AuthStackScreenProps<RouteName extends keyof AuthStackScreenParams = AuthStackScreens> = StackScreenProps<AuthStackScreenParams, RouteName>;
export type AuthStackNavigationProp<RouteName extends keyof AuthStackScreenParams = AuthStackScreens> = StackNavigationProp<AuthStackScreenParams, RouteName>;
export type AuthStackRouteProp<RouteName extends keyof AuthStackScreenParams = AuthStackScreens> = RouteProp<AuthStackScreenParams, RouteName>;

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={AuthStackScreens.ChatsScreen}
                component={ChatsScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthStack;