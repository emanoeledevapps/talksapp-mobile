import React from "react";
import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaType } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {
    const { control, formState, handleSubmit } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange'
    });

    function submiForm(formData: LoginSchemaType) {
        console.log(formData);
    }

    function handleForgotPassword() {
        navigation.navigate('ForgotPasswordScreen');
    }

    return (
        <Screen>
            <Text preset='headingLarge' mb='s8'>Olá!</Text>
            <Text preset='paragraphLarge' mb='s40'>Digite seu e-mail e senha para entrar</Text>

            <FormTextInput
                control={control}
                name="email"
                label='E-mail'
                placeholder='Digite seu email'
                placeholderTextColor='#ddd'
                boxProps={{ mb: 's20' }}
            />

            <FormPasswordInput
                control={control}
                name="password"
                label='Senha'
                placeholder='Digite sua senha'
                placeholderTextColor='#ddd'
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