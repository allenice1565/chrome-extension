console.log('开始运行');
// chrome.runtime.sendMessage({ key:'hello' });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log('req', request);
// });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                  "来自内容脚本：" + sender.tab.url :
                  "来自扩展程序");
    //   if (request.greeting == "您好"){}
        console.log('hello',request)
        sendResponse({farewell: "再见"});
    });