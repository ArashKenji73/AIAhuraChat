<template>
<header class="flex items-center justify-between gap-3 p-4 border-b" :class="borderClass">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold">CB</div>
<div>
<div class="font-medium">چت‌بات فارسی</div>
<div class="text-xs text-slate-500" v-if="status">{{ status }}</div>
</div>
</div>


<div class="flex items-center gap-2">
<button @click="$emit('toggleTheme')" class="px-3 py-1 rounded-md border text-sm" :class="borderClass">{{ theme === 'dark' ? 'حالت روشن' : 'حالت تاریک' }}</button>
<button @click="$emit('clearChat')" class="px-3 py-1 rounded-md border text-sm" :class="borderClass">پاک کردن</button>
</div>
</header>
</template>


<script setup>
import { computed } from 'vue'
const props = defineProps({ status: String, theme: String })
const borderClass = computed(() => props.theme === 'dark' ? 'border-slate-700' : 'border-slate-200')
</script>