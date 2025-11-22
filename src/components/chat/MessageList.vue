<template>
<div class="flex flex-col gap-4">
<MessageBubble v-for="msg in messages" :key="msg.id" :msg="msg" />
</div>
</template>


<script setup>
import MessageBubble from './MessageBubble.vue'
const props = defineProps({ messages: Array })
</script>