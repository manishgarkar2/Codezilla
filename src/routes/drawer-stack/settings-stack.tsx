import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import routes from "./routes";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
function SettingsStack(){
    return(
        <Stack.Navigator  >
            <Stack.Screen name="sd"  component={}/>
        </Stack.Navigator>
    )
}
export default SettingsStack;