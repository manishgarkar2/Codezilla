import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import { width } from '../../assects/strings';
import fonts from '../../assects/fonts';
import { colors } from '../../assects/colors';


const Settings = () => {
    const options = [{ title: '' }]

    function PrefComponent({title,options}){
        const [selectedItem,setSelectedItem] = useState(options[0])
        return(
            <View style={{paddingHorizontal:20,marginBottom:10,borderBottomColor:'#ccc',borderBottomWidth:0.5}} >
                <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:13}} >{title}</Text>
                <FlatList  scrollEnabled={false} numColumns={3} style={{marginVertical:5}}  data={options} renderItem={({item,index})=>{
                     const isSelected =  selectedItem==item;
                    return(
                    <Pressable onPress={()=>setSelectedItem(item)} style={{height:width/15,borderRadius:100,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#ccc',marginHorizontal:10,marginVertical:10}} >
                        <Text style={{paddingHorizontal:20,color:isSelected?colors.secondryColor:colors.gray,fontFamily:isSelected?fonts.PoppinsMedium:fonts.PoppinsRegular,fontSize:13}} >{item}</Text>
                    </Pressable>
                    )
                }} />

            </View>
        )
    }
    return (
        <View style={{ flex: 1 }} >
            <CustomHeader title='Settings' />
            <View style={{width:width,height:width/7,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,borderBottomColor:'#ccc',borderBottomWidth:0.5,marginBottom:20}} >
                <Text style={{fontFamily:fonts.PoppinsMedium,color:colors.black}} >App Version</Text>
                <Text style={{fontFamily:fonts.PoppinsMedium,color:colors.black}}>1.0</Text>
            </View>
            <PrefComponent title={'Location'} options={['Bhopal','Indore','Delhi','Mumbai']} />
            <PrefComponent title={'Theme'} options={['Dark','Light']} />
            <PrefComponent title={'Language'} options={['Hindi','English','Spanish']} />
        </View>
    )
}
export default Settings;      