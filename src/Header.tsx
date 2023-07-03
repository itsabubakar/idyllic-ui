import React, { HTMLAttributes, ReactNode } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    as: string,
    className?: string,
    children: ReactNode,
}


export const Header: React.FC<HeadingProps> = ({ as, className, children, ...props }) => {
    return (
        <>
            {
                as === 'h1' ? <h1 className={`font-semibold text-4xl ${className ? `${className}` : ''}`} {...props}>{children}</h1> :
                    as === 'h2' ? <h2 className={`font-semibold text-3xl ${className ? `${className}` : ''}`} {...props}>{children}</h2> :
                        as === 'h3' ? <h3 className={`font-semibold text-2xl ${className ? `${className}` : ''}`} {...props}>{children}</h3> :
                            as === 'h4' ? <h4 className={`font-semibold text-xl ${className ? `${className}` : ''}`} {...props}>{children}</h4> :
                                as === 'h5' ? <h5 className={`font-semibold text-lg ${className ? `${className}` : ''}`}{...props}>{children}</h5> :
                                    as === 'h6' ? <h6 className={`font-semibold text-base ${className ? `${className}` : ''}`} {...props}>{children}</h6> : <h1 className={`font-semibold text-4xl ${className ? `${className}` : ''}`} {...props}>{children}</h1>
            }

        </>
    )
}