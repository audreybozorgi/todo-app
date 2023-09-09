import React from 'react'
import styles from './index.module.scss'

interface IInputProps {
    style?: Record<string, string | number>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}
const Input: React.FC<IInputProps> = ({ style, onChange, value }) => {
    return <input 
        className={styles.input_style}
        style={{...style}}
        onChange={onChange}
        value={value}
    />
}

export default Input