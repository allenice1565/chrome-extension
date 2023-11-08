<script setup lang="ts">
import { Button, Table, Input } from 'ant-design-vue'
import { ref } from 'vue'
import {
    CheckCircleOutlined,
    FormOutlined,
    DeleteOutlined,
} from '@ant-design/icons-vue'

defineOptions({
    name: 'AccountManagement',
})

const dataSource = ref<
    Array<{
        key: string
        name: string
        address: string
        account: string
    }>
>([
    {
        key: '123132',
        name: '沙盒',
        address: 'http://zyfp-fof.ss.gofund.cn',
        account: '',
    },
    {
        key: '123123',
        name: '广发落地版',
        address: 'http://zyfp-fof.ss.gofund.cn/accountManager/userManager',
        account: '',
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
        title: '账号',
        dataIndex: 'account',
        key: 'account',
        ellipsis: true,
        editing: false,
        enable: true,
    },
    {
        title: '密码',
        dataIndex: 'passwd',
        key: 'passwd',
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
                    <div v-else>{{ text }}</div>
                </template>
                <template v-if="column.dataIndex === 'account'">
                    <div
                        v-if="record.editing"
                        class="relative flex items-center w-full justify-center"
                    >
                        <Input v-model:value="record.account" type="text" />
                    </div>
                    <div v-else>{{ text }}</div>
                </template>
                <template v-if="column.dataIndex === 'passwd'">
                    <div
                        v-if="record.editing"
                        class="relative flex items-center w-full justify-center"
                    >
                        <Input v-model:value="record.passwd" type="text" />
                    </div>
                    <div v-else>{{ text }}</div>
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
}
</style>
