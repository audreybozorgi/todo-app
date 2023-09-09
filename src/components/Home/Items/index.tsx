import React from 'react'
import styles from './index.module.scss'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import ItemRow from '../ItemRow'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDragAndDrop } from 'src/hooks/useDragAndDrop';
import { handleReorderItems } from 'src/redux/features/home/todoSlice'


const Items: React.FC = () => {
    const dispatch = useAppDispatch()
    const [
        getListStyle,
        getItemStyle,
        onDragEnd
    ] = useDragAndDrop()

    const todoItems = useAppSelector(state => state.todoSlice)

    const setStateItems = (items: any) => {
        dispatch(handleReorderItems(items))
    }

    if (todoItems.length <= 0) {
        return (
            <div className={styles.items_empty_state}>
                <span>Your list is empty!</span>
            </div>
        )
    }
        
    return (
        <div className={styles.container}>
            <DragDropContext onDragEnd={(result) => onDragEnd(result, todoItems, setStateItems)}>
                <Droppable droppableId="droppable" type="TASK">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle()}
                        >
                            {todoItems.map((itemObject: any, index: number) => (
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
        </div>
    )
}

export default Items