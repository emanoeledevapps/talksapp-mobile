import React from 'react';

import { Post } from '@models';

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components';


type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>;

export function PostActions({ commentCount, favoriteCount, reactionCount }: Props) {

    function likePost() {

    }

    return (
        <Box flexDirection="row" alignItems="center" mt="s16">
            <Item
                icon={{ default: 'heart', marked: 'heartFill' }}
                marked={true}
                onPress={likePost}
                count={reactionCount}
            />

            <Item
                icon={{ default: 'comment', marked: 'comment' }}
                marked={false}
                onPress={likePost}
                count={commentCount}
            />

            <Item
                icon={{ default: 'bookmark', marked: 'bookmarkFill' }}
                marked={false}
                onPress={likePost}
                count={favoriteCount}
            />
        </Box>
    );
}

interface ItemProps {
    onPress: () => void;
    marked: boolean;
    count: number;
    icon: {
        default: IconProps['name'];
        marked: IconProps['name'];
    };
}


function Item({ icon, marked, onPress, count }: ItemProps) {
    return (
        <TouchableOpacityBox
            onPress={onPress}
            flexDirection="row"
            alignItems="center"
            mr="s24"
        >
            <Icon
                name={marked ? icon.marked : icon.default}
                color={marked ? 'marked' : undefined}
            />
            {count > 0 && (
                <Text bold preset="paragraphSmall" ml="s4">{count}</Text>
            )}
        </TouchableOpacityBox>
    );
}
