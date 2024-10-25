import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";
import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, ForgotPasswordSchemaType } from "./forgotPasswordSchema";
import { FormTextInput } from "../../../components/Form/FormTextInput";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>
export function ForgotPasswordScreen({navigation}: ScreenProps){
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

            <FormTextInput
                control={control}
                name="email"
                label="Email"
                placeholder="Digite seu email"
                boxProps={{mt: 's24'}}
            />

            <Button 
                title='Recuperar minha senha' 
                mt='s24' 
                disabled={!formState.isValid}
                onPress={handleSubmit(submitForm)}
            />
        </Screen>
    )
}