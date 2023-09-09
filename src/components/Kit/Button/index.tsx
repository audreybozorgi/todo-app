import React, { ReactNode } from 'react'
import styles from './index.module.scss'

interface IButtonProps {
    style?: Record<string, string>;
    children?: ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean
}
const Button: React.FC<IButtonProps> = ({ children, style, onClick, disabled }) => {
    return <button 
        onClick={onClick}
        className={styles.button_style}
        style={{...style}}
        disabled={disabled}
    >
        {children}
    </button>
}

export default Button