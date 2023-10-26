import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Navbar, Text, Button, AppShell, Header, NavLink } from '@mantine/core';
import WebsiteTable from './components/website-table';
import AccountTable from './components/account-table';
import { useDisclosure } from '@mantine/hooks';
import AddWebsiteModal from './components/add-website-modal';
import AddAccountModal from './components/add-account-modal';
import { Provider } from 'react-redux';
import store from '@store/index';
import { deleteAllWebsite, setWebsiteList } from '@store/website.js';
import { deleteAllAccount, setAccountList } from '@store/account.js';
import '@assets/css/reset.css';

function BackendManagement() {
    const [openedAddWebsite, { open: openAddWebsite, close: closeAddWebsite }] =
        useDisclosure(false);
    const [openedAddAccount, { open: openAddAccount, close: closeAddAccount }] =
        useDisclosure(false);

    const [operation, setOperation] = useState('ADD');
    const [editValue, setEditValue]: any[] = useState();
    const [active, setActive] = useState('websiteManagement');
    const editWebsiteClick = (data: any) => {
        setOperation('EDIT');
        setEditValue(data);
        openAddWebsite();
    };
    const closeWebsiteModal = () => {
        closeAddWebsite();
        setEditValue(undefined);
    };
    const editAccountClick = (data: any) => {
        setOperation('EDIT');
        setEditValue(data);
        openAddAccount();
    };
    const closeAccountModal = () => {
        closeAddAccount();
        setEditValue(undefined);
    };
    return (
        <Provider store={store}>
            <AppShell
                padding="md"
                navbar={
                    <Navbar width={{ base: 300 }} p="xs">
                        <NavLink
                            label="网站管理"
                            active={'websiteManagement' === active}
                            onClick={() => setActive('websiteManagement')}
                        ></NavLink>
                        <NavLink
                            label="账号管理"
                            active={'accountManagement' === active}
                            onClick={() => setActive('accountManagement')}
                        ></NavLink>
                    </Navbar>
                }
                header={
                    <Header
                        height={60}
                        p="xs"
                        style={{
                            fontSize: '22px',
                            fontWeight: 700,
                            textAlign: 'center',
                        }}
                    >
                        <span>开发助手后台管理</span>
                    </Header>
                }
            >
                <Button
                    style={{ marginBottom: '8px', marginRight: '8px' }}
                    onClick={() => {
                        if (active === 'websiteManagement') {
                            setOperation('ADD');
                            setEditValue({});
                            openAddWebsite();
                        } else if (active === 'accountManagement') {
                            setOperation('ADD');
                            setEditValue({});
                            openAddAccount();
                        }
                    }}
                >
                    新增
                </Button>
                <Button
                    style={{ marginBottom: '8px' }}
                    color="red"
                    onClick={() => {
                        if (active === 'websiteManagement') {
                            deleteAllWebsite(store.dispatch);
                        } else if (active === 'accountManagement') {
                            deleteAllAccount(store.dispatch);
                        }
                    }}
                >
                    全部删除
                </Button>
                {active === 'websiteManagement' && (
                    <>
                        <WebsiteTable
                            editWebsiteClick={editWebsiteClick}
                        ></WebsiteTable>
                        {openedAddWebsite && (
                            <AddWebsiteModal
                                opened={openedAddWebsite}
                                closeWebsiteModal={closeWebsiteModal}
                                operation={operation}
                                editValue={editValue}
                            ></AddWebsiteModal>
                        )}
                    </>
                )}
                {active === 'accountManagement' && (
                    <>
                        <AccountTable
                            editAccountClick={editAccountClick}
                        ></AccountTable>
                        {openedAddAccount && (
                            <AddAccountModal
                                opened={openedAddAccount}
                                closeAccountModal={closeAccountModal}
                                operation={operation}
                                editValue={editValue}
                            ></AddAccountModal>
                        )}
                    </>
                )}
            </AppShell>
        </Provider>
    );
}

const div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('id', 'developerAssistant');

const root = createRoot(div);
root.render(<BackendManagement></BackendManagement>);
