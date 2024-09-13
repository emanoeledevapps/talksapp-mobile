import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Icon } from './src/components/Icon/Icon';
import { TextInput } from './src/components/TextInput/TextInput';

function App(): React.JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
                <Text preset='headingLarge' mb='s8'>Olá!</Text>
                <Text preset='paragraphLarge' mb='s40'>Digite seu e-mail e senha para entrar</Text>

                <TextInput
                    label='E-mail'
                    placeholder='Digite seu email'
                    placeholderTextColor='#ddd'
                    boxProps={{mb: 's20'}}
                />

                <TextInput
                    label='Senha'
                    placeholder='Digite sua senha'
                    placeholderTextColor='#ddd'
                    errorMessage='Senha incorreta'
                    RightComponent={<Icon name='eyeOn' color='grayBlack'/>}
                    boxProps={{mb: 's40'}}
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
            </SafeAreaView>
        </ThemeProvider>
    );
}

export default App;