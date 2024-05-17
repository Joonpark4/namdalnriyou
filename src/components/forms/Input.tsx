import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { InputLabelProps } from "@/types/Forms";

const InputLabel = forwardRef<HTMLInputElement, InputLabelProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="relative pt-2">
        <input
          type={type}
          className={cn(
            "peer flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={props.id}
            className={cn("absolute font-semibold text-gray-400 rounded-md transition ease-in-out left-2 top-4 px-1 peer-focus:bg-background peer-valid:bg-background peer-focus:scale-75 peer-focus:-translate-x-2 peer-focus:-translate-y-6 peer-valid:scale-75 peer-valid:-translate-x-2 peer-valid:-translate-y-6 pointer-events-none")}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

export default InputLabel;