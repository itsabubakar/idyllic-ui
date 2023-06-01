import React, { ReactNode } from "react";
import styled from "styled-components";

export interface ToastProp {
    children: ReactNode,

}



const ToastConc = styled.div<ToastProp>`
    
`;

export const Toast: React.FC<ToastProp> = ({
    children,
    ...props
}) => {
    return <ToastConc
        {...props}>
        {children}
    </ToastConc>
}