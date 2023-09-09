import React, { useState } from 'react'
import styles from './index.module.scss'
import Button from 'src/components/Kit/Button';
import { useAppDispatch } from 'src/redux/hooks';
import { handleRemoveItem, handleUpdateItem } from 'src/redux/features/home/todoSlice'
import Input from 'src/components/Kit/Input';

interface IItemProps{
    itemData: {
        id: string;
        content: string;
    }
}
const Item: React.FC<IItemProps> = ({ itemData }) => {
    const dispatch = useAppDispatch()
    const [editMode, setEditMode] = useState<boolean>(false)
    const [preventEditMode, setPreventEditMode] = useState<boolean>(false)
    const [inputText, setInputText] = useState<string>(itemData.content)

    const handleDeleteItem = () => {
        dispatch(handleRemoveItem({id: itemData.id}))
    }

    const onMouseEnter = () => {
        if(!preventEditMode)
            setEditMode(true)
    }

    const onMouseLeave = () => {
        if(inputText !== itemData.content) {
            return
        }
        setEditMode(false)
        setPreventEditMode(false)
    }

    const handleSaveForm = () => {
        dispatch(handleUpdateItem({id: itemData.id, content: inputText}))
        setEditMode(false)
        setPreventEditMode(true)
    }

    const handleResetForm = () => {
        setInputText(itemData.content)
        setEditMode(false)
        setPreventEditMode(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.content_wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {editMode 
                    ?   <>
                            <Input style={{width: '70%'}} onChange={e => setInputText(e.target.value)} value={inputText}/>
                            <Button onClick={handleSaveForm} disabled={!inputText || inputText === itemData.content}>Save</Button>
                            <Button onClick={handleResetForm}>Cancel</Button>
                        </>
                    :   <span className={styles.item_name}>{itemData.content}</span>
                }
            </div>
            <div>
                <Button onClick={handleDeleteItem}>Delete</Button>
                <Button onClick={() => console.log('sdsd')}>Sort</Button>
            </div>
        </div>
    )
}

export default Item