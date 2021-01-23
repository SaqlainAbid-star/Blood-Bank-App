import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/Home";
import AddDonorScreen from "../screens/AddDonor";
import AddRequestScreen from "../screens/AddRequest";
import AppStack from "../navigation/AppStack";
import DrawerContent from "./DrawerContent";
import DonorScreen from '../screens/Donors';



const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (      
            <Drawer.Navigator
             initialRouteName="Home" 
             drawerContent={props=><DrawerContent {...props} />}
             >
                <Drawer.Screen name="HomeScreen" component={AppStack} />
                
            </Drawer.Navigator>
    );
}

export default DrawerNavigation;