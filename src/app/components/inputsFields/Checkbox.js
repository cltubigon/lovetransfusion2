import React, { forwardRef } from 'react'
import Icon_check2 from '../icons/Icon_check2'
import { twMerge } from 'tailwind-merge'

// Example:
// <Checkbox id="savePassword" {...register('savePassword')}>
// Remember me
// </Checkbox>

const Checkbox = forwardRef(function Checkbox(
  { children, className, ...props },
  ref
) {
  return (
    <div className={'flex items-center justify-start'}>
      <input
        type="checkbox"
        className="peer appearance-none"
        ref={ref}
        {...props}
      />
      <div
        className={
          'peer-checked:hidden min-w-4 min-h-4 border-[1px] rounded-[3px] border-[#D1D5DB] relative'
        }
      ></div>
      <div
        className={
          'hidden peer-checked:block bg-primary-200 min-w-4 min-h-4 border-[1px] rounded-[3px] border-[#D1D5DB] relative'
        }
      >
        <Icon_check2
          className={
            'text-primary absolute min-w-5 min-h-5 mx-auto my-auto top-[-4px] bottom-0 left-[-1px] right-0'
          }
        />
      </div>
      <label
        htmlFor={props.id}
        className={twMerge('z-10 select-none pl-6 ml-[-16px]', className)}
      >
        {children}
      </label>
    </div>
  )
})

export default Checkbox
