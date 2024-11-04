import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from 'src/routes/AppStack';

import { Button, Screen, Text } from '@components';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>

export function HomeScreen({navigation}: ScreenProps){

    function navigateToSettings(){
        navigation.navigate('SettingsScreen');
    }

    return(
        <Screen>
            <Text preset="headingLarge">HomeScreen</Text>

            <Button title="Settings" onPress={navigateToSettings}/>
        </Screen>
    );
}
