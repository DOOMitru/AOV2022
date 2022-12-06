<template>
	<div>
		<p>{{ title }}</p>
		<ul>
			<li v-for="todo in todos" :key="todo.id" @click="increment">
				{{ todo.id }} - {{ todo.content }}
			</li>
		</ul>
		<p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
		<p>Active: {{ active ? 'yes' : 'no' }}</p>
		<p>Clicks on todos: {{ clickCount }}</p>
	</div>
</template>

<script setup lang="ts">
import { toRef, PropType } from 'vue'
import { Todo, Meta } from './models'
import { useClickCount, useDisplayTodo } from './composables'

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	todos: {
		type: Array as PropType<Todo[]>,
		default: () => [],
	},
	meta: {
		type: Object as PropType<Meta>,
		required: true,
	},
	active: {
		type: Boolean,
	},
})

const { todoCount } = useDisplayTodo(toRef(props, 'todos'))
const { clickCount, increment } = useClickCount()
</script>
