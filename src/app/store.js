import {configureStore} from '@reduxjs/toolkit';
import { todoSlice } from '../features/todo/todoslice';

export default configureStore({
    reducer: todoSlice.reducer,
});