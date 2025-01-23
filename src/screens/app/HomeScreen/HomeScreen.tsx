import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Post, postService } from '@models';
import { AppTabScreenProps } from 'src/routes/navigationType';

import { Screen, PostItem } from '@components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>){
    const [postList, setPostList] = useState<Post[]>([]);

    useEffect(() => {
        postService.getList().then(list => setPostList(list));
    }, []);

    function renderPostItem({item}: ListRenderItemInfo<Post>){
        return(
            <PostItem post={item}/>
        );
    }
    return(
        <Screen style={{paddingBottom: 0, paddingTop: 0, paddingHorizontal: 0}}>
            <FlatList
                data={postList}
                keyExtractor={(item) => item.id}
                renderItem={renderPostItem}
            />
        </Screen>
    );
}
