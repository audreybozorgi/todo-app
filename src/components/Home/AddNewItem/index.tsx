import React, { useState } from 'react'
import './index.css'
import Input from 'src/components/Kit/Input'
import Button from 'src/components/Kit/Button'
import { useAppDispatch } from 'src/redux/hooks'
import { handleAddNewItem } from 'src/redux/features/home/todoSlice'
import { UUIDv4 } from 'src/utils/uuid-generator'

const AddNewItem: React.FC = () => {
    const dispatch = useAppDispatch()
    const [inputText, setInputText] = useState<string>('')

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const tempItem = {
            id: UUIDv4(),
            content: inputText
        }
        dispatch(handleAddNewItem(tempItem))
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    return (
        <div className='add_new_container'>
            <h4>Add new todo action</h4>
            <form>
                <div>
                    <Input 
                        style={{ flex: 1 }} 
                        onChange={handleChangeText}
                    />
                    <Button 
                        style={{ margin: '0 4px' }} 
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddNewItem