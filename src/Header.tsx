import React, { HTMLAttributes, ReactNode } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    as: string,
    cn?: string,
    children: ReactNode,
}


export const Header: React.FC<HeadingProps> = ({ as, cn, children, ...props }) => {
    return (
        <>
            {
                as === 'h1' ? <h1 className={`font-semibold text-4xl ${cn ? `${cn}` : ''}`} {...props}>{children}</h1> :
                    as === 'h2' ? <h2 className={`font-semibold text-3xl ${cn ? `${cn}` : ''}`} {...props}>{children}</h2> :
                        as === 'h3' ? <h3 className={`font-semibold text-2xl ${cn ? `${cn}` : ''}`} {...props}>{children}</h3> :
                            as === 'h4' ? <h4 className={`font-semibold text-xl ${cn ? `${cn}` : ''}`} {...props}>{children}</h4> :
                                as === 'h5' ? <h5 className={`font-semibold text-lg ${cn ? `${cn}` : ''}`}{...props}>{children}</h5> :
                                    as === 'h6' ? <h6 className={`font-semibold text-base ${cn ? `${cn}` : ''}`} {...props}>{children}</h6> : <h1 className={`font-semibold text-4xl ${cn ? `${cn}` : ''}`} {...props}>{children}</h1>
            }

        </>
    )
}