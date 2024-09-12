import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text/Text';
import { useTheme } from '@shopify/restyle';
import { ThemeProps } from '../../theme/theme';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps{
    title: string;
    loading?: boolean;
}

export function Button({title, loading, ...touchableOpacityBoxProps}: ButtonProps){
    const {colors} = useTheme<ThemeProps>();

    return(
        <TouchableOpacityBox
            backgroundColor='buttonPrimary'
            height={50}
            borderRadius='s16'
            alignItems='center'
            justifyContent='center'
            {...touchableOpacityBoxProps}
        >
            <Text preset='paragraphMedium' bold>{title}</Text>
        </TouchableOpacityBox>
    );
}