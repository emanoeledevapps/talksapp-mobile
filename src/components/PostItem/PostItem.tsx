import React from 'react';

import { Post } from '@models';

import { Box } from '@components';

import { PostHeader } from './components/PostHeader';
import { PostActions } from './components/PostIcons';
import { PostImage } from './components/PostImage';

interface Props{
    post: Post;
}
export function PostItem({post}: Props){

    return(
        <Box
            marginBottom="s20"
        >
            <PostHeader author={post.author}/>
            <PostImage imageURL={post.imageURL}/>
            <PostActions 
                commentCount={post.commentCount}
                favoriteCount={post.favoriteCount}
                reactionCount={post.reactionCount}
            />
        </Box>
    );
}
