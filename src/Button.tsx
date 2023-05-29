import React, { HTMLAttributes, ReactNode } from 'react'
import './styles/Button.css'


export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary';
    size: string | number;
    disabled?: boolean;
    loading?: boolean;
}

export const Button = ({ children, variant = 'primary', disabled = false, loading = false, size }: Props) => {
    return (
        <button
            disabled={disabled}
            className={`btn ${disabled === true && 'btn-disabled'} ${variant === 'secondary' && 'btn-sec'}`}
            style={{
                fontSize: size,
            }}>
            {loading ? <div className="loader-container">
                <div className="spinner"></div>
            </div> : <>{children}</>
            }
        </button>
    )
}