import React, { HTMLAttributes } from 'react'


export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: JSX.Element;
    cn?: string;
    type?: string;
    disabled?: boolean;
}




export const TailwindBtn: React.FC<ButtonProps> = ({
    children,
    cn,
    type,
    disabled,
    ...props
}) => {
    return (
        <>
            {/* light */}
            {
                !type && <button {...props} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600  transition duration-150 ease-in-out bg-white border border-gray-200 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                    {children}
                </button>
            }
            {/* dark */}
            {
                type == 'dark' && <button className="inline-flex items-center justify-center px-4 py-2 font-medium tracking-wide leading-6 text-white transition duration-150 ease-in-out bg-gray-900 rounded hover:bg-gray-800 focus:shadow-outline focus:outline-none">
                    {children}
                </button>
            }
            {/* light outline */}
            {
                type == 'light-outline' && <button {...props} className="inline-flex  items-center justify-center rounded border-2 border-info  px-4 py-2 text-base font-medium  leading-6 transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700">
                    {children}
                </button>
            }
            {/* dark outline */}
            {
                type == 'dark-outline' && <button {...props} className="inline-flex rounded border-2 border-neutral-800 px-4 py-2 text-base font-medium  leading-6 text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900">
                    {children}
                </button>
            }
        </>
    )
}