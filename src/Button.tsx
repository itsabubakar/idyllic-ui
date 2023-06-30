import React, { HTMLAttributes } from 'react'


export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: JSX.Element | string | number;
    cn?: string;
    type?: string;
    disabled?: boolean;
}




export const Button: React.FC<ButtonProps> = ({
    children,
    cn,
    type,
    disabled,
    ...props
}) => {
    return (
        <>
            {
                type == 'light' ?
                    <button type='button' className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600  transition duration-150 ease-in-out  border border-gray-200 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none opacity-50 ${cn ? cn : ''} ${disabled ? 'cursor-not-allowed op' : ''}`} {...props}>
                        {children}
                    </button> :
                    type == 'dark' ?
                        <button type='button' className={`inline-flex items-center justify-center px-4 py-2 font-medium tracking-wide leading-6 text-white transition duration-150 ease-in-out bg-gray-900 rounded hover:bg-gray-800 focus:shadow-outline focus:outline-none ${cn ? cn : ''}  ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}>
                            {children}
                        </button> :
                        type == 'light-outline' ?
                            <button type='button' className={`inline-flex  items-center justify-center rounded border-2   px-4 py-2 text-base text-gray-600 font-medium  leading-6 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-gray-600 focus:border-gray-600 focus:text-gray-600 focus:outline-none focus:ring-0 active:border-gray-700 active:text-gray-700 ${cn ? cn : ''}  ${disabled ? 'cursor-not-allowed opacity-50' : ''}`} {...props}>
                                {children}
                            </button> :
                            type == 'dark-outline' ?
                                <button type='button' className={`inline-flex rounded border-2 border-neutral-800 px-4 py-2 text-base text-neutral-800 font-medium  leading-6  transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 ${cn ? cn : ''}  ${disabled ? 'cursor-not-allowed opacity-50' : ''}`} {...props}>
                                    {children}
                                </button> :

                                <button type='button' className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600  transition duration-150 ease-in-out  border border-gray-200 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none ${cn ? cn : ''} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`} {...props}>
                                    {children}
                                </button>
            }

        </>
    )
}