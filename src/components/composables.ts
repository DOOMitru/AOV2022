import { ref, Ref, computed } from 'vue'
import { Todo } from './models'

export function useClickCount() {
	const clickCount = ref(0)
	function increment() {
		clickCount.value += 1
		return clickCount.value
	}

	return { clickCount, increment }
}

export function useDisplayTodo(todos: Ref<Todo[]>) {
	const todoCount = computed(() => todos.value.length)
	return { todoCount }
}
