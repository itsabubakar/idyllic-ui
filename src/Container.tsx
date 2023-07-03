import React, { ReactNode } from 'react'


export interface ContainerProps {
    children: ReactNode;
    className?: string

}


export const Container: React.FC<ContainerProps> = ({
    children,
    className,

}) => {
    return (
        <div className={`mx-auto w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl ${className ? className : ''}`} >
            {children}
        </div>
    )
}