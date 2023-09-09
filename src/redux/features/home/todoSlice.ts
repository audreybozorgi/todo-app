import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todoList = {
    id: string;
    content: string;
}

const initialState: todoList[] = [];

const checkItemExist = (state: todoList[], payload: todoList | { id: string }) => {
    return state.find(item => item.id === payload.id)
}

export const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        handleAddNewItem: (state: todoList[], action: PayloadAction<todoList>) => {
            if(!checkItemExist(state, action.payload)){
                return state = [...state, action.payload]
            }
        },
        handleReorderItems: (state: todoList[], action: PayloadAction<todoList[]>) => {
            return state = action.payload
        },
        handleRemoveItem:  (state: todoList[], action: PayloadAction<{ id: string }>) => {
            if(checkItemExist(state, action.payload)) {
                return state.filter(item => item.id !== action.payload.id)
            }
        },
        reset: () => initialState,
    },
});

export const {
    handleAddNewItem,
    handleReorderItems,
    handleRemoveItem,
    reset,
} = todoSlice.actions;
export default todoSlice.reducer;