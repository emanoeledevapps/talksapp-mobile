import React from 'react';

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

import { TextInputProps, TextInput } from '@components';

export function FormTextInput<FormType extends FieldValues>({
    control,
    name,
    rules,
    ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <TextInput
                    value={field.value}
                    onChangeText={field.onChange}
                    errorMessage={error?.message}
                    {...textInputProps}
                />
            )}
        />
    );
}
