import React, { InputHTMLAttributes } from 'react'
import styled from "styled-components";


export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type: string;
    error?: boolean;
    label?: string;
}


const StyledFormControl = styled.div`
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    width: 200px;
`;


const StyledInput = styled.input<Props>`
    padding: 5px 10px;
    outline: none;
    border: none;
    width: 100%;
`;

const StyledLabel = styled.label`
    padding-bottom: 6px;
`;

export const FormInput: React.FC<Props> = ({
    type = 'text',
    label,
    children,
    error,
    placeholder,
    ...props
}) => {
    return (
        <StyledFormControl>
            {
                label && <StyledLabel>
                    {label}
                </StyledLabel>
            }

            <div style={{
                border: error ? '1px solid #f13232' : '1px solid #000000',
                display: 'flex',
                height: '30px',
            }}>
                {
                    type === 'search' && <svg style={{
                        padding: '2px 0 2px 10px',
                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#918e8e">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                }
                <StyledInput
                    placeholder={placeholder}
                    type={type}
                    {...props}
                />
                {
                    error && <svg style={{
                        paddingRight: '3px',
                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f05f5f" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                }


            </div>
        </StyledFormControl>
    )
}