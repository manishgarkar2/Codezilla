import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Task from "../../screens/Tasks/AllTask";
import routes from "../routes";

const Stack = createStackNavigator();
function TaskStack(){
    return(
        <Stack.Navigator  screenOptions={{headerShown:false}}  >
            <Stack.Screen name={routes.task}  component={Task}/>
        </Stack.Navigator>

    )
}
export default TaskStack;