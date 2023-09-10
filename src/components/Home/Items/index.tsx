import React from 'react'
import styles from './index.module.scss'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import ItemRow from '../ItemRow'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDragAndDrop } from 'src/hooks/useDragAndDrop';
import { handleReorderItems, handleResetList } from 'src/redux/features/home/todoSlice'
import { ITodoItem } from 'src/types/todoItem';
import Button from 'src/components/Kit/Button';
import { BUTTON_CLASS_OPTIONS } from 'src/enums/button';

const Items: React.FC = () => {
    const dispatch = useAppDispatch()
    const todoItems = useAppSelector(state => state.todoSlice)
    const [
        getListStyle,
        getItemStyle,
        onDragEnd
    ] = useDragAndDrop()

    const setStateItems = (items: ITodoItem[]) => {
        dispatch(handleReorderItems(items))
    }

    const renderEmptyState = () => {
        return <div className={styles.items_empty_state}>
            <span>Your todo list is empty!</span>
        </div>
    }

    return (
        <div className={styles.container}>
            {todoItems.length <= 0
                ? renderEmptyState()
                : <DragDropContext onDragEnd={(result) => onDragEnd(result, todoItems, setStateItems)}>
                    <Droppable droppableId="droppable" type="TASK">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle()}
                            >
                                {todoItems.map((itemObject: ITodoItem, index: number) => (
                                    <Draggable
                                        key={itemObject.id}
                                        draggableId={itemObject.id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getItemStyle(
                                                    provided.draggableProps.style
                                                )}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <ItemRow itemData={{ ...itemObject }} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            }
            {todoItems.length > 0 &&
                <div className={styles.reset_button_wrapper}>
                    <Button type={BUTTON_CLASS_OPTIONS.DANGER} onClick={() => dispatch(handleResetList())}>
                        <span className=''>Reset List</span>
                    </Button>
                </div>
            }
        </div>
    )
}

export default Items