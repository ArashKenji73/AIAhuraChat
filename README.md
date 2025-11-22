# Vue 3 Chat UI — Split Components

This project provides a simple **Vue 3 (Composition API)** chat interface with **TailwindCSS + RTL support**. The UI is split into clean, reusable components.

---

## Project Structure

```
src/
 ├─ components/
 │   ├─ ChatMessage.vue        # Single chat message component
 │   ├─ ChatInput.vue          # Message input field
 │   └─ ChatWindow.vue         # Message list + state management
 └─ App.vue                    # Root component rendering ChatWindow
```

---

## Features

* Fully **RTL-friendly** chat interface (Persian UI ready)
* Clean component separation
* TailwindCSS styling
* Smooth message transition animation
* Local state management inside ChatWindow
* Responsive layout for mobile, tablet, and desktop

---

## Installation & Running

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Component Responsibilities

### **ChatWindow.vue**

* Holds message state
* Listens for message submit events from ChatInput
* Renders ChatMessage for each message

### **ChatMessage.vue**

* Displays a single message bubble
* Accepts props: message text, timestamp, and sender

### **ChatInput.vue**

* Text input field
* Emits the typed message to ChatWindow

---

## Customizing Message Styles

You can modify the message bubble styles in **ChatMessage.vue**.

Example:

```html
<div :class="sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200'">
```

---


