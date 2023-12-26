import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, StatusBar } from 'react-native';
import { colors } from '../assects/colors';
import { width, height } from '../assects/strings';
import Images from '../assects/Images';

const SplashScreen = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <Image style={{width:width/1.5,height:width/10,resizeMode:'contain'}} source={Images.logo} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.white },
})
export default SplashScreen;