import React, { PropsWithChildren } from 'react'
import {
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ViewStyle,
    ScrollView,
} from 'react-native'

type Props = PropsWithChildren<{
    style?: ViewStyle
    /** Offset for headers/tab bars; with React Navigation’s header use useHeaderHeight() */
    keyboardVerticalOffset?: number
    /** Set true if your content might overflow and should scroll when keyboard shows */
    scrollable?: boolean
    /** iOS behavior override if needed */
    behavior?: 'height' | 'position' | 'padding'
}>

const KeyboardAvoider: React.FC<Props> = ({
    children,
    style,
    keyboardVerticalOffset = 0,
    scrollable = false,
    behavior,
}) => {
    const resolvedBehavior = behavior ?? (Platform.OS === 'ios' ? 'padding' : 'height')

    const Content = scrollable ? ScrollView : React.Fragment
    const contentProps = scrollable
        ? ({
            contentContainerStyle: { flexGrow: 1 },
            keyboardShouldPersistTaps: 'handled',
        } as any)
        : {}

    return (
        <KeyboardAvoidingView
            style={[{ flex: 1 }, style]}
            behavior={resolvedBehavior}
            keyboardVerticalOffset={keyboardVerticalOffset}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                {/* @ts-ignore */}
                <Content {...contentProps}>{children}</Content>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoider
