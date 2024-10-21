import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>
export function ForgotPasswordScreen({navigation}: ScreenProps){
    const {reset} = useResetNavigationSuccess();
    function submitForm(){
        reset({
            title: 'Enviamos as instruções para seu e-mail',
            description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'greenPrimary'
            }
        });
    }
    
    return(
        <Screen
            canGoBack
        >
            <Text preset="headingLarge">Esqueci minha senha</Text>
            <Text preset="paragraphLarge" mt='s24'>Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>

            <TextInput
                label="Email"
                placeholder="Digite seu email"
                boxProps={{mt: 's24'}}
            />

            <Button title='Recuperar minha senha' mt='s24' onPress={submitForm}/>
        </Screen>
    )
}