<script lang="ts" setup>
import { ref } from 'vue'
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons-vue'
import {
    Layout,
    LayoutHeader,
    LayoutContent,
    LayoutSider,
    Menu,
    SubMenu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
} from 'ant-design-vue'
import { DBTableMap, setTable, getTable } from '@/utils/storage'

setTable(DBTableMap.websiteTable, [1, 3]).then(async () =>
    console.log(await getTable(DBTableMap.websiteTable))
)
const currentNav = ref<number[]>([0])
const selectedKeys2 = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])
const navigationList: Array<{
    id: number
    name: string
    path: string
}> = [
    {
        id: 0,
        name: '网站管理',
        path: '/website',
    },
    {
        id: 1,
        name: '账号管理',
        path: '/account',
    },
    // {
    //     id: 2,
    //     name: '操作管理',
    //     path: '/action',
    // },
]
</script>

<template>
    <layout class="h-screen">
        <layout-header class="header">
            <div class="logo" />
            <Menu
                v-model:selectedKeys="currentNav"
                theme="dark"
                mode="horizontal"
                :style="{ lineHeight: '64px' }"
            >
                <router-link
                    v-for="item in navigationList"
                    :key="item.id"
                    :to="item.path"
                >
                    <menu-item :key="item.id">{{ item.name }}</menu-item>
                </router-link>
            </Menu>
        </layout-header>
        <layout>
            <!-- <layout-sider width="200" style="background: #fff">
                <Menu
                    v-model:selectedKeys="selectedKeys2"
                    v-model:openKeys="openKeys"
                    mode="inline"
                    :style="{ height: '100%', borderRight: 0 }"
                >
                    <sub-menu key="sub1">
                        <template #title>
                            <span>
                                <user-outlined />
                                subnav 1
                            </span>
                        </template>
                        <menu-item key="1">option1</menu-item>
                        <menu-item key="2">option2</menu-item>
                        <menu-item key="3">option3</menu-item>
                        <menu-item key="4">option4</menu-item>
                    </sub-menu>
                    <sub-menu key="sub2">
                        <template #title>
                            <span>
                                <laptop-outlined />
                                subnav 2
                            </span>
                        </template>
                        <menu-item key="5">option5</menu-item>
                        <menu-item key="6">option6</menu-item>
                        <menu-item key="7">option7</menu-item>
                        <menu-item key="8">option8</menu-item>
                    </sub-menu>
                    <sub-menu key="sub3">
                        <template #title>
                            <span>
                                <notification-outlined />
                                subnav 3
                            </span>
                        </template>
                        <menu-item key="9">option9</menu-item>
                        <menu-item key="10">option10</menu-item>
                        <menu-item key="11">option11</menu-item>
                        <menu-item key="12">option12</menu-item>
                    </sub-menu>
                </Menu>
            </layout-sider> -->
            <layout style="padding: 0 24px 24px">
                <!-- <breadcrumb style="margin: 16px 0">
                    <breadcrumb-item>Home</breadcrumb-item>
                    <breadcrumb-item>List</breadcrumb-item>
                    <breadcrumb-item>App</breadcrumb-item>
                </breadcrumb> -->
                <layout-content
                    :style="{
                        background: '#fff',
                        padding: '24px',
                        margin: 0,
                        minHeight: '280px',
                        height: '100%',
                    }"
                >
                    <RouterView />
                </layout-content>
            </layout>
        </layout>
    </layout>
</template>

<style scoped lang="scss">
#components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}
</style>
