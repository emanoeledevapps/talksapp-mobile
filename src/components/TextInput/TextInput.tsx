import React, { useRef } from "react";
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native";
import { Box, BoxProps } from "../Box/Box";
import { $fontFamily, $fontSizes, Text } from "../Text/Text";

interface TextInputProps extends RNTextInputProps {
    label?: string;
    errorMessage?: string;
    RightComponent?: React.ReactElement;
    boxProps?: BoxProps;
}

export function TextInput({ label, errorMessage, RightComponent, boxProps, ...props }: TextInputProps) {
    const inputRef = useRef<RNTextInput>(null);

    function focusInput() {
        inputRef.current?.focus();
    }

    return (
        <Box {...boxProps}>
            <Pressable onPress={focusInput}>
                {label && (
                    <Text
                        preset="paragraphMedium"
                        mb='s4'
                    >
                        {label}
                    </Text>
                )}
                <Box
                    borderWidth={errorMessage ? 2 : 1}
                    borderColor={errorMessage ? "error" : "gray4"}
                    p='s16'
                    borderRadius="s12"
                    flexDirection="row"
                    alignItems="center"
                >
                    <RNTextInput
                        ref={inputRef}
                        style={{
                            padding: 0,
                            fontFamily: $fontFamily.regular,
                            flexGrow: 1,
                            flexShrink: 1,
                            ...$fontSizes.paragraphMedium
                        }}
                        {...props}
                    />

                    {RightComponent && (
                        <Box ml='s16' justifyContent="center">
                            {RightComponent}
                        </Box>
                    )}
                </Box>

                {errorMessage && (
                    <Text color="error" preset="paragraphSmall" bold>
                        {errorMessage}
                    </Text>
                )}
            </Pressable>
        </Box>
    )
}