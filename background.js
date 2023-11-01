/** 处理状态刷新 */
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (!changeInfo.url) return
    const [currentTab] = await chrome.tabs.query({
        active: true,
        status: 'complete',
    })
    if (!currentTab) return
    try {
        const response = await chrome.tabs.sendMessage(tabId, {
            text: '这是background.js向content.js发送的一条信息',
        })
        console.log('background收到响应', response)
    } catch (e) {
        console.log(e)
    }
})

/** 处理tab跳转 */
chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const [currentTab] = await chrome.tabs.query({
        active: true,
        status: 'complete',
    })
    if (!currentTab) return
    try {
        const response = await chrome.tabs.sendMessage(activeInfo.tabId, {
            text: 'onActivated事件已捕获',
        })
        console.log('onActivated事件已捕获收到响应', response)
    } catch (e) {
        console.log(e)
    }
})
