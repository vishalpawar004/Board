// "use client"

// import * as React from "react"
// import * as TooltipPrimitive from "@radix-ui/react-tooltip"

// import { cn } from "@/lib/utils"

// const TooltipProvider = TooltipPrimitive.Provider

// const Tooltip = TooltipPrimitive.Root

// const TooltipTrigger = TooltipPrimitive.Trigger

// const TooltipContent = React.forwardRef<
//   React.ElementRef<typeof TooltipPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
// >(({ className, sideOffset = 4, ...props }, ref) => (
//   <TooltipPrimitive.Content
//     ref={ref}
//     sideOffset={sideOffset}
//     className={cn(
//       "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//       className
//     )}
//     {...props}
//   />
// ))
// TooltipContent.displayName = TooltipPrimitive.Content.displayName

// export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }




import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils"; // Utility to merge classNames (optional)

// TooltipProvider (wrap your app or part where tooltips are used)
const TooltipProvider = TooltipPrimitive.Provider;

// TooltipRoot (Tooltip)
const Tooltip = TooltipPrimitive.Root;

// TooltipTrigger (the element that shows tooltip on hover/focus)
const TooltipTrigger = TooltipPrimitive.Trigger;

// TooltipPortal (renders tooltip in portal for overlay)
const TooltipPortal = TooltipPrimitive.Portal;

// TooltipArrow (small arrow pointing to trigger)
const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>((props, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className="fill-current text-black" // Adjust color here
    {...props}
  />
));
TooltipArrow.displayName = "TooltipArrow";

// TooltipContent (the tooltip box)
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    sideOffset?: number;
  }
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPortal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 rounded-md border border-gray-800 bg-black px-3 py-1.5 text-sm text-white shadow-md animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {props.children}
      <TooltipArrow />
    </TooltipPrimitive.Content>
  </TooltipPortal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName || "TooltipContent";

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
};
