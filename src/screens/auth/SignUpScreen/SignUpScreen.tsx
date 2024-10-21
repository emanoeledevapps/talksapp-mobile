import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Icon } from "../../../components/Icon/Icon";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>
export function SignUpScreen({navigation}: ScreenProps) {

    function submitForm(){
        navigation.navigate('SuccessScreen', {
            title: 'Sua conta foi criada com sucesso!',
            description: 'Agora é só fazer login na nossa plataforma',
            icon:{
                name: 'checkRound',
                color: 'success',
            }
        })
    }
    
    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb='s32'>Crie uma conta</Text>

            <TextInput
                label="Seu username"
                placeholder="@"
                placeholderTextColor='#ddd'
                boxProps={{ mb: 's20' }}
            />

            <TextInput
                label="Nome completo"
                placeholder="Digite seu nome completo"
                placeholderTextColor='#ddd'
                boxProps={{ mb: 's20' }}
            />

            <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                placeholderTextColor='#ddd'
                boxProps={{ mb: 's20' }}
            />

            <PasswordInput
                placeholder='Digite sua senha'
                placeholderTextColor='#ddd'
                label="Senha"
            />

            <Button
                title="Criar minha conta"
                onPress={submitForm}
                mt='s20'
            />
        </Screen>
    )
}