import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { InputRHF } from '@/types/Forms';

const InputRHF = forwardRef<HTMLInputElement, InputRHF>(
  ({ className, type, label, id, watch, ...props }, ref) => {
    const fieldValue = watch ? watch(id) : null;

    const [isFocused, setIsFocused] = useState(false);
    const isPeer = fieldValue?.length > 0 || isFocused;

    return (
      <div className="relative pt-2">
        <input
          type={type}
          id={id}
          ref={ref}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {label && (
          <label
            htmlFor={id}
            className={`absolute font-semibold bg-background text-gray-400 rounded-md transition ease-in-out left-2 top-4 px-1 ${
              isPeer ? 'scale-75 -translate-x-2 -translate-y-5' : ''
            } pointer-events-none`}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
export default InputRHF;
