import React from "react"

export interface InputProps {
    placeholder?: string,
    label?: string,
    type?: string,
    error?: boolean,
    width?: string,
    height?: string,
    cn?: string
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input: React.FC<InputProps> = ({
    cn,
    placeholder,
    label,
    type,
    error,
    width,
    height

}) => {
    return (
        <div className={`${width ? `${width}` : "w-32"} ${height ? `${height}` : "h-10"} ${cn ? `${cn}` : ""}`}>
            <div className="relative w-full h-full">
                <input
                    type={type}
                    className={`peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transistion-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${error ? 'focus:border-red-500 border-red-500' : 'focus:border-blue-500'}`}
                    placeholder={placeholder}
                />
                <label className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:before:border-l-2  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ${error ? "peer-focus:text-red-500 peer-focus:before:border-red-500 peer-focus:after:border-red-500" : "peer-focus:text-blue-500 peer-focus:before:border-blue-500 peer-focus:after:border-blue-500"}`}>
                    {label}
                </label>
            </div>
        </div>
    )
}
