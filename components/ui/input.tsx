import * as React from "react"

import { cn } from "@/lib/utils"
import { X } from 'lucide-react'

export type TInputProps = {
  icon: React.ReactNode,
  handleClear?: React.MouseEventHandler<SVGSVGElement> | undefined
}

function Input({ className, type, icon, handleClear, ...props }: React.ComponentProps<"input"> & TInputProps) {

  return (
    <div className='relative w-full'>
      <div className='absolute p-[4px]'>
        {icon}
      </div>
      <input
        type={type}
        data-slot="input"
        className={cn(
          'w-full h-8 border-2 rounded-sm pl-8 pr-8 focus:border-blue-600',
          'aria-invalid:border-red-600',
          className
        )}
        {...props}
      />
      <div className='absolute end-0 top-0 p-[4px]'>
        <X 
          className={cn(
            {'hidden':!props.value},
            ''
          )} 
          onClick={handleClear}/>
      </div>
    </div>
  )
}

export { Input }
