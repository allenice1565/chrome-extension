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
import { addWebsite, editWebsite } from '@store/website.js';
import { cloneDeep } from 'lodash';

export default function AddWebsiteModal({
    opened,
    closeWebsiteModal,
    editValue,
    operation,
}: any) {
    const dispatch = useDispatch();
    const accountList = useSelector(
        (state: any) => state.accountTable.accountList,
    );
    const form = useForm({
        initialValues: {
            name: '',
            url: '',
            accountSelector: '',
            passwordSelector: '',
            submitSelector: '',
            account: [],
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
            onClose={closeWebsiteModal}
            title={title}
            closeOnEscape
        >
            <Box maw={300} mx="auto">
                <form
                    onSubmit={form.onSubmit(async (values) => {
                        const account = values.account.map((id) =>
                            accountList.find((item: any) => item.id === id),
                        );
                        if (operation === 'ADD') {
                            await addWebsite(dispatch, {
                                ...values,
                                account,
                                defaultAccount:
                                    account.length > 0 ? account[0] : null,
                            });
                        } else {
                            await editWebsite(dispatch, {
                                ...editValue,
                                ...values,
                                account,
                            });
                        }
                        closeWebsiteModal();
                        form.reset();
                    })}
                >
                    <TextInput
                        withAsterisk
                        label="页面名称"
                        placeholder="请输入页面名称"
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        withAsterisk
                        label="匹配URL"
                        placeholder="请输入需要匹配的URL"
                        {...form.getInputProps('url')}
                    />
                    <TextInput
                        withAsterisk
                        label="账号输入框CSS选择器"
                        placeholder="请输入账号CSS选择器"
                        {...form.getInputProps('accountSelector')}
                    />
                    <TextInput
                        withAsterisk
                        label="密码输入框CSS选择器"
                        placeholder="请输入密码CSS选择器"
                        {...form.getInputProps('passwordSelector')}
                    />
                    <TextInput
                        withAsterisk
                        label="提交按钮CSS选择器"
                        placeholder="请输入密码CSS选择器"
                        {...form.getInputProps('submitSelector')}
                    />

                    {/* <Checkbox mt="md" label="80账号" {...form.getInputProps('account', { type: 'checkbox' })} /> */}
                    <MultiSelect
                        data={accountList?.map((item: any) => ({
                            value: item.id,
                            label: item.name,
                        }))}
                        label="账号集"
                        placeholder="请选择与URL匹配的账号"
                        {...form.getInputProps('account')}
                    />
                    <Group position="right" mt="md">
                        <Button type="submit">确认</Button>
                    </Group>
                </form>
            </Box>
        </Modal>
    );
}
