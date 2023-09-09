import React, { ReactNode } from 'react'
import './index.css'

interface IButtonProps {
    style?: Record<string, string>;
    children?: ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const Button: React.FC<IButtonProps> = ({ children, style, onClick }) => {
    return <button 
        onClick={onClick}
        className='button_style'
        style={{...style}}
    >
        {children}
    </button>
}

export default Button