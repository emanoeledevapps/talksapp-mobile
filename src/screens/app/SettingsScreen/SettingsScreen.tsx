import React from 'react';

import { AppScreenProps } from 'src/routes/navigationType';

import {Screen, Text } from '@components';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>){
    return(
        <Screen
            canGoBack
        >
            <Text preset="headingLarge">SettingsScreen</Text>
        </Screen>
    );
}
