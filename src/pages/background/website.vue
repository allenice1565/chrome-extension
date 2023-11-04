<script setup lang="ts">
import { Button, Table } from 'ant-design-vue'
import { ref } from 'vue'
import { FormOutlined, DeleteOutlined } from '@ant-design/icons-vue'
const dataSource = [
    {
        key: '123132',
        name: '沙盒',
        address: 'http://zyfp-fof.ss.gofund.cn',
        account: [],
    },
    {
        key: '123123',
        name: '广发落地版',
        address: 'http://zyfp-fof.ss.gofund.cn/accountManager/userManager',
        account: [],
    },
]

const columns = [
    {
        title: '操作',
        dataIndex: 'operation',
        width: 80,
        align: 'center',
    },
    {
        title: 'ID',
        dataIndex: 'key',
        width: 80,
    },
    {
        title: '名称',
        dataIndex: 'name',
        width: 120,
    },
    {
        title: '匹配网址',
        dataIndex: 'address',
        key: 'address',
        ellipsis: true,
    },
    {
        title: '账号',
        dataIndex: 'account',
        key: 'account',
        ellipsis: true,
    },
]

const selectedRowKeys = ref([])
const onSelectChange = (keys) => {
    selectedRowKeys.value = keys
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
                        <FormOutlined
                            class="mr-[8px] text-[18px] text-[blue] cursor-pointer"
                        />
                        <DeleteOutlined
                            class="text-[18px] text-[red] cursor-pointer"
                        />
                    </div>
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
