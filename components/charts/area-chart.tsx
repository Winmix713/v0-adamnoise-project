"use client"

import { useEffect, useRef } from "react"

// Add simplified prop for responsive rendering
interface AreaChartProps {
  color?: string
  simplified?: boolean
}

export function AreaChart({ color = "#22c55e", simplified = false }: AreaChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Sample data points - more realistic data with ups and downs
    const data = [
      60, 45, 65, 35, 50, 40, 55, 30, 45, 50, 65, 40, 50, 55, 45, 50, 60, 70, 65, 75, 60, 65, 55, 60, 70, 75, 65, 60,
      55, 45,
    ]

    // Chart dimensions
    const width = rect.width
    const height = rect.height
    const padding = { top: 10, right: 10, bottom: 10, left: 10 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Calculate x and y positions
    const xStep = chartWidth / (data.length - 1)
    const maxValue = Math.max(...data)
    const minValue = Math.min(...data) * 0.8 // Give some bottom padding

    // Start drawing
    ctx.clearRect(0, 0, width, height)

    // Draw grid lines for better readability (only if not simplified)
    if (!simplified) {
      ctx.beginPath()
      for (let i = 1; i <= 4; i++) {
        const y = padding.top + (chartHeight / 4) * i
        ctx.moveTo(padding.left, y)
        ctx.lineTo(width - padding.right, y)
      }
      ctx.strokeStyle = "#e5e7eb20" // Very light grid lines
      ctx.lineWidth = 1
      ctx.setLineDash([5, 5]) // Dashed line
      ctx.stroke()
      ctx.setLineDash([]) // Reset to solid line
    }

    // Draw area
    ctx.beginPath()
    ctx.moveTo(padding.left, height - padding.bottom)

    data.forEach((value, index) => {
      const x = padding.left + index * xStep
      const y = height - padding.bottom - ((value - minValue) / (maxValue - minValue)) * chartHeight
      ctx.lineTo(x, y)
    })

    ctx.lineTo(width - padding.right, height - padding.bottom)
    ctx.closePath()

    // Fill area with gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, `${color}33`) // 20% opacity
    gradient.addColorStop(1, `${color}00`) // 0% opacity
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw line
    ctx.beginPath()
    data.forEach((value, index) => {
      const x = padding.left + index * xStep
      const y = height - padding.bottom - ((value - minValue) / (maxValue - minValue)) * chartHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw dots at specific points (e.g., every 5th point) - fewer dots if simplified
    const dotInterval = simplified ? 10 : 5
    data.forEach((value, index) => {
      if (index % dotInterval === 0 || index === data.length - 1) {
        const x = padding.left + index * xStep
        const y = height - padding.bottom - ((value - minValue) / (maxValue - minValue)) * chartHeight

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, 2 * Math.PI)
        ctx.fillStyle = color
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, 2, 0, 2 * Math.PI)
        ctx.fillStyle = "#fff"
        ctx.fill()
      }
    })
  }, [color, simplified])

  return <canvas ref={canvasRef} className="h-full w-full" />
}
