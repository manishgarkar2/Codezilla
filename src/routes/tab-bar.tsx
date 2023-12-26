import React, { useState } from 'react';
import { StyleSheet, View, Vibration ,Alert,Text, TouchableHighlight, TouchableOpacity, Platform, SafeAreaView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../assects/colors';
import { iosOpacity, routesToExcluedNavBar, width } from '../assects/strings';

import fonts from '../assects/fonts';
import routes from './routes';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

const CustomTabBar = ({ state, descriptors, navigation, isGuest,visibleText }) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state=>state?.userDetails)
    let activeStackState = state.routes[state.index].state;
    let routeName = state.routes[state.index].name;

  const tabBarVisible = activeStackState?.routes[activeStackState.index]?.name == undefined ? routesToExcluedNavBar.includes(state.routes[state.index].name) : routesToExcluedNavBar.includes(activeStackState?.routes[activeStackState.index]?.name);

    const Logout = async() => {
        
    }

   
// 



    return !tabBarVisible ? (
        <SafeAreaView style={styles.normalTab}  >
            {state.routes.map((route, index) => {

                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({ type: 'tabPress', target: route.key, });
                   
                        if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
                };


                return (
                    <TouchableOpacity
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        key={index}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={{alignItems:"center",flex:1,paddingTop:5,paddingBottom:Platform.OS=='android'?5:0}}
                    >
                        <>
                            <View style={{alignItems: "center",marginTop:7 }}  >
                                <Icon name={options?.tabBarIcon} color={isFocused || routeName==routes?.videos?colors.blue:colors.c777} size={width/16} />
                            </View>
                            {visibleText ?<Text style={{color:isFocused || routeName==routes?.videos?colors.blue:colors.c777,fontFamily:fonts.PoppinsRegular, fontSize: 10 }} >{route?.name}</Text>: null}
                        </>
                        
                    </TouchableOpacity>
                );
            })}
        </SafeAreaView>
    ) : null

    
}

const styles = StyleSheet.create({
    container: { position: 'absolute', bottom: 20, backgroundColor: "red", flexDirection: 'row', width: width, height: 45, borderRadius: 50, justifyContent: "center", alignItems: "center", alignSelf: 'center' },
    forTransparentTab:{width: width, height: width / 7,borderTopColor:colors?.primaryColor,flexDirection: "row",alignItems: "center", justifyContent: "space-around",backgroundColor:"transparent", position: 'absolute', borderTopWidth: 1, bottom:0,elevation: 0},
    normalTab:{ width: width, flexDirection: "row", alignItems: "center", justifyContent: "space-around", backgroundColor:colors.white,borderTopColor:'#ccc',borderTopWidth:0.5}
})

export default CustomTabBar