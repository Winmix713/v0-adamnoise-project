"use client"

import { useEffect, useRef } from "react"

export function BarChart() {
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

    // Sample data points
    const data = [
      { value: 35, label: "14" },
      { value: 45, label: "15" },
      { value: 55, label: "16", highlight: true },
      { value: 80, label: "17" },
      { value: 65, label: "18" },
      { value: 40, label: "19", highlight: true },
      { value: 70, label: "20" },
    ]

    // Chart dimensions
    const width = rect.width
    const height = rect.height
    const padding = { top: 20, right: 20, bottom: 30, left: 20 }
    const chartWidth = width - (padding.left + padding.right)
    const chartHeight = height - (padding.top + padding.bottom)

    // Calculate bar width and spacing
    const barCount = data.length
    const barWidth = (chartWidth / barCount) * 0.6
    const barSpacing = (chartWidth / barCount) * 0.4

    // Find max value for scaling
    const maxValue = Math.max(...data.map((d) => d.value))

    // Start drawing
    ctx.clearRect(0, 0, width, height)

    // Draw grid lines for better readability
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

    // Draw bars
    data.forEach((item, index) => {
      const x = padding.left + index * (barWidth + barSpacing) + barSpacing / 2
      const barHeight = (item.value / maxValue) * chartHeight
      const y = height - padding.bottom - barHeight

      // Draw bar
      ctx.beginPath()
      ctx.roundRect(x, y, barWidth, barHeight, 4)

      if (item.highlight) {
        ctx.fillStyle = "#22c55e"

        // Draw "Now" label with improved positioning
        ctx.fillStyle = "#22c55e"
        ctx.beginPath()
        ctx.roundRect(x + barWidth / 2 - 15, y - 20, 30, 15, 4)
        ctx.fill()

        // Draw "Now" text with better contrast
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 10px Inter, sans-serif"
        ctx.textAlign = "center"
        ctx.fillText("Now", x + barWidth / 2, y - 10)

        // Draw bar
        ctx.fillStyle = "#22c55e"
      } else {
        ctx.fillStyle = "#333333"
      }

      ctx.fill()

      // Draw x-axis label
      ctx.fillStyle = "#888888"
      ctx.font = "10px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.label, x + barWidth / 2, height - 10)
    })
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" />
}
