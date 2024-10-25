import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";
import { useForm, Controller } from 'react-hook-form';
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";

type SignUpFormType = {
    username: string;
    fullName: string;
    email: string;
    password: string;
}
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>
export function SignUpScreen({ navigation }: ScreenProps) {
    const { reset } = useResetNavigationSuccess();
    const { control, formState, handleSubmit } = useForm<SignUpFormType>({
        defaultValues: {
            email: '',
            fullName: '',
            password: '',
            username: '',
        },
        mode: 'onChange',
    })

    function submitForm(formData: SignUpFormType) {
        console.log(formData);

        // reset({
        //     title: 'Sua conta foi criada com sucesso!',
        //     description: 'Agora é só fazer login na nossa plataforma',
        //     icon:{
        //         name: 'checkRound',
        //         color: 'success',
        //     }
        // });
    }

    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb='s32'>Crie uma conta</Text>

            <FormTextInput
                control={control}
                name='username'
                rules={{
                    required: 'Nome de usuário obrigatório'
                }}
                label="Seu username"
                placeholder="@"
                placeholderTextColor='#ddd'
                boxProps={{ mb: 's20' }}
            />

            <FormTextInput
                control={control}
                name="fullName"
                rules={{
                    required: 'Nome obrigatório'
                }}
                label="Nome completo"
                placeholder="Digite seu nome completo"
                placeholderTextColor='#ddd'
                boxProps={{ mb: 's20' }}
            />

            <FormTextInput
                control={control}
                name="email"
                rules={{
                    required: 'E-mail obrigatório',
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'E-mail inválido'
                    }
                }}
                label='E-mail'
                placeholder='Digite seu email'
                placeholderTextColor='#ddd'
                boxProps={{ mb: 's20' }}
            />

            <FormPasswordInput
                control={control}
                name="password"
                rules={{
                    required: 'Senha obrigatória',
                    minLength: {
                        value: 6,
                        message: 'Sua senha deve conter 6 caracteres'
                    }
                }}
                label='Senha'
                placeholder='Digite sua senha'
                placeholderTextColor='#ddd'
                boxProps={{ mb: 's4' }}
            />

            <Button
                title="Criar minha conta"
                disabled={!formState.isValid}
                onPress={handleSubmit(submitForm)}
                mt='s20'
            />
        </Screen>
    )
}