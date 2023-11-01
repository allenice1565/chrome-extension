<script setup lang="ts">
import sendMsg from '@utils/sendMsg'

const handleClick = () => {
    sendMsg('openTab', '/dist/background.html')
}
</script>

<template>
    <div @click.stop="handleClick">popup</div>
</template>

<style></style>
