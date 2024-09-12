import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView>
                <Text preset='headingLarge' bold italic>teste</Text>
               
                <Icon name='eyeOff' size={20} color='errorLight'/>
            </SafeAreaView>
        </ThemeProvider>
    );
}

export default App;