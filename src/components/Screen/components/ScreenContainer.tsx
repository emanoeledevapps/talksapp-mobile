import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";

interface Props{
    children: React.ReactNode;
    backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props){
    return(
        <ScrollView 
            style={{backgroundColor, flex: 1}}
            keyboardShouldPersistTaps='handled'
        >
            {children}
        </ScrollView>
    )
}

export function ViewContainer({children, backgroundColor}: Props){
    const {height} = useWindowDimensions();

    return(
        <View style={{backgroundColor, flex: 1}}>
            {children}
        </View>
    )
}