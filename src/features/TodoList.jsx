import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../api/todosApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'

const TodoList = () => {

    const [ newTodo, setNewTodo ] = useState('')
    const queryClient = useQueryClient()

    const {
        isLoading,
        isError,
        error,
        data: todos
    } = useQuery('todos', getTodos)

    const addTodoMutation = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos")
        }
    })

    const updateTodoMutation = useMutation(updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos")
        }
    })

    const deleteTodoMutation = useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos")
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        addTodoMutation.mutate({ userId: 1, title: newTodo, completed: false })
        setNewTodo('')
    }

    

    return (
        <div>
            
        </div>
    )
}

export default TodoList