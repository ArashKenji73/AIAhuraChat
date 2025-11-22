<template>
<footer class="p-3 border-t border-slate-200">
<form @submit.prevent="send" class="flex gap-2 items-end">
<textarea v-model="text" placeholder="پیام خود را بنویسید..." class="w-full p-3 rounded-lg border border-slate-300"></textarea>
<button class="px-4 py-2 bg-indigo-500 text-white rounded-lg">ارسال</button>
</form>
</footer>
</template>


<script setup>
import { ref } from 'vue'
const emit = defineEmits(['send'])
const text = ref('')
function send() {
if (!text.value.trim()) return
emit('send', text.value)
text.value = ''
}
</script>