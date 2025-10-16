import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export enum UnAuthStackScreens {
    LoginScreen = "LoginScreen"
}

export type UnAuthStackScreenParams = {
    [UnAuthStackScreens.LoginScreen]: undefined;
}

export type UnAuthStackScreenProps<RouteName extends keyof UnAuthStackScreenParams = UnAuthStackScreens> = StackScreenProps<UnAuthStackScreenParams, RouteName>;
export type UnAuthStackNavigationProp<RouteName extends keyof UnAuthStackScreenParams = UnAuthStackScreens> = StackNavigationProp<UnAuthStackScreenParams, RouteName>;
export type UnAuthStackRouteProp<RouteName extends keyof UnAuthStackScreenParams = UnAuthStackScreens> = RouteProp<UnAuthStackScreenParams, RouteName>;

const UnAuthStack = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={UnAuthStackScreens.LoginScreen}
                component={LoginScreen}
            />
        </Stack.Navigator>
  )
}

export default UnAuthStack;