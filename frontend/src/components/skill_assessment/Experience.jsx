import React, { useId } from 'react'

function Experience({ label, className = "", option, setOption, ...props }, ref) {
    const id = useId()

    return (
        <div className='w-full mb-4'>
            <label htmlFor={id} className="font-semibold text-[#1F2833]">{label}</label>
            <input
                {...props}
                id={id}
                ref={ref}
                type="number"
                min={0}
                max={40}
                placeholder="Enter your experience (0–40)"
                value={option}
                onChange={(e) => {
                    const value = parseInt(e.target.value, 10)
                    if (value <= 40 && value >= 0) {
                        setOption(e.target.value)
                    }
                }}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            />
        </div>
    )
}

export default React.forwardRef(Experience)
