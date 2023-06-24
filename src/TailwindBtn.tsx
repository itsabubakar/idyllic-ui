import React, { HTMLAttributes, ReactNode } from 'react'


export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;

}



export const TailwindBtn: React.FC<ButtonProps> = ({

    children,
    ...props
}) => {
    return (
        <button className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700" {...props}>
            {children}
        </button>
    )
}