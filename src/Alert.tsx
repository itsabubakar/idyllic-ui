import React from "react"

export interface Alertprops {
    children: React.ReactNode,
    type?: "success" | "error" | "info" | "warning",
    className?: string

}

export const Alert: React.FC<Alertprops> = ({ children, type, className }) => {
    return (
        <>
            <div className={`font-regular relative block w-full rounded-lg  p-4 text-base leading-5 text-white opacity-100 ${type === "success" ? `bg-green-500 ${className ? className : ''}` :
                type === "error" ? `bg-red-500 ${className ? className : ''}` :
                    type === "info" ? `bg-blue-500 ${className ? className : ''}` :
                        type === "warning" ? `bg-orange-500 ${className ? className : ''}` :
                            `bg-blue-500 ${className ? className : ''}`}`}>
                {children}
            </div>

        </>
    )
}