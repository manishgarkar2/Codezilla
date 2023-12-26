import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppNavigation from './app-routes';


const Routes = () => {
    
    return (
        <NavigationContainer  >
            <AppNavigation />
        </NavigationContainer>
    )
}
export default Routes;      