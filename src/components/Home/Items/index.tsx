import React from 'react'
import './index.css'
import { useAppSelector } from 'src/redux/hooks'
import Item from '../ItemRow'

const Items: React.FC = () => {
    const todoItems = useAppSelector(state => state.todoSlice)
    console.log(todoItems);
    

    if(todoItems.length <= 0) 
        return (
            <div className='items_empty_state'>
                <span>Your list is empty!</span>
            </div>
    )
    
    return (
        <div className='items_container'>
            {todoItems.map(itemObject => <Item key={itemObject.id} itemData={itemObject}/>) }
        </div>
    )
}

export default Items