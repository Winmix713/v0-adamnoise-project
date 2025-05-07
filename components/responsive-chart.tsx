"use client"

import { useResizeObserver } from "@/hooks/use-resize-observer"
import { AreaChart } from "@/components/charts/area-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from "react"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
// Add import for toast if needed
import { toast } from "@/hooks/use-toast"

interface ResponsiveChartProps {
  title: string
  description?: string
}

export function ResponsiveChart({ title, description }: ResponsiveChartProps) {
  const [ref, size] = useResizeObserver<HTMLDivElement>()
  const [chartType, setChartType] = useState<"area" | "bar">("area")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Determine if we should show a simplified version based on width
  const isSmallWidth = size.width && size.width < 400

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Handle chart type change with loading state
  const handleChartTypeChange = (value: string) => {
    setIsLoading(true)
    setChartType(value as "area" | "bar")

    // Simulate loading delay when switching chart types
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  return (
    <Card className="h-full">
      <CardHeader className="p-4 space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          <Tabs value={chartType} onValueChange={handleChartTypeChange}>
            <TabsList className="h-8">
              <TabsTrigger value="area" className="text-xs px-2">
                Area
              </TabsTrigger>
              <TabsTrigger value="bar" className="text-xs px-2">
                Bar
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent className="p-4">
        <div ref={ref} className="w-full h-[200px] relative">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500">
              <AlertCircle className="h-8 w-8 mb-2" />
              <p className="text-sm">{error}</p>
              <Button variant="outline" size="sm" className="mt-2" onClick={() => setError(null)}>
                Retry
              </Button>
            </div>
          ) : (
            <>
              {chartType === "area" ? (
                <AreaChart color="#22c55e" simplified={isSmallWidth} />
              ) : (
                <BarChart simplified={isSmallWidth} />
              )}
            </>
          )}
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          {size.width && size.height ? (
            <div className="flex justify-between items-center">
              <p>
                Chart dimensions: {Math.round(size.width)}px × {Math.round(size.height)}px
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs"
                onClick={() => {
                  // Simulate error for demonstration
                  if (Math.random() > 0.8) {
                    setError("Failed to refresh chart data")
                    toast({
                      title: "Error",
                      description: "Failed to refresh chart data.",
                      variant: "destructive",
                    })
                  } else {
                    setIsLoading(true)
                    setTimeout(() => setIsLoading(false), 800)
                    toast({
                      title: "Success",
                      description: "Chart data refreshed.",
                    })
                  }
                }}
              >
                Refresh
              </Button>
            </div>
          ) : (
            <p>Measuring chart dimensions...</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
