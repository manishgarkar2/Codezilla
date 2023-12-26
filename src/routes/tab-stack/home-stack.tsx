import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../../screens/Home/Home";
import routes from "../routes";

const Stack = createStackNavigator();
function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}  >
            <Stack.Screen name={routes.home}  component={Home}/>
        </Stack.Navigator>
    )
}
export default HomeStack;