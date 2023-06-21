import React, { HTMLAttributes, ReactNode } from 'react'
import styled from "styled-components";


export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    as: string,
    size?: string,
    children: ReactNode,
}

const H1 = styled.h1`
    font-size: 2rem;
`
const H2 = styled.h2`
    font-size: 1.5rem;
`
const H3 = styled.h3`
    font-size: 1.3rem;
`
const H4 = styled.h4`
    font-size: 1rem;
`
const H5 = styled.h5`
    font-size: 0.8rem;
`
const H6 = styled.h6`
    font-size: 0.7rem;
`



export const Heading: React.FC<HeadingProps> = ({
    children,
    as,
    size,
    ...props
}) => {
    return (
        <>

            {/*Empty as defaults to H1  */}
            {as === '' && <H1  {...props}>
                {children}
            </H1>
            }

            {as === 'h1' && <H1 style={{
                fontSize: size && size,
            }} {...props}>
                {children}
            </H1>
            }
            {as === 'h2' && <H2 style={{
                fontSize: size && size,
            }} {...props}>
                {children}
            </H2>
            }

            {as === 'h3' && <H3 style={{
                fontSize: size && size,
            }} {...props}>
                {children}
            </H3>
            }
            {as === 'h4' && <H4 style={{
                fontSize: size && size,
            }} {...props}>
                {children}
            </H4>
            }
            {as === 'h5' && <H5 style={{
                fontSize: size && size,
            }} {...props}>
                {children}
            </H5>
            }
            {as === 'h6' && <H6 style={{
                fontSize: size && size,
            }} {...props}>
                {children}
            </H6>
            }
        </>
    )
}