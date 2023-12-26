import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React, {  } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { colors } from '../assects/colors';
import fonts from '../assects/fonts';
import routes from './routes';
import CustomTabBar from './tab-bar';
import HomeStack from './tab-stack/home-stack';
import TaskStack from './tab-stack/task-stack';
import ProfileStack from './tab-stack/profile-stack';
import Profile from '../screens/Profile/Profile';
import Settings from '../screens/Settings/Settings';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TopTab = createMaterialTopTabNavigator();

const tabBarOptions = (icon, activeIcon, navigation) => {
    const isFocused = navigation?.isFocused();
    return ({
        unmountOnBlur: true,
        tabBarIcon:  !isFocused ? activeIcon : icon,
       
    
    })
}




const TabNavigation = () => {
   const {user} = useSelector(state=>state?.userDetails)

    return (
        <Tab.Navigator   
        initialRouteName={routes.profile}  
        screenOptions={{ headerShown: false,}}  
        tabBar={props => <CustomTabBar  visibleText={true}  {...props} />}
        
        >
            <Tab.Screen 
            name={routes?.homeStack} 
            component={HomeStack} 
            options={({ navigation }) => tabBarOptions('home' , 'home', navigation)} 

             />
            <Tab.Screen 
            name={routes?.taskStack}
            component={TaskStack} 
            options={({ navigation }) => tabBarOptions('email' , 'email' , navigation)} 

            />
            <Tab.Screen 
            name={routes?.profileStack}
            component={ProfileStack} 
            options={({ navigation }) => tabBarOptions('person' , 'person', navigation)} 

            />
        </Tab.Navigator>
    )
}

const AppNavigation = () => {
   return(
   <Drawer.Navigator screenOptions={{headerShown:false}} >
      <Drawer.Screen name='tab' component={TabNavigation}  options={{title:'Home'}} />
      <Drawer.Screen name='Profile' component={Profile}  />
      <Drawer.Screen name='Settings' component={Settings}  />

   </Drawer.Navigator>
   )
}

const styles = StyleSheet.create({
    activeTabTitle: { color: colors.white, fontFamily: fonts.PoppinsRegular, fontSize: 11, marginBottom: -5 }
})

export default AppNavigation;