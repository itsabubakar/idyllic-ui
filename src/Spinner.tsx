import React from "react";
import styled, { keyframes } from "styled-components";

export interface SpinnerProps {
    width?: string,
    height?: string,
    borderWidth?: string,
    borderColor?: string,
    duration?: number,
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled.div<SpinnerProps>`
height: ${(p) => (p.height ? p.height : "4rem")};
width: ${(p) => (p.width ? p.width : "4rem")};
border: ${(p) => (p.borderWidth ? p.borderWidth : "4px")} solid #d1d5db;
border-top-color: ${(p) => (p.borderColor ? p.borderColor : "#2e2e2e")};
border-radius: 50%;
animation: ${rotate360}
  ${(p) => (p.duration ? `${p.duration}ms` : "800ms")} linear infinite;
`;

export const Spinner: React.FC<SpinnerProps> = ({
    width,
    height,
    borderWidth,
    borderColor,
    duration,
    ...props
}) => {
    return <SpinnerIcon
        width={width}
        height={height}
        borderWidth={borderWidth}
        borderColor={borderColor}
        duration={duration}
        {...props} />
}