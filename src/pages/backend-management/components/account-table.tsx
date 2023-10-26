import React, { useState } from 'react';
import { Table, Badge } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccountList, deleteAccount } from '@store/account.js';
import persistentStorage from '@utils/persistent-storage.js';

export default function AccountTable({ editAccountClick }: any) {
    const accountList = useSelector(
        (state: any) => state.accountTable.accountList,
    );
    const dispatch = useDispatch();
    const [init, setInit] = useState(false);
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
            <th>账号</th>
            <th>密码</th>
            <th>操作</th>
        </tr>
    );

    const rows = accountList.map((element: any, index: number) => (
        <tr key={element.id}>
            <td>{index + 1}</td>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.account}</td>
            <td>{element.password}</td>
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
                    className="accountTable-operation--edit"
                    style={{ marginRight: '6px', cursor: 'pointer' }}
                    onClick={() => editAccountClick(element)}
                />
                <IconTrash
                    color="#999"
                    className="accountTable-operation--delete"
                    style={{ cursor: 'pointer' }}
                    onClick={() => deleteAccount(dispatch, element.id)}
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
