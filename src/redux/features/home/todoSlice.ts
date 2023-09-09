import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todoItem = {
    id: string;
    content: string;
}

const initialState: todoItem[] = [];

const checkItemExist = (state: todoItem[], payload: todoItem | { id: string }) => {
    return state.find(item => item.id === payload.id)
}

export const todoSlice = createSlice({
    name: "todoItem",
    initialState,
    reducers: {
        handleAddNewItem: (state: todoItem[], action: PayloadAction<todoItem>) => {
            if(!checkItemExist(state, action.payload)){
                return state = [...state, action.payload]
            }
        },
        handleReorderItems: (state: todoItem[], action: PayloadAction<todoItem[]>) => {
            return state = action.payload
        },
        handleRemoveItem:  (state: todoItem[], action: PayloadAction<{ id: string }>) => {
            if(checkItemExist(state, action.payload)) {
                return state.filter(item => item.id !== action.payload.id)
            }
        },
        handleUpdateItem: (state: todoItem[], action: PayloadAction<todoItem>) => {
            let tempState = JSON.parse(JSON.stringify(state))
            return tempState.map((item: todoItem) => {
                if(item.id === action.payload.id) {
                    item.content = action.payload.content
                }
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