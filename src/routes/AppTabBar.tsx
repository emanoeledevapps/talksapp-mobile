import React from 'react';
import { ViewStyle } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppTabBottomTabParamList, mapTapScreenToProps } from '@routes';

const $shadowProps: ViewStyle = {
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: -3}
}

export function AppTabBar({ state, navigation }: BottomTabBarProps) {
    const {bottom} = useAppSafeArea();

    return (
        <Box
            flexDirection="row"
            pt="s12"
            style={[{paddingBottom: bottom}, $shadowProps]}
            bg="background"
        >
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
                        activeOpacity={1}
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
                            mt='s4'
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
