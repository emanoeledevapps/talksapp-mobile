import React from 'react';
import { ActivityIndicatorProps, ActivityIndicator as RNActivityIndicator } from 'react-native';

import { useTheme } from '@shopify/restyle';

import { ThemeColors, ThemeProps } from '@theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
    color: ThemeColors;
}

export function ActivityIndicator({color, ...activityIndicatorProps}: Props){
    const {colors} = useTheme<ThemeProps>();

    return <RNActivityIndicator
        color={colors[color]}
        {...activityIndicatorProps}
    />;
}
