import React from "react"

export interface Iconprops {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}

export const Avatar: React.FC<Iconprops> = ({
    size,
    color
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color ? color : 'currentColor'} className={` ${size === 'sm' ? `w-8 h-8` : size === 'md' ? `w-10 h-10` : size === 'lg' ? `w-12 h-12` : 'w-8 h-8'} `}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

    )
}


export const Menu: React.FC<Iconprops> = ({
    size,
    color
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color ? color : 'currentColor'} className={` ${size === 'sm' ? `w-8 h-8` : size === 'md' ? `w-10 h-10` : size === 'lg' ? `w-12 h-12` : 'w-8 h-8'} `}>t
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />

        </svg>

    )
}

export const Close: React.FC<Iconprops> = ({
    size,
    color
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color ? color : 'currentColor'} className={` ${size === 'sm' ? `w-8 h-8` : size === 'md' ? `w-10 h-10` : size === 'lg' ? `w-12 h-12` : 'w-8 h-8'} `}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

        </svg>

    )
}

export const ArrowLeft: React.FC<Iconprops> = ({
    size,
    color
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color ? color : 'currentColor'} className={` ${size === 'sm' ? `w-8 h-8` : size === 'md' ? `w-10 h-10` : size === 'lg' ? `w-12 h-12` : 'w-8 h-8'} `}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />

        </svg>

    )
}
export const ArrowRight: React.FC<Iconprops> = ({
    size,
    color
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color ? color : 'currentColor'} className={` ${size === 'sm' ? `w-8 h-8` : size === 'md' ? `w-10 h-10` : size === 'lg' ? `w-12 h-12` : 'w-8 h-8'} `}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />

        </svg>

    )
}
export const ArrowUp: React.FC<Iconprops> = ({
    size,
    color
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color ? color : 'currentColor'} className={` ${size === 'sm' ? `w-8 h-8` : size === 'md' ? `w-10 h-10` : size === 'lg' ? `w-12 h-12` : 'w-8 h-8'} `}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />

        </svg>

    )
}
export const ArrowDown: React.FC<Iconprops> = ({
    size,
    color
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color ? color : 'currentColor'} className={` ${size === 'sm' ? `w-8 h-8` : size === 'md' ? `w-10 h-10` : size === 'lg' ? `w-12 h-12` : 'w-8 h-8'} `}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />

        </svg>

    )
}