// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip";

// export interface HintProps {
//     label: string;
//     children: React.ReactNode;
//     side?: "top" | "bottom" | "left" | "right";
//     align?: "start" | "center" | "end";
//     sideOffset?: number;
//     alignOffset?: number;
// }

// export function Hint({
//     label,
//     children,
//     side,
//     align,
//     sideOffset,
//     alignOffset,
// }: HintProps) {
//     return (
//         <TooltipProvider>
//             <Tooltip delayDuration={100} disableHoverableContent>
//                 <TooltipTrigger asChild>{children}</TooltipTrigger>
//                 <TooltipContent
//                     className="text-white bg-black border-black"
//                     side={side}
//                     align={align}
//                     sideOffset={sideOffset}
//                     alignOffset={alignOffset}
//                 >
//                     <p className="font-semibold capitalize">{label}</p>
//                 </TooltipContent>
//             </Tooltip>
//         </TooltipProvider>
//     );
// }
'use client';

import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export interface HintProps {
    label: string;
    children: React.ReactElement; // Ensure only single ReactElement
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
}

export function Hint({
    label,
    children,
    side = "top",
    align = "center",
    sideOffset = 8,
    alignOffset = 0,
}: HintProps) {
    if (!React.isValidElement(children)) {
        throw new Error("Hint expects a single valid React element as a child.");
    }

    return (
        <TooltipProvider>
            <Tooltip delayDuration={100} disableHoverableContent>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className="text-white bg-black border-black px-3 py-1 rounded shadow-md text-sm"
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    alignOffset={alignOffset}
                >
                    <p className="font-semibold capitalize">{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
