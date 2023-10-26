chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('内容脚本监听到消息', message)
    sendResponse({ farewell: '关闭' })
})
console.log('chrome-extension')
