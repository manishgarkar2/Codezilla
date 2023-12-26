import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Modal, ActivityIndicator } from 'react-native';
import { width } from '../assects/strings';
import { colors } from '../assects/colors';
import fonts from '../assects/fonts';
import Images from '../assects/Images';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import routes from '../routes/routes';

function CustomLoader({status}){
    const navigation = useNavigation();
    return(
       <Modal transparent visible={status} >
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#00000099'}} >
          <ActivityIndicator size={'large'}  color={colors.secondryColor}/>
        </View>
       </Modal>
    )
}

const styles = StyleSheet.create({
  container: {width:width,height:width/7,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:15,backgroundColor:colors.secondryColor},
});

export default CustomLoader;
