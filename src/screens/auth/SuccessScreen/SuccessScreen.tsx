import React from 'react';

import { Text, Button, Screen, Icon } from '@components';
import { AuthScreenProps } from '@routes';

export function SuccessScreen({route, navigation}: AuthScreenProps<'SuccessScreen'>){
    const {description, icon, title} = route.params;

    function handleGoBack(){
        navigation.goBack();
    }

    return(
        <Screen>
            <Icon {...icon}/>
            <Text preset="headingLarge" mt="s24">{title}</Text>
            <Text preset="paragraphLarge" mt="s20">{description}</Text>

            <Button title="Voltar ao início" mt="s48" onPress={handleGoBack}/>
        </Screen>
    );
}
