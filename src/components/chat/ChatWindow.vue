<template>
<main ref="chatWindow" class="p-4 overflow-auto" :class="windowClass">
<MessageList :messages="messages" />
<TypingIndicator v-if="isTyping" />
</main>
</template>


<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import MessageList from './MessageList.vue'
import TypingIndicator from './TypingIndicator.vue'
import useTheme from '../../composables/useTheme'


const props = defineProps({ messages: Array, isTyping: Boolean })
const { theme } = useTheme()
const chatWindow = ref(null)


const windowClass = computed(() => theme.value === 'dark' ? 'bg-slate-900' : 'bg-slate-50')


watch(() => props.messages.length, async () => {
await nextTick()
chatWindow.value?.scrollTo({ top: chatWindow.value.scrollHeight, behavior: 'smooth' })
})
</script>