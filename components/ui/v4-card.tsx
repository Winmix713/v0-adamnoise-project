import * as React from "react"
import { cn } from "@/lib/utils"

export interface V4CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: "scale" | "shadow" | "lift" | "none"
}

const V4Card = React.forwardRef<HTMLDivElement, V4CardProps>(
  ({ className, hover = "none", children, ...props }, ref) => {
    const hoverClass =
      hover === "scale" ? "hover-scale" : hover === "shadow" ? "hover-shadow" : hover === "lift" ? "hover-lift" : ""

    return (
      <div
        ref={ref}
        className={cn("rounded-l border bg-card text-card-foreground shadow-m", hoverClass, className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)
V4Card.displayName = "V4Card"

interface V4CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const V4CardHeader = React.forwardRef<HTMLDivElement, V4CardHeaderProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-8 p-16 @md:p-20", className)} {...props} />
))
V4CardHeader.displayName = "V4CardHeader"

interface V4CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const V4CardTitle = React.forwardRef<HTMLHeadingElement, V4CardTitleProps>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-heading-m font-semibold leading-none tracking-tight", className)} {...props} />
))
V4CardTitle.displayName = "V4CardTitle"

interface V4CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const V4CardDescription = React.forwardRef<HTMLParagraphElement, V4CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-body-s text-muted-foreground", className)} {...props} />
  ),
)
V4CardDescription.displayName = "V4CardDescription"

interface V4CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const V4CardContent = React.forwardRef<HTMLDivElement, V4CardContentProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-16 pt-0 @md:p-20 @md:pt-0", className)} {...props} />
))
V4CardContent.displayName = "V4CardContent"

interface V4CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const V4CardFooter = React.forwardRef<HTMLDivElement, V4CardFooterProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-16 pt-0 @md:p-20 @md:pt-0", className)} {...props} />
))
V4CardFooter.displayName = "V4CardFooter"

export { V4Card, V4CardHeader, V4CardTitle, V4CardDescription, V4CardContent, V4CardFooter }
