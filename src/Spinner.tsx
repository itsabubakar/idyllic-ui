import React from "react"

interface Spinnerprops {
  size?: string;
  color?: string;
}

export const Spinner: React.FC<Spinnerprops> = ({
  size,
  color,
}) => {
  return (
    <div
      className={`inline-block  animate-spin rounded-full border-4 border-solid  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] border-current ${color && `border-${color}`} ${size ? `${size}` : "w-8"} ${size ? `${size}` : "h-8"}`}
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
    </div>
  )
}