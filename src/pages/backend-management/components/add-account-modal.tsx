import {
    TextInput,
    Checkbox,
    Button,
    Group,
    Box,
    MultiSelect,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { addAccount, editAccount } from '@store/account.js';
import { cloneDeep } from 'lodash';

export default function AddAccountModal({
    opened,
    closeAccountModal,
    editValue,
    operation,
}: any) {
    const dispatch = useDispatch();
    const form = useForm({
        initialValues: {
            name: '',
            account: '',
            password: '',
        },
        validate: {
            // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    const [init, setInit] = useState(false);
    if (!init) {
        if (editValue?.id) {
            form.setValues(cloneDeep(editValue || {}));
        }
        setInit(true);
    }
    const title = operation === 'ADD' ? '新增' : '编辑';
    return (
        <Modal
            opened={opened}
            onClose={closeAccountModal}
            title={title}
            closeOnEscape
        >
            <Box maw={300} mx="auto">
                <form
                    onSubmit={form.onSubmit(async (values) => {
                        if (operation === 'ADD') {
                            await addAccount(dispatch, values);
                        } else {
                            await editAccount(dispatch, {
                                ...editValue,
                                ...values,
                            });
                        }
                        closeAccountModal();
                        form.reset();
                    })}
                >
                    <TextInput
                        withAsterisk
                        label="简称"
                        placeholder="请输入账户简称"
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        withAsterisk
                        label="账户"
                        placeholder="请输入账户"
                        {...form.getInputProps('account')}
                    />
                    <TextInput
                        withAsterisk
                        label="密码"
                        placeholder="密码"
                        {...form.getInputProps('password')}
                    />
                    <Group position="right" mt="md">
                        <Button type="submit">确认</Button>
                    </Group>
                </form>
            </Box>
        </Modal>
    );
}
