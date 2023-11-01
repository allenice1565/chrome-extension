type IDBTable = 'accountTable' | 'websiteTable'

const DBTableMap: Record<IDBTable, IDBTable> = {
    accountTable: 'accountTable',
    websiteTable: 'websiteTable',
}
async function getTable(table: IDBTable) {
    try {
        const result = (await chrome.storage.local.get(table)) || {}
        return result[table]
    } catch (e) {
        console.log(`读取存储${table}报错，`, e)
    }
}

async function setTable(table: IDBTable, data: any) {
    await chrome.storage.local.set({ [table]: data })
    return data
}

export { DBTableMap, getTable, setTable }
// async function addWebsite(data) {
//     let oldCache = await chrome.storage.local.get(['websiteTable'])
//     if (oldCache.websiteTable) {
//         oldCache = oldCache.websiteTable
//     } else {
//         oldCache = []
//     }
//     await chrome.storage.local.set({ websiteTable: [...oldCache, data] })
//     const newWebsiteList = await chrome.storage.local.get(['websiteTable'])
//     return newWebsiteList.websiteTable || []
// }

// async function deleteWebsite(data) {
//     let oldCache = await chrome.storage.local.get(['websiteTable'])
//     if (oldCache.websiteTable) {
//         oldCache = oldCache.websiteTable
//     } else {
//         oldCache = []
//     }
//     await chrome.storage.local.set({
//         websiteTable: oldCache.filter((item) => item.id !== data.id),
//     })
//     const newWebsiteList = await chrome.storage.local.get(['websiteTable'])
//     return newWebsiteList.websiteTable || []
// }

// async function editWebsite(data) {
//     let oldCache = await chrome.storage.local.get(['websiteTable'])
//     if (oldCache.websiteTable) {
//         oldCache = oldCache.websiteTable
//     } else {
//         oldCache = []
//     }
//     const result = oldCache.map((item) => {
//         if (data.id === item.id) {
//             return data
//         }
//         return item
//     })
//     await chrome.storage.local.set({
//         websiteTable: result,
//     })
//     return result || []
// }

// async function getWebsiteList() {
//     let oldCache = await chrome.storage.local.get(['websiteTable'])
//     return oldCache.websiteTable || []
// }

// async function setWebsiteList(data) {
//     await chrome.storage.local.set({ websiteTable: [...data] })
//     return data
// }

// async function addAccount(data) {
//     let oldCache = await chrome.storage.local.get(['accountTable'])
//     if (oldCache.accountTable) {
//         oldCache = oldCache.accountTable
//     } else {
//         oldCache = []
//     }
//     await chrome.storage.local.set({ accountTable: [...oldCache, data] })
//     const newAccountList = await chrome.storage.local.get(['accountTable'])
//     return newAccountList.accountTable || []
// }

// async function deleteAccount(data) {
//     let oldCache = await chrome.storage.local.get(['accountTable'])
//     if (oldCache.accountTable) {
//         oldCache = oldCache.accountTable
//     } else {
//         oldCache = []
//     }
//     await chrome.storage.local.set({
//         accountTable: oldCache.filter((item) => item.id !== data.id),
//     })
//     const newAccountList = await chrome.storage.local.get(['accountTable'])
//     return newAccountList.accountTable || []
// }

// async function editAccount(data) {
//     let oldCache = await chrome.storage.local.get(['accountTable'])
//     if (oldCache.accountTable) {
//         oldCache = oldCache.accountTable
//     } else {
//         oldCache = []
//     }
//     const result = oldCache.map((item) => {
//         if (data.id === item.id) {
//             return data
//         }
//         return item
//     })
//     await chrome.storage.local.set({
//         accountTable: result,
//     })
//     return result || []
// }

// async function getAccountList() {
//     let oldCache = await chrome.storage.local.get(['accountTable'])
//     return oldCache.accountTable || []
// }

// async function setAccountList(data) {
//     await chrome.storage.local.set({ accountTable: [...data] })
//     return data
// }

// export default {
//     setWebsiteList,
//     addWebsite,
//     deleteWebsite,
//     editWebsite,
//     getWebsiteList,
//     addAccount,
//     deleteAccount,
//     editAccount,
//     getAccountList,
//     setAccountList,
// }
