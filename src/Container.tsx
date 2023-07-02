import React, { ReactNode } from 'react'


export interface ContainerProps {
    children: ReactNode;

}


export const Container: React.FC<ContainerProps> = ({
    children,

}) => {
    return (
        <div className='mx-auto w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl' >
            {children}
        </div>
    )
}