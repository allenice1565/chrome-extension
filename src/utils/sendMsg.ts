export default async function sendMsg(api: string, data: any) {
    return await chrome.runtime.sendMessage({ api, data })
}
