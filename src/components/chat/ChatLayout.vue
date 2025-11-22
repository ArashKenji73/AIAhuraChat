<template>
<div class="min-h-screen flex items-center justify-center p-4" :class="themeClass" dir="rtl">
<div class="w-full max-w-3xl h-[80vh] grid grid-rows-[auto_1fr_auto] rounded-2xl shadow-lg overflow-hidden" :class="panelClass">
<ChatHeader :status="status" @toggleTheme="toggleTheme" @clearChat="clearChat" :theme="theme" />
<ChatWindow :messages="messages" :isTyping="isTyping" />
<ChatInput @send="handleSend" />
</div>
</div>
</template>


<script setup>
import { ref, computed } from 'vue'
import ChatHeader from './ChatHeader.vue'
import ChatWindow from './ChatWindow.vue'
import ChatInput from './ChatInput.vue'
import useChatApi from '../../composables/useChatApi'
import useTheme from '../../composables/useTheme'


const { messages, isTyping, status, handleSend, clearChat } = useChatApi()
const { theme, toggleTheme } = useTheme()


const themeClass = computed(() => theme.value === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-slate-900')
const panelClass = computed(() => theme.value === 'dark' ? 'bg-slate-800' : 'bg-white')
</script>