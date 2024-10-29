import React from "react";
import { EyeOnIcon } from "../../assets/icons/EyeOnIcon";
import { EyeOffIcon } from "../../assets/icons/EyeOffIcon";
import { ThemeColors } from "@theme";
import { useAppTheme } from "@hooks";
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";
import { BellIcon } from "../../assets/icons/BellIcon";
import { BellOnIcon } from "../../assets/icons/BellOnIcon";
import { BookmarkFillIcon } from "../../assets/icons/BookmarkFillIcon";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";
import { CameraIcon } from "../../assets/icons/CameraIcon";
import { ChatIcon } from "../../assets/icons/ChatIcon";
import { ChatOnIcon } from "../../assets/icons/ChatOnIcon";
import { CheckIcon } from "../../assets/icons/CheckIcon";
import { ChevronRightIcon } from "../../assets/icons/ChevronRightIcon";
import { CommentIcon } from "../../assets/icons/CommentIcon";
import { FlashOffIcon } from "../../assets/icons/FlashOffIcon";
import { FlashOnIcon } from "../../assets/icons/FlashOnIcon";
import { HeartFillIcon } from "../../assets/icons/HeartFillIcon";
import { HeartIcon } from "../../assets/icons/HeartIcon";
import { HomeFillIcon } from "../../assets/icons/HomeFillIcon";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import { MessageIcon } from "../../assets/icons/MessageIcon";
import { NewPostIcon } from "../../assets/icons/NewPostIcon";
import { ProfileFillIcon } from "../../assets/icons/ProfileFillIcon";
import { ProfileIcon } from "../../assets/icons/ProfileIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { Pressable } from "react-native";
import { CheckRoundIcon } from "../../assets/icons/CheckRoundIcon";
import { ErrorRoundIcon } from "../../assets/icons/ErrorRoundIcon";
import { MessageRoundIcon } from "../../assets/icons/MessageRoundIcon";

export interface IconBase {
    size?: number;
    color?: string;
}

export interface IconProps {
    name: IconNames;
    size?: number;
    color: ThemeColors;
    onPress?: () => void;
}

export function Icon({ name, size, color = 'backgroundContrast', onPress }: IconProps) {
    const SVGIcon = icons[name];
    const { colors } = useAppTheme();

    if (onPress) {
        return(
            <Pressable hitSlop={10} onPress={onPress}>
                <SVGIcon size={size} color={colors[color]} />
            </Pressable>
        )
    } else {
        return <SVGIcon size={size} color={colors[color]} />
    }
}

const icons = {
    arrowLeft: ArrowLeftIcon,
    arrowRight: ArrowRightIcon,
    bell: BellIcon,
    bellOn: BellOnIcon,
    bookmark: BookmarkIcon,
    bookmarkFill: BookmarkFillIcon,
    camera: CameraIcon,
    chat: ChatIcon,
    chatOn: ChatOnIcon,
    check: CheckIcon,
    checkRound: CheckRoundIcon,
    comment: CommentIcon,
    chevronRight: ChevronRightIcon,
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon,
    errorRound: ErrorRoundIcon,
    flashOn: FlashOnIcon,
    flashOff: FlashOffIcon,
    heart: HeartIcon,
    heartFill: HeartFillIcon,
    home: HomeIcon,
    homeFill: HomeFillIcon,
    message: MessageIcon,
    messageRound: MessageRoundIcon,
    newPost: NewPostIcon,
    profile: ProfileIcon,
    profileFill: ProfileFillIcon,
    search: SearchIcon,
    settings: SettingsIcon,
    trash: TrashIcon,
}

type IconTypes = typeof icons;
type IconNames = keyof IconTypes;