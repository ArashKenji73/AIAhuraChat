<template>
<div class="flex items-end gap-3" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
<div v-if="msg.role === 'assistant'" class="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs">A</div>


<div class="max-w-[80%] md:max-w-[60%]">
<div :class="bubbleClass" v-html="formatted"></div>
<div class="text-[11px] mt-1 text-slate-400 text-left">{{ time }}</div>
</div>


<div v-if="msg.role === 'user'" class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs text-white">ش</div>
</div>
</template>


<script setup>
import { computed } from 'vue'
import useTheme from '../../composables/useTheme'


const props = defineProps({ msg: Object })
const { theme } = useTheme()


const bubbleClass = computed(() => {
if (props.msg.role === 'user') return theme.value === 'dark' ? 'px-4 py-2 rounded-2xl bg-indigo-600 text-white rounded-br-none' : 'px-4 py-2 rounded-2xl bg-indigo-100 text-slate-900 rounded-br-none'
return theme.value === 'dark' ? 'px-4 py-2 rounded-2xl bg-slate-700 text-slate-100 rounded-bl-none' : 'px-4 py-2 rounded-2xl bg-white text-slate-900 rounded-bl-none shadow'
})


const formatted = computed(() => props.msg.content.replace(/\n/g, '<br>'))
const time = computed(() => new Date(props.msg.time).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }))
</script>