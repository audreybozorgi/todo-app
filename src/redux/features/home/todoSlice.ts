import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem } from "src/types/todoItem";

const initialState: ITodoItem[] = [];

const checkItemExist = (state: ITodoItem[], payload: ITodoItem | { id: string }) => {
    return state.find(item => item.id === payload.id)
}

export const todoSlice = createSlice({
    name: "ITodoItem",
    initialState,
    reducers: {
        handleAddNewItem: (state: ITodoItem[], action: PayloadAction<ITodoItem>) => {
            if (!checkItemExist(state, action.payload))
                return state = [action.payload, ...state]
        },
        handleReorderItems: (state: ITodoItem[], action: PayloadAction<ITodoItem[]>) => {
            return state = action.payload
        },
        handleRemoveItem: (state: ITodoItem[], action: PayloadAction<{ id: string }>) => {
            if (checkItemExist(state, action.payload))
                return state.filter(item => item.id !== action.payload.id)
        },
        handleUpdateItem: (state: ITodoItem[], action: PayloadAction<ITodoItem>) => {
            let tempState = JSON.parse(JSON.stringify(state))

            return tempState.map((item: ITodoItem) => {
                if (item.id === action.payload.id)
                    item.content = action.payload.content

                return item
            })
        },
        reset: () => initialState,
    },
});

export const {
    handleAddNewItem,
    handleReorderItems,
    handleRemoveItem,
    handleUpdateItem,
    reset,
} = todoSlice.actions;
export default todoSlice.reducer;