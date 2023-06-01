import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AlertProp {
    children: ReactNode,
    status: string,
    text: string,
    title: string,
}



const AlertConc = styled.div<AlertProp>`
    
`;

export const Alert: React.FC<AlertProp> = ({
    children,
    title,
    text,
    status,
    ...props
}) => {
    return <AlertConc status={status} text={text} title={title}
        {...props}>
        {/* Icon conc */}
        <div>
            {/* error */}
            {/* success */}
            {/* warning */}
            {/* info */}
        </div>

        {/* Title conc */}
        <div style={{
            background: title ? '' : '',
        }}>
            {title}
        </div>

        <p>
            {children ? children : text ? text : 'Pass info to text prop'}
        </p>

    </AlertConc>
}