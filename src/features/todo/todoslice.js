import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {id: '1', title: 'todo1', completed: false}
    ],
    };
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers : {
         addtodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false,
            };
            state.todos.push(newTodo);
        },

        toggletodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deletetodo: (state, action) => {
            state.todos= state.todos.filter(todo => todo.id !== action.payload.id);
        }
    }
});

export const {addtodo, toggletodo, deletetodo} = todoSlice.actions;
export default todoSlice.reducer;
