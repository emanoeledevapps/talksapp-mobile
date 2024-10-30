import React, { useState } from 'react';

import { TextInput, TextInputProps, Icon } from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

    function toggleSecureText() {
        setIsSecureTextEntry(prev => !prev);
    }

    return (
        <TextInput
            secureTextEntry={isSecureTextEntry}
            {...props}
            RightComponent={
                <Icon
                    color="gray2"
                    name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
                    onPress={toggleSecureText}
                />
            }
        />
    );
}
