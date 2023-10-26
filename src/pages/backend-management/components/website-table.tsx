import React, { useState } from 'react';
import { Table, Badge } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useSelector, useDispatch } from 'react-redux';
import { setWebsiteList, deleteWebsite } from '@store/website.js';
import account, { setAccountList } from '@store/account.js';
import persistentStorage from '@utils/persistent-storage.js';

export default function WebsiteTable({ editWebsiteClick }: any) {
    const websiteList = useSelector(
        (state: any) => state.websiteTable.websiteList,
    );
    const accountList = useSelector(
        (state: any) => state.accountTable.accountList,
    );
    const dispatch = useDispatch();
    const [init, setInit] = useState(false);
    !init &&
        persistentStorage.getWebsiteList().then((list) => {
            dispatch(setWebsiteList(list));
            setInit(true);
        });
    !init &&
        persistentStorage.getAccountList().then((list) => {
            dispatch(setAccountList(list));
            setInit(true);
        });
    const ths = (
        <tr>
            <th>序号</th>
            <th>ID</th>
            <th>名称</th>
            <th>URL</th>
            <th>账号</th>
            <th>操作</th>
        </tr>
    );
    console.log('websiteList', websiteList);
    const rows = websiteList.map((element: any, index: number) => (
        <tr key={element.id}>
            <td>{index + 1}</td>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.url}</td>
            <td>
                {Array.isArray(element.account) &&
                    element.account.length > 0 && (
                        <Badge
                            title={
                                (element.defaultAccount || element.account[0])
                                    ?.account
                            }
                        >
                            {(element.defaultAccount || element.account[0])
                                ?.name ||
                                (element.defaultAccount || element.account[0])
                                    ?.account}
                        </Badge>
                    )}
            </td>
            <td
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <IconEdit
                    color="#999"
                    className="websiteTable-operation--edit"
                    style={{ marginRight: '6px', cursor: 'pointer' }}
                    onClick={() => editWebsiteClick(element)}
                />
                <IconTrash
                    color="#999"
                    className="websiteTable-operation--delete"
                    style={{ cursor: 'pointer' }}
                    onClick={() => deleteWebsite(dispatch, element.id)}
                />
            </td>
        </tr>
    ));

    return (
        <>
            <Table striped highlightOnHover withBorder withColumnBorders>
                <thead>{ths}</thead>
                <tbody>{rows}</tbody>
            </Table>
        </>
    );
}
