<script setup lang="ts">
import { Button, Table } from 'ant-design-vue'
</script>
<template>
    <div class="h-full">
        <div class="operation">
            <Button type="primary" class="mr-[10px] bg-blue-700"
                >添加网站</Button
            >
            <Button type="primary" danger>批量删除</Button>
        </div>
        <Table class="mt-[10px] h-full"> </Table>
    </div>
</template>
