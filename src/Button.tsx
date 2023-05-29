import React, { HTMLAttributes, ReactNode } from 'react'
import styled from "styled-components";


export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary';
    size: string;
    disabled?: boolean;
    loading?: boolean;
}

const StyledButton = styled.button<Props>` 
@keyframes spin-anim {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
border: 1px solid #2e2e2e;
background: none;
color: #2e2e2e;
min-width: 80px;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  display: inline-block;
  padding: ${(props) =>
        props.size === "sm"
            ? "7px 8px"
            : props.size === "md"
                ? "8px 10px"
                : "10px 14px"};
  
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    color: #fff;
    border: ${(props) => (props.variant == 'primary' ? "1px solid #2e2e2e" : "1px solid #727272")};
    background-color: ${(props) => (props.variant == 'primary' ? "#2e2e2e" : "#727272")};
  }
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

const Spinner = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-color: #5a5a5a transparent #5a5a5a transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;
`

export const Button: React.FC<Props> = ({
    size,
    disabled,
    children,
    variant = 'primary',
    loading,
    ...props
}) => {
    return (
        <StyledButton
            variant={variant}
            type="button"
            disabled={disabled}
            size={size}
            {...props}>
            {loading ? <>
                <Loading>
                    <Spinner />
                </Loading>
            </> : <>{children}</>}

        </StyledButton>
    )
}