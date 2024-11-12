import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@screens';

export type AppTabBottomTabParamList = {
    HomeScreen: undefined;
}

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        </Tab.Navigator>
    );
}
