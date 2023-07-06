import React from "react"

export interface InputProps {
    placeholder?: string,
    label?: string,
    type?: string,
    error?: boolean,
    width?: string,
    height?: string,
    className?: string
    id?: string
}

export const Input: React.FC<InputProps> = ({
    placeholder = 'placeholder',
    label,
    type,
    error,
    id,

}) => {
    return (

        <div className="w-full h-full">
            <label htmlFor={id} className="block text-sm font-medium text-gray-800 pb-1">
                {label}
            </label>

            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`mt-1 w-full border rounded-md  px-3 py-2 ${error ? ' border-red-500' : 'border-gray-300'}`}
            />
        </div>
    )
}
