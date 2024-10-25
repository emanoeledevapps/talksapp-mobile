import React from "react";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useForm, Controller } from 'react-hook-form';
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";

type LoginFormType = {
    email: string;
    password: string;
}
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {
    const { control, formState, handleSubmit } = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange'
    });

    function submiForm({ email, password }: LoginFormType) {
        console.log(email);
    }

    function handleForgotPassword() {
        navigation.navigate('ForgotPasswordScreen');
    }

    return (
        <Screen>
            <Text preset='headingLarge' mb='s8'>Olá!</Text>
            <Text preset='paragraphLarge' mb='s40'>Digite seu e-mail e senha para entrar</Text>

            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'E-mail obrigatório',
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'E-mail inválido'
                    }
                }}
                render={({ field, fieldState: {error} }) => (
                    <TextInput
                        value={field.value}
                        onChangeText={field.onChange}
                        errorMessage={error?.message}
                        label='E-mail'
                        placeholder='Digite seu email'
                        placeholderTextColor='#ddd'
                        boxProps={{ mb: 's20' }}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                rules={{
                    required: 'Senha obrigatória',
                    minLength: {
                        value: 6,
                        message: 'Sua senha deve conter 6 caracteres'
                    }
                }}
                render={({field, fieldState: {error}}) => (
                    <PasswordInput
                        value={field.value}
                        onChangeText={field.onChange}
                        errorMessage={error?.message}
                        label='Senha'
                        placeholder='Digite sua senha'
                        placeholderTextColor='#ddd'
                        boxProps={{ mb: 's4' }}
                    />
                )}
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
                title='Entrar'
                preset='primary'
                my='s20'
                onPress={handleSubmit(submiForm)}
                disabled={!formState.isValid}
            />

            <Button
                title='Cria uma conta'
                preset='outline'
                onPress={() => {
                    navigation.navigate('SignUpScreen')
                }}
            />
        </Screen>
    )
}