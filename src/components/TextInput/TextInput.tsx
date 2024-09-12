import React, { useRef } from "react";
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native";
import { Box } from "../Box/Box";
import { $fontFamily, $fontSizes, Text } from "../Text/Text";

interface TextInputProps extends RNTextInputProps {
    label?: string;
    errorMessage?: string;
}

export function TextInput({ label, errorMessage, ...props }: TextInputProps) {
    const inputRef = useRef<RNTextInput>(null);

    function focusInput() {
        inputRef.current?.focus();
    }

    return (
        <Pressable onPress={focusInput}>
            <Box>
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
                >
                    <RNTextInput
                        ref={inputRef}
                        style={{
                            padding: 0,
                            fontFamily: $fontFamily.regular,
                            ...$fontSizes.paragraphMedium
                        }}
                        {...props}
                    />
                </Box>

                {errorMessage && (
                    <Text color="error" preset="paragraphSmall" bold>
                        {errorMessage}
                    </Text>
                )}
            </Box>
        </Pressable>
    )
}