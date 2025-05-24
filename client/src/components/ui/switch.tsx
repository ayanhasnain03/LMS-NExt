// components/ui/Switch.tsx
"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Check, X } from "lucide-react";  // install via `npm install lucide-react`
import { cn } from "@/lib/utils";

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  ariaLabelOn?: string;
  ariaLabelOff?: string;
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ariaLabelOn = "On", ariaLabelOff = "Off", ...props }, ref) => (
  <SwitchPrimitives.Root
    {...props}
    ref={ref}
    role="switch"
    aria-checked={!!props.checked}
    aria-label={props.checked ? ariaLabelOn : ariaLabelOff}
    className={cn(
      "relative inline-flex h-7 w-12 cursor-pointer items-center rounded-full transition-colors",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      // Track border
      "border-2 border-gray-300",
      // Track colors
      "data-[state=unchecked]:bg-customgreys-secondarybg",
      "data-[state=checked]:bg-primary-700",
      className
    )}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform",
        // Thumb border
        "",
        // Slide distance = track width(12) - thumb width(6)
        "data-[state=unchecked]:translate-x-0",
        "data-[state=checked]:translate-x-5"
      )}
    >
      {props.checked ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <X className="h-4 w-4 text-red-800" />
      )}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;
