export interface IAccount {
    key: string
    name: string
    account: string
    pwd: string
}
export interface IWebsite {
    key: string
    name: string
    address: string
    accountList: Array<IAccount>
}
