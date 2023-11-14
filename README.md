# chrome-extension

本项目是一个Chrome浏览器扩展，目标是实现常用网页的登录操作自动化，后续会增加一些登录操作以外的其他自动化功能。

虽然油猴能嵌入页面，但是如果想要做一个操作面板和后台管理，油猴就不太够了。因此采用Chrome扩展的方式进行开发，同时也想学习和了解[Chrome extension API](https://developer.chrome.com/docs/extensions/reference/)。

## website数据结构

```ts
// IWebsite
{
    key: string
    name: string
    address: string
    accountList: Array<IAccount>
}
```

## account数据结构

```ts
// IAccount
{
    key: string
    name: string
    account: string
    pwd: string
}
```
