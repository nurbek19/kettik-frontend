import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-white data-[state=unchecked]:bg-white focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[50px] w-[96px] shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 switch-shadow relative",
        className
      )}
      {...props}
    >
      <div className="absolute left-0 right-0 flex justify-between items-center px-[10px]">
        <span className={`text-sm font-semibold ${props.checked ? '' : 'text-green'}`}>Eng</span>
        <span className={`text-sm font-semibold ${props.checked ? 'text-green' : ''}`}>Рус</span>
      </div>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground
          "pointer-events-none block w-[42px] h-[42px] rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[48px] data-[state=unchecked]:translate-x-1 thumb-shadow"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
