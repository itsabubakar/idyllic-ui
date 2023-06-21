import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AlertProp {
    children: ReactNode,
    status: string,
    text: string,
    title: string,
}



const AlertConc = styled.div<AlertProp>`
    display: flex;
    gap: 6px;
    align-items: center;
    max-width: 600px;
    padding: 8px 18px;
    background-color: ${({ status }) => (status == 'error' ? '#fed7d7' : status == 'success' ? '#e2f0e2' : status == 'warning' ? '#feebc8' : status == 'info' ? '#BEE3F8' : '#e2f0e2')};
    color: #242424;
    font-size: 16px;
`;

export const Alert: React.FC<AlertProp> = ({
    children,
    title,
    text,
    status = 'error',
    ...props
}) => {
    return <AlertConc
        status={status}
        text={text}
        title={title}
        {...props}
    >
        {/* Icon conc */}

        {/* error #fed7d7 icon #e53e3e */}
        {
            status == 'error' && <div style={{
                height: '30px',
                width: '45px',
                marginLeft: '-10px',
            }}>

                <svg style={{
                    paddingRight: '20px',
                    width: '100%',
                    height: '100%'
                }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f05f5f" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>


            </div>
        }



        {/* success #e2e8f0  #38a169*/}
        {
            status == 'success' && <div style={{
                height: '30px',
                width: '45px',
                marginLeft: '-10px',
            }}>

                <svg
                    style={{
                        paddingRight: '20px',
                        width: '100%',
                        height: '100%'
                    }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#38a169" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>



            </div>
        }
        {/* warning #feebc8 #DD6B20*/}
        {
            status == 'warning' && <div style={{
                height: '30px',
                width: '45px',
                marginLeft: '-10px',
            }}>

                <svg
                    style={{
                        paddingRight: '20px',
                        width: '100%',
                        height: '100%'
                    }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#DD6B20" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>



            </div>
        }
        {/* info #BEE3F8  #3182CE*/}
        {
            status == 'info' && <div style={{
                height: '30px',
                width: '45px',
                marginLeft: '-10px',
            }}>

                <svg
                    style={{
                        paddingRight: '20px',
                        width: '100%',
                        height: '100%'
                    }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3182CE" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>



            </div>
        }

        {/* Title conc */}
        <span style={{
            padding: 0,
            margin: 0,
            fontWeight: 600,
        }}>
            {title}
        </span>

        <p style={{
            padding: 0,
            margin: 0,
        }}>
            {children ? children : text ? text : 'Pass info to text prop'}
        </p>

    </AlertConc>
}