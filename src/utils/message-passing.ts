export default async function sendMsg(type: string, data: any) {
    return await chrome.runtime.sendMessage({ [type]: data });
}
