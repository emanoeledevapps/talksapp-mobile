import React from 'react';

import { AppScreenProps } from 'src/routes/navigationType';

import { Button, Screen, Text } from '@components';

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>){

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
