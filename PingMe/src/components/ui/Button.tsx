import { GestureResponderEvent, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

type ButtonProps = {
    varient?: 'containedBlue' | "containedGrey" | "Text";
    activeOpacity?: number;
    onPress?: ((event: GestureResponderEvent) => void);
    title?: string;
    style?: StyleProp<ViewStyle>
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <TouchableOpacity
            style={[
                styles.commonButton,
                props.style,
                props.varient === 'containedBlue'
                    ?
                    styles.containedBlueButton
                    :
                    props.varient === 'containedGrey'
                        ?
                        styles.containedGreyButton
                        :
                        {}
            ]}
            activeOpacity={props.activeOpacity || 0.7}
            onPress={props.onPress}
        >
            <Text
                style={[
                    styles.commonText,
                    props.varient === 'containedBlue'
                        ?
                        styles.containedBlueText
                        :
                        props.varient === 'containedGrey'
                            ?
                            styles.containedGreyText
                            :
                            {color: '#3355FF'}
                ]}
            >{props.title || 'Button'}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    commonButton: {
        paddingVertical: moderateVerticalScale(12),
        alignItems: 'center',
        borderRadius: moderateScale(8)
    },
    commonText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
        fontWeight: '600'
    },
    containedBlueButton: {
        backgroundColor: '#3355FF'
    },
    containedBlueText: {
        color: '#FFFFFF'
    },
    containedGreyButton: {
        backgroundColor: '#E5E5E5'
    },
    containedGreyText: {
        color: '#333333'
    }
});