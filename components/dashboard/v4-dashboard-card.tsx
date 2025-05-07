"use client"

import type React from "react"

import { useState } from "react"
import { V4Card, V4CardContent, V4CardHeader, V4CardTitle } from "@/components/ui/v4-card"
import { V4Badge } from "@/components/ui/v4-badge"
import { V4Button } from "@/components/ui/v4-button"
import { cn } from "@/lib/utils"
import { ArrowDown, ArrowUp, MoreHorizontal, RefreshCw } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface V4DashboardCardProps {
  title: string
  value: string | number
  change?: number
  changeLabel?: string
  icon?: React.ReactNode
  chart?: React.ReactNode
  loading?: boolean
  className?: string
}

export function V4DashboardCard({
  title,
  value,
  change,
  changeLabel = "vs last period",
  icon,
  chart,
  loading = false,
  className,
}: V4DashboardCardProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simulate data refresh
    setTimeout(() => {
      setIsRefreshing(false)
      toast({
        title: "Data refreshed",
        description: `${title} data has been updated.`,
      })
    }, 1500)
  }

  return (
    <V4Card className={cn("overflow-hidden", className)} hover="shadow">
      <V4CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <V4CardTitle className="text-base font-medium">{title}</V4CardTitle>
        <div className="flex items-center gap-2">
          {change !== undefined && (
            <V4Badge variant={change >= 0 ? "success" : "destructive"} className="flex items-center gap-1 h-6 px-2">
              {change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              {Math.abs(change)}%
            </V4Badge>
          )}
          <V4Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={cn("h-4 w-4", isRefreshing && "animate-spin")} />
            <span className="sr-only">Refresh data</span>
          </V4Button>
          <V4Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More options</span>
          </V4Button>
        </div>
      </V4CardHeader>
      <V4CardContent>
        <div className="flex flex-col">
          <div className="flex items-baseline @md:items-center gap-2 mb-1">
            {icon && <div className="text-muted-foreground">{icon}</div>}
            <div className={cn("text-2xl font-bold", loading && "animate-pulse")}>{loading ? "Loading..." : value}</div>
          </div>
          {change !== undefined && <p className="text-xs text-muted-foreground">{changeLabel}</p>}
          {chart && <div className="mt-4">{chart}</div>}
        </div>
      </V4CardContent>
    </V4Card>
  )
}
