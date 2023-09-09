import React from 'react'
import styles from './index.module.scss'
import { useAppSelector } from 'src/redux/hooks'

const JSONView: React.FC = () => {
    const todoItems = useAppSelector(state => state.todoSlice)

    if (todoItems.length <= 0) {
        return (
            <div className={styles.items_empty_state}>
                <span>Your list is empty!</span>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {todoItems.map(item =>
                <div className={styles.json_format_wrapper}>
                    <div className={styles.main_brace}>{'['}</div>
                    <div className={styles.curly_brace}>{'{'}</div>
                    <div className={styles.body}>
                        <span>id: {item.id}</span>
                        <span>content: {item.content}</span>
                    </div>
                    <div></div>
                    <div className={styles.curly_brace}>{'}'}</div>
                    <div className={styles.main_brace}>{']'}</div>
                </div>
            )}
        </div>
    )
}

export default JSONView