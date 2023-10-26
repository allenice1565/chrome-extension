// chrome.runtime.sendMessage({ key:'hello' })
    // try{
    // chrome.tabs.query({active: true,currentWindow: true}, tabs => {
    //     let tab = tabs[0];
    //     chrome.tabs.sendMessage(tab.id, "start");
    // });}catch(e){}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log('req', request);
// });
// setInterval(()=>{
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {greeting: "您好"}, function(response) {
//                 console.log(response.farewell);
//         });
        
//       });
//       console.log(99)
// },1000)
setInterval(()=>{
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        // if (changeInfo.url) {
            // matchWebsite(changeInfo, tabId);
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, changeInfo, function(response) {
                    console.log(response.farewell);
                })
            })
    })
        // });
},1000)