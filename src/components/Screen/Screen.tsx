import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ScrollViewContainer, ViewContainer } from '@components';
import { useAppSafeArea } from '@hooks';
import { useAppTheme } from '@hooks';

import { Box, BoxProps, TouchableOpacityBox } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';


interface ScreenProps extends BoxProps{
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
}

export function Screen({ children, canGoBack = false, scrollable = false, style }: ScreenProps) {
    const { top, bottom } = useAppSafeArea();
    const {colors} = useAppTheme();
    const navigation = useNavigation();

    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{flex: 1}}
        >
            <Container backgroundColor={colors.background}>
                <Box
                    paddingHorizontal="s24"
                    paddingBottom="s24"
                    style={[{ paddingTop: top, paddingBottom: bottom }, style]}
                    backgroundColor="grayWhite"
                >
                    {canGoBack && (
                        <TouchableOpacityBox
                            mb="s24"
                            flexDirection="row"
                            onPress={navigation.goBack}
                        >
                            <Icon name="arrowLeft" color="primary" />
                            <Text ml="s8" preset="paragraphMedium" semiBold>Voltar</Text>
                        </TouchableOpacityBox>
                    )}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    );
}
