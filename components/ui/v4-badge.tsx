import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-s border px-8 py-2 text-body-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground @hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground @hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground @hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-green-500/20 text-green-600 @dark:text-green-400",
        warning: "border-transparent bg-yellow-500/20 text-yellow-700 @dark:text-yellow-400",
        info: "border-transparent bg-blue-500/20 text-blue-700 @dark:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface V4BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function V4Badge({ className, variant, ...props }: V4BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { V4Badge, badgeVariants }
