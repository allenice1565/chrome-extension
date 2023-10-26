import { createSlice } from '@reduxjs/toolkit';
import persistentStorage from '@utils/persistent-storage.js';
import nanoid from '@utils/nanoid.js';

const initState = {
    websiteList: [],
};

//1.创建 Slice，每个业务一个 分片
const websiteSlice = createSlice({
    name: 'websiteSlice', // 这个名称似乎没啥用
    initialState: initState,
    //最重要的 reducers 属性，包括多个函数
    reducers: {
        setWebsiteList(state, action) {
            state.websiteList = action.payload;
        },
    },
});
export const setWebsiteList = websiteSlice.actions.setWebsiteList;
export const addWebsite = async (dispatch, data) => {
    const result = { ...data, id: nanoid() };
    const newWebsiteList = await persistentStorage.addWebsite(result);
    dispatch(setWebsiteList(newWebsiteList));
};
export const editWebsite = async (dispatch, data) => {
    const newWebsiteList = await persistentStorage.editWebsite(data);
    dispatch(setWebsiteList(newWebsiteList));
};
export const deleteWebsite = async (dispatch, id) => {
    const newWebsiteList = await persistentStorage.deleteWebsite({ id });
    dispatch(setWebsiteList(newWebsiteList));
};
export const deleteAllWebsite = async (dispatch) => {
    await persistentStorage.setWebsiteList([]);
    dispatch(setWebsiteList([]));
};
export default websiteSlice.reducer;
