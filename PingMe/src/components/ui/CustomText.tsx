import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';

type CustomTextProps = {
  type: "heading" | "subHeading";
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const CustomText = (props: CustomTextProps) => {
  return (
    <Text
      style={[
        props.type === "heading"
          ?
          styles.heading
          :
          styles.subHeading,
        props.style
      ]}
    >{props.children || ""}</Text>
  )
}

export default CustomText

const styles = StyleSheet.create({
  heading: {
    color: "#1A1A1A",
    fontSize: moderateScale(20),
    fontWeight: "600"
  },
  subHeading: {

  }
})