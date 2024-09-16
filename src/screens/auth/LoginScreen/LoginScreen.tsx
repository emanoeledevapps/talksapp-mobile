import React from "react";
import { Box } from "../../../components/Box/Box";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Icon } from "../../../components/Icon/Icon";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";

export function LoginScreen() {
    return (
        <Screen>
            <Text preset='headingLarge' mb='s8'>Olá!</Text>
            <Text preset='paragraphLarge' mb='s40'>Digite seu e-mail e senha para entrar</Text>

            <TextInput
                label='E-mail'
                placeholder='Digite seu email'
                placeholderTextColor='#ddd'
                boxProps={{ mb: 's20' }}
            />

            <TextInput
                label='Senha'
                placeholder='Digite sua senha'
                placeholderTextColor='#ddd'
                errorMessage='Senha incorreta'
                RightComponent={<Icon name='eyeOn' color='grayBlack' />}
                boxProps={{ mb: 's40' }}
            />

            <Button
                title='Entrar'
                preset='primary'
                mb='s20'
            />

            <Button
                title='Cria uma conta'
                preset='outline'
            />
        </Screen>
    )
}