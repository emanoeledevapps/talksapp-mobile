import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import { Text, Button, Screen, FormTextInput } from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps } from '@routes';

import { forgotPasswordSchema, ForgotPasswordSchemaType } from './forgotPasswordSchema';

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>){
    const {reset} = useResetNavigationSuccess();
    const {control, formState, handleSubmit} = useForm<ForgotPasswordSchemaType>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
        mode: 'onChange',
    });

    function submitForm(formData: ForgotPasswordSchemaType){
        console.log(formData);

        reset({
            title: 'Enviamos as instruções para seu e-mail',
            description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'greenPrimary',
            },
        });
    }

    return(
        <Screen
            canGoBack
        >
            <Text preset="headingLarge">Esqueci minha senha</Text>
            <Text preset="paragraphLarge" mt="s24">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>

            <FormTextInput
                control={control}
                name="email"
                label="Email"
                placeholder="Digite seu email"
                boxProps={{mt: 's24'}}
            />

            <Button
                title="Recuperar minha senha"
                mt="s24"
                disabled={!formState.isValid}
                onPress={handleSubmit(submitForm)}
            />
        </Screen>
    );
}
