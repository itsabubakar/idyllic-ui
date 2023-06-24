import React, { ReactNode } from "react";
import styled from "styled-components";

export interface TextProps {
    size?: string,
    children: ReactNode,
    color?: string,
    fw?: string,
    lh?: string,
    ls?: string,
    tt?: string,
    td?: string,
}



const TextConc = styled.p<TextProps>`
    font-size: ${({ size }) => (size ? size : "1rem")};
    color: ${({ color }) => (color ? color : "#2e2e2e")};
    font-weight: ${({ fw }) => (fw ? fw : "400")};
    line-height: ${({ lh }) => (lh ? lh : "1.3")};
    letter-spacing: ${({ lh }) => (lh ? lh : "0")};
    text-transform: ${({ tt }) => (tt ? tt : "none")};
    text-decoration: ${({ td }) => (td ? td : "none")};
`;

export const Text: React.FC<TextProps> = ({
    children,
    size,
    ...props
}) => {
    return <TextConc
        size={size}
        {...props}>
        {children}
    </TextConc>
}