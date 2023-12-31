import React, { useState } from 'react'
import styles from './index.module.scss'
import Button from 'src/components/Kit/Button';
import { useAppDispatch } from 'src/redux/hooks';
import { handleRemoveItem, handleUpdateItem } from 'src/redux/features/home/todoSlice'
import Input from 'src/components/Kit/Input';
import { BUTTON_CLASS_OPTIONS } from 'src/enums/button';

interface IItemProps{
    itemData: {
        id: string;
        content: string;
    }
}
const ItemRow: React.FC<IItemProps> = ({ itemData }) => {
    const dispatch = useAppDispatch()
    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputText, setInputText] = useState<string>(itemData.content)

    const handleDeleteItem = () => {
        dispatch(handleRemoveItem({id: itemData.id}))
    }

    const handleSaveForm = () => {
        dispatch(handleUpdateItem({id: itemData.id, content: inputText}))
        setEditMode(false)
    }

    const handleResetForm = () => {
        setInputText(itemData.content)
        setEditMode(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.content_wrapper}>
                {editMode 
                    ?   <form>
                            <Input style={{width: '190px'}} onChange={e => setInputText(e.target.value)} value={inputText}/>
                            <Button 
                                onClick={handleSaveForm} 
                                disabled={!inputText || inputText === itemData.content}
                                type={BUTTON_CLASS_OPTIONS.SUCCESS}
                                style={{margin: '0px 4px'}}
                            >
                                Save
                            </Button>
                            <Button 
                                onClick={handleResetForm}
                                type={BUTTON_CLASS_OPTIONS.DANGER}
                            >
                                Cancel
                            </Button>
                        </form>
                    :   <span className={styles.item_name}>{itemData.content}</span>
                }
            </div>
            <div className={styles.action_wrapper}>
                <Button 
                    onClick={() => setEditMode(true)}
                    style={{marginRight: '4px'}}
                >
                    Edit
                </Button>
                <Button 
                    onClick={handleDeleteItem} 
                    type={BUTTON_CLASS_OPTIONS.DANGER}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default ItemRow