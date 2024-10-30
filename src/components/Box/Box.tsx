import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
    createBox,
    createRestyleComponent,
    spacing,
    SpacingProps,
    border,
    BorderProps,
    layout,
    LayoutProps,
    backgroundColor,
    BackgroundColorProps,
    spacingShorthand,
    SpacingShorthandProps,
} from '@shopify/restyle';

import { ThemeProps } from '@theme';

export const Box = createBox<ThemeProps>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps =
    BackgroundColorProps<ThemeProps> &
    SpacingProps<ThemeProps> &
    BorderProps<ThemeProps> &
    LayoutProps<ThemeProps> &
    SpacingShorthandProps<ThemeProps> &
    TouchableOpacityProps
;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, ThemeProps>(
    [spacing, backgroundColor, border, layout, spacingShorthand],
    TouchableOpacity
);
