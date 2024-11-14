import React from 'react';

import { AppTabScreenProps } from 'src/routes/navigationType';

import { Button, Screen, Text } from '@components';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>){

    function navigateToSettings(){
        navigation.navigate('SettingsScreen');
    }

    return(
        <Screen>
            <Text preset="headingLarge">HomeScreen</Text>

            <Button title="Settings" onPress={navigateToSettings}/>
            <Button title="Favorite" mt="s16" onPress={() => navigation.navigate('FavoriteScreen')}/>
        </Screen>
    );
}
