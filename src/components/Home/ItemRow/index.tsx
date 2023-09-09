import React from 'react'
import './index.css'


interface IItemProps{
    itemData: {
        id: string;
        content: string;
    }
}
const Item: React.FC<IItemProps> = ({ itemData }) => {
    return (
        <div className='item_container'>
            <span className='item_container__name'>{itemData.content}</span>
        </div>
    )
}

export default Item