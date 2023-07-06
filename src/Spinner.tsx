import React from "react"

export interface Spinnerprops {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const Spinner: React.FC<Spinnerprops> = ({
  size,
  color,
}) => {
  return (
    <div
      className={`inline-block  animate-spin rounded-full border-4 border-solid  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] border-current ${color && `border-${color}`} ${size === 'sm' ? "w-8 h-8" : size === 'md' ? "w-10 h-10" : size === 'lg' ? "w-12 h-12" : "w-8 h-8"}`}
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
    </div>
  )
}