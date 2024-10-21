import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Icon } from "../../../components/Icon/Icon";
import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>
export function SuccessScreen({route, navigation}: ScreenProps){
    const {description, icon, title} = route.params;

    function handleGoBack(){
        navigation.goBack();
    }

    return(
        <Screen>
            <Icon {...icon}/>
            <Text preset="headingLarge" mt='s24'>{title}</Text>
            <Text preset="paragraphLarge" mt='s20'>{description}</Text>

            <Button title='Voltar ao início' mt='s48' onPress={handleGoBack}/>
        </Screen>
    )
}