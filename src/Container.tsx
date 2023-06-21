import React, { ReactNode } from 'react'
import styled from "styled-components";


export interface ContainerProps {
    children: ReactNode;

}

const StyledContainer = styled.div<ContainerProps> `
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    @media (min-width: 640px) {
        width: 640px;
    }
    @media (min-width: 768px) {
        width: 768px;
    }
    @media (min-width: 1024px) {
        width: 1024px;
    }
    @media (min-width: 1280px) {
        width: 1280px;
    }
`


export const Container: React.FC<ContainerProps> = ({
    children,

}) => {
    return (
        <StyledContainer >
            {children}
        </StyledContainer>
    )
}