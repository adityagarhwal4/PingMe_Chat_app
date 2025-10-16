import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

type LayoutProps = {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: moderateScale(16)
    }
})