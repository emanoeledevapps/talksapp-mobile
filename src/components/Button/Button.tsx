import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text/Text';
import { useTheme } from '@shopify/restyle';
import { ThemeColors, ThemeProps } from '../../theme/theme';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonUI{
    container: TouchableOpacityBoxProps;
    content: ThemeColors;
}

interface ButtonProps extends TouchableOpacityBoxProps{
    title: string;
    loading?: boolean;
    preset?: ButtonPreset;
}

const buttonPresets: Record<ButtonPreset, ButtonUI> = {
    primary:{
        container:{
            backgroundColor: 'primary',
        },
        content: 'primaryContrast'
    },
    outline:{
        container:{
            borderWidth: 1,
            borderColor: 'primary',
        },
        content: 'primary'
    }
}

export function Button({
    title, 
    loading, 
    preset = 'primary',
    ...touchableOpacityBoxProps
}: ButtonProps){
    const buttonPreset = buttonPresets[preset]

    return(
        <TouchableOpacityBox
            height={50}
            borderRadius='s16'
            alignItems='center'
            justifyContent='center'
            {...buttonPreset.container}
            {...touchableOpacityBoxProps}
        >
            <Text 
                preset='paragraphMedium' 
                bold
                color={buttonPreset.content}
            >
                {title}
            </Text>
        </TouchableOpacityBox>
    );
}