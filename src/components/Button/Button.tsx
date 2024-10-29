import React from 'react';
import { ThemeColors } from '@theme';
import { TouchableOpacityBox, TouchableOpacityBoxProps, ActivityIndicator, Text } from '@components';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonUI{
    container: TouchableOpacityBoxProps;
    content: ThemeColors;
}

interface ButtonProps extends TouchableOpacityBoxProps{
    title: string;
    loading?: boolean;
    preset?: ButtonPreset;
    disabled?: boolean
}

const buttonPresets: Record<ButtonPreset, {default: ButtonUI, disabled: ButtonUI}> = {
    primary:{
        default:{
            container:{
                backgroundColor: 'primary',
            },
            content: 'primaryContrast'
        },
        disabled:{
            container:{
                backgroundColor: 'gray4',
            },
            content: 'gray2'
        }
    },
    outline:{
        default:{
            container:{
                borderWidth: 1,
                borderColor: 'primary',
            },
            content: 'primary'
        },
        disabled:{
            container:{
                borderWidth: 1,
                borderColor: 'gray4',
            },
            content: 'gray2'
        }
    }
}

export function Button({
    title, 
    loading, 
    preset = 'primary',
    disabled,
    ...touchableOpacityBoxProps
}: ButtonProps){
    const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default']

    return(
        <TouchableOpacityBox
            disabled={disabled || loading}
            height={50}
            borderRadius='s16'
            alignItems='center'
            justifyContent='center'
            {...buttonPreset.container}
            {...touchableOpacityBoxProps}
        >
            {loading ? (
                <ActivityIndicator color={buttonPreset.content}/>
            ) : (
                <Text 
                    preset='paragraphMedium' 
                    bold
                    color={buttonPreset.content}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacityBox>
    );
}