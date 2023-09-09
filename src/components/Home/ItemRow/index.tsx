import React from 'react'
import styles from './index.module.scss'
import Button from 'src/components/Kit/Button';
import { useAppDispatch } from 'src/redux/hooks';
import { handleRemoveItem } from 'src/redux/features/home/todoSlice'

interface IItemProps{
    itemData: {
        id: string;
        content: string;
    }
}
const Item: React.FC<IItemProps> = ({ itemData }) => {
    const dispatch = useAppDispatch()

    const handleDeleteItem = () => {
        dispatch(handleRemoveItem({id: itemData.id}))
    }

    const handleSendToTop = () => {
        
    }

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.item_name}>{itemData.content}</span>
            </div>
            <div>
                <Button onClick={handleDeleteItem}>Delete</Button>
                <Button onClick={handleSendToTop}>Sort</Button>
            </div>
        </div>
    )
}

export default Item