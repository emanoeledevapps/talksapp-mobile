import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Text, Button, Screen, FormTextInput, FormPasswordInput } from '@components';
import { AuthScreenProps } from '@routes';

import { loginSchema, LoginSchemaType } from './loginSchema';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
    const { control, formState, handleSubmit } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    function submiForm(formData: LoginSchemaType) {
        console.log(formData);
    }

    function handleForgotPassword() {
        navigation.navigate('ForgotPasswordScreen');
    }

    return (
        <Screen>
            <Text preset="headingLarge" mb="s8">Olá!</Text>
            <Text preset="paragraphLarge" mb="s40">Digite seu e-mail e senha para entrar</Text>

            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu email"
                placeholderTextColor="#ddd"
                boxProps={{ mb: 's20' }}
            />

            <FormPasswordInput
                control={control}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                placeholderTextColor="#ddd"
                boxProps={{ mb: 's4' }}
            />

            <Text
                preset="paragraphSmall"
                color="primary"
                bold
                onPress={handleForgotPassword}
            >
                Esqueci minha senha
            </Text>

            <Button
                title="Entrar"
                preset="primary"
                my="s20"
                onPress={handleSubmit(submiForm)}
                disabled={!formState.isValid}
            />

            <Button
                title="Cria uma conta"
                preset="outline"
                onPress={() => {
                    navigation.navigate('SignUpScreen');
                }}
            />
        </Screen>
    );
}
