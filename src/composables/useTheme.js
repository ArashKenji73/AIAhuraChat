import { ref } from 'vue'


const themeStored = localStorage.getItem('chat_theme') || 'light'
const theme = ref(themeStored)


export default function useTheme() {
function toggleTheme() {
theme.value = theme.value === 'dark' ? 'light' : 'dark'
localStorage.setItem('chat_theme', theme.value)
}


return { theme, toggleTheme }
}