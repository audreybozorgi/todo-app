import React from 'react'
import './index.css'

interface IInputProps {
    style?: Record<string, string | number>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<IInputProps> = ({ style, onChange }) => {
    return <input 
        className='input_style'
        style={{...style}}
        onChange={onChange}
    />
}

export default Input