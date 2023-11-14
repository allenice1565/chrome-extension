<script setup lang="ts">
import { Button, Table, Input, Tag } from 'ant-design-vue'
import { ref } from 'vue'
import {
    CheckCircleOutlined,
    FormOutlined,
    DeleteOutlined,
} from '@ant-design/icons-vue'
import { IWebsite, IAccount } from '@/interface'

defineOptions({
    name: 'WebsiteManagement',
})

const dataSource = ref<IWebsite[]>([
    {
        key: '123132',
        name: '沙盒',
        address: 'http://zyfp-fof.ss.gofund.cn',
        accountList: [
            {
                key: '1231111',
                name: '80',
                account: 'test000000080',
                pwd: 'cx1111',
            },
            {
                key: '1231112',
                name: '81',
                account: 'test000000081',
                pwd: 'cx1111',
            },
        ],
    },
    {
        key: '123123',
        name: '广发落地版',
        address: 'http://zyfp-fof.ss.gofund.cn/accountManager/userManager',
        accountList: [],
    },
])

interface IColumn {
    title: string
    dataIndex: string
    editing: boolean
    width?: number
    align?: 'left' | 'center' | 'right'
    enable?: boolean
    key?: string
    ellipsis?: boolean
}
const columns: IColumn[] = [
    {
        title: '操作',
        dataIndex: 'operation',
        width: 80,
        align: 'center',
        editing: false,
        enable: true,
    },
    {
        title: 'ID',
        dataIndex: 'key',
        width: 80,
        editing: false,
        enable: true,
    },
    {
        title: '名称',
        dataIndex: 'name',
        width: 120,
        editing: false,
        enable: true,
    },
    {
        title: '匹配网址',
        dataIndex: 'address',
        key: 'address',
        ellipsis: true,
        editing: false,
        enable: true,
    },
    {
        title: '账号',
        dataIndex: 'accountList',
        key: 'accountList',
        ellipsis: true,
        editing: false,
        enable: true,
    },
]

const selectedRowKeys = ref<string[]>([])
const onSelectChange = (keys: string[]) => {
    selectedRowKeys.value = keys
}
const handleSave = (record: IColumn) => {
    record.editing = false
}

const handleDeleteAccount = (e) => {
    console.log(e)
}
// const handleInput = (val: string, record: any) => {
//     console.log(val)
//     record.address = val
//     // dataSource.value = [...dataSource.value]
// }
</script>
<template>
    <div class="h-full">
        <div class="operation">
            <Button type="primary" class="mr-[10px] bg-blue-700"
                >添加网站</Button
            >
            <Button type="primary" danger>批量删除</Button>
        </div>
        <Table
            class="ant-table-striped mt-[10px] h-full"
            bordered
            resizable
            :row-selection="{
                selectedRowKeys,
                onChange: onSelectChange,
            }"
            :data-source="dataSource"
            :columns="columns"
        >
            <template #bodyCell="{ column, text, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <div
                        class="relative flex items-center w-full justify-center"
                    >
                        <CheckCircleOutlined
                            v-if="record.editing"
                            class="mr-[8px] text-[18px] text-[green] cursor-pointer"
                            @click.stop="handleSave(record)"
                        />
                        <FormOutlined
                            v-else
                            class="mr-[8px] text-[18px] text-[blue] cursor-pointer"
                            @click.stop="record.editing = true"
                        />
                        <DeleteOutlined
                            class="text-[18px] text-[red] cursor-pointer"
                        />
                    </div>
                </template>
                <template v-if="column.dataIndex === 'name'">
                    <div
                        v-if="record.editing"
                        class="relative flex items-center w-full justify-center"
                    >
                        <Input v-model:value="record.name" type="text" />
                    </div>
                    <div
                        v-else
                        class="overflow-hidden text-ellipsis"
                        :title="text"
                    >
                        {{ text }}
                    </div>
                </template>
                <template v-if="column.dataIndex === 'address'">
                    <div
                        v-if="record.editing"
                        class="relative flex items-center w-full justify-center"
                    >
                        <Input v-model:value="record.address" type="text" />
                    </div>
                    <div
                        v-else
                        class="overflow-hidden vtext-ellipsis"
                        :title="text"
                    >
                        {{ text }}
                    </div>
                </template>
                <template v-if="column.dataIndex === 'accountList'">
                    <!-- <div
                        v-if="record.editing"
                        class="relative flex items-center w-full justify-center"
                    >
                        <Input type="text" />
                    </div> -->
                    <!-- <template v-else> -->
                    <Tag
                        v-for="item in text"
                        :key="item.key"
                        :bordered="false"
                        :closable="record.editing"
                        :title="item.account"
                        @close="handleDeleteAccount(item)"
                        >{{ item.name }}</Tag
                    >
                    <!-- </template> -->
                    <!-- <div class="overflow-hidden text-ellipsis" :title="text">
                        {{ text.map((item: IAccount) => item.name).join(',') }}
                    </div> -->
                </template>
            </template>
        </Table>
    </div>
</template>

<style scoped>
:deep(.ant-table-cell) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: default;
}
</style>
