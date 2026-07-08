import { Image, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import React from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Layout from '../components/layout/Layout'
import { moderateVerticalScale } from 'react-native-size-matters'
import CustomText from '../components/ui/CustomText'
import { Controller, useForm } from 'react-hook-form'

type Form = {
    username: string;
    password: string;
}
const LoginScreen = () => {
    const { control, handleSubmit } = useForm<Form>();

    const handleLoginClick = (data: Form) => {
        console.log("Login Clicked", data);
    }

    return (
        <Layout>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

            >
                <ScrollView>
                    <View style={{ marginTop: moderateVerticalScale(80) }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../assets/Chat.png')}
                            />
                        </View>
                        <CustomText
                            style={{ textAlign: "center", marginTop: moderateVerticalScale(24) }}
                            type='heading'
                        >
                            Welcome to Ping Me
                        </CustomText>
                        <Controller
                            control={control}
                            name='username'
                            rules={{}}
                            render={({ field }) => (
                                <Input
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    style={{ marginTop: moderateVerticalScale(64) }}
                                    placeholder='Username or email address'
                                    keyboardType='email-address'
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name='password'
                            rules={{}}
                            render={({ field }) => (
                                <Input
                                    secureTextEntry
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    style={{ marginTop: moderateVerticalScale(16) }}
                                    placeholder='Password'
                                />
                            )}
                        />
                        <Button
                            style={{ marginTop: moderateVerticalScale(16) }}
                            varient='containedBlue'
                            title='Login'
                            onPress={handleSubmit(handleLoginClick)}
                        />
                        <Button
                            style={{ marginTop: moderateVerticalScale(16) }}
                            varient='containedGrey'
                            title='Create a new account'
                        />
                        <Button
                            style={{ marginTop: moderateVerticalScale(16) }}
                            varient='Text'
                            title='Forget Password?'
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Layout>
    )
}

export default LoginScreen