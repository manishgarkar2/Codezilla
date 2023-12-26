import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import routes from "../routes";
import Profile from "../../screens/Profile/Profile";

const Stack = createStackNavigator();
function ProfileStack(){
    return(
        <Stack.Navigator  screenOptions={{headerShown:false}}  >
            <Stack.Screen name={routes.profileStack}  component={Profile}/>
        </Stack.Navigator>
    )
}
export default ProfileStack;