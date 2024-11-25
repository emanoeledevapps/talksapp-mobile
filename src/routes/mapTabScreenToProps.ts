import { IconProps } from '@components';
import { AppTabBottomTabParamList } from '@routes';

export const mapTapScreenToProps: Record<
    keyof AppTabBottomTabParamList,
    {
        label: string,
        icon: {
            focused: IconProps['name'],
            unfocused: IconProps['name'],
        }
    }
> = {
    HomeScreen: {
        label: 'Início',
        icon: {
            focused: 'homeFill',
            unfocused: 'home',
        },
    },
    NewPostScreen: {
        label: 'Novo',
        icon: {
            focused: 'newPost',
            unfocused: 'newPost',
        },
    },
    FavoriteScreen: {
        label: 'Favoritos',
        icon: {
            focused: 'bookmarkFill',
            unfocused: 'bookmark',
        },
    },
    MyProfileScreen: {
        label: 'Perfil',
        icon: {
            focused: 'profileFill',
            unfocused: 'profile',
        },
    },
};