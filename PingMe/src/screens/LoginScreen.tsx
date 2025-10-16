import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Layout from '../components/layout/Layout'
import { moderateVerticalScale } from 'react-native-size-matters'
import CustomText from '../components/ui/CustomText'

const LoginScreen = () => {
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
                        <Input
                            style={{ marginTop: moderateVerticalScale(64) }}
                            placeholder='Username or email address'
                        />
                        <Input
                            style={{ marginTop: moderateVerticalScale(16) }}
                            placeholder='Password'
                        />
                        <Button
                            style={{ marginTop: moderateVerticalScale(16) }}
                            varient='containedBlue'
                            title='Login'
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