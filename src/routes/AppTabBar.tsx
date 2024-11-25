import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { AppTabBottomTabParamList, mapTapScreenToProps } from '@routes';

export function AppTabBar({ state, navigation }: BottomTabBarProps) {
    return (
        <Box flexDirection="row">
            {state.routes.map((route, index) => {
                const tabData = mapTapScreenToProps[route.name as keyof AppTabBottomTabParamList];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                    });
                };

                return (
                    <TouchableOpacityBox
                        onPress={onPress}
                        onLongPress={onLongPress}
                        alignItems="center"
                        flex={1}
                    >
                        <Icon 
                            name={isFocused ? tabData?.icon.focused : tabData.icon.unfocused} 
                            color={isFocused ? 'primary' : 'backgroundContrast'}
                        />
                        <Text 
                            preset="paragraphCaption"
                            color={isFocused ? 'primary' : 'backgroundContrast'}
                            semiBold
                        >
                            {tabData?.label}
                        </Text>
                    </TouchableOpacityBox>
                );
            })}
        </Box>
    );
  }
