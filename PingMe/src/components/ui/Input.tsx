import { KeyboardTypeOptions, StyleProp, StyleSheet, TextInput, TextStyle } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, } from 'react-native-size-matters';

type InputProps = {
    value?: string;
    onChangeText?: ((text: string) => void);
    placeholder?: string;
    placeholderTextColor?: string;
    keyboardType?: KeyboardTypeOptions;
    style?: StyleProp<TextStyle>
};

const Input = (props: InputProps) => {
    return (
        <TextInput
            style={[styles.input, props.style]}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor || "666666"}
            keyboardType={props.keyboardType}
        />
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        height: moderateVerticalScale(48),
        borderWidth: moderateScale(1),
        borderColor: '#B3B3B3',
        paddingHorizontal: moderateScale(16),
        fontSize: moderateScale(16),
        borderRadius: moderateScale(8),
        fontWeight: '400'
    }
})