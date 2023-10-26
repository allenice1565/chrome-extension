import { createSlice } from '@reduxjs/toolkit';
import persistentStorage from '@utils/persistent-storage.js';
import nanoid from '@utils/nanoid.js';

const initState = {
    accountList: [],
};

//1.创建 Slice，每个业务一个 分片
const accountSlice = createSlice({
    name: 'accountSlice', // 这个名称似乎没啥用
    initialState: initState,
    //最重要的 reducers 属性，包括多个函数
    reducers: {
        setAccountList(state, action) {
            state.accountList = action.payload;
        },
    },
});

export const setAccountList = accountSlice.actions.setAccountList;
export const addAccount = async (dispatch, data) => {
    const result = { ...data, id: nanoid() };
    const newAccountList = await persistentStorage.addAccount(result);
    dispatch(setAccountList(newAccountList));
};
export const editAccount = async (dispatch, data) => {
    const newAccountList = await persistentStorage.editAccount(data);
    dispatch(setAccountList(newAccountList));
};
export const deleteAccount = async (dispatch, id) => {
    const newAccountList = await persistentStorage.deleteAccount({ id });
    dispatch(setAccountList(newAccountList));
};
export const deleteAllAccount = async (dispatch) => {
    await persistentStorage.setAccountList([]);
    dispatch(setAccountList([]));
};

export default accountSlice.reducer;
