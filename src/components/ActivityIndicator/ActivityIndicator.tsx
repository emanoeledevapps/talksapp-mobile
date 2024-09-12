import React from "react";
import { ActivityIndicatorProps, ActivityIndicator as RNActivityIndicator } from "react-native";
import { ThemeColors, ThemeProps } from "../../theme/theme";
import { useTheme } from "@shopify/restyle";

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
    color: ThemeColors;
}

export function ActivityIndicator({color, ...activityIndicatorProps}: Props){
    const {colors} = useTheme<ThemeProps>();

    return <RNActivityIndicator 
        color={colors[color]}
        {...activityIndicatorProps}
    />
}
