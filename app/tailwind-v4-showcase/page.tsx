"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import {
  V4Card,
  V4CardContent,
  V4CardDescription,
  V4CardFooter,
  V4CardHeader,
  V4CardTitle,
} from "@/components/ui/v4-card"
import { V4Button } from "@/components/ui/v4-button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Code, Cpu, Zap } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function TailwindV4ShowcasePage() {
  const [activeTab, setActiveTab] = useState("features")

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <V4Card className="p-6">
            <div className="flex flex-col @md:flex-row @md:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold tracking-tight mb-2">Tailwind CSS v4 Features</h1>
                <p className="text-sm text-muted-foreground">
                  Showcasing the new features and improvements in Tailwind CSS v4
                </p>
              </div>
              <V4Button
                onClick={() => toast({ title: "Tailwind v4", description: "Using the new @ syntax for variants!" })}
              >
                Try It Out <Zap className="ml-2 h-4 w-4" />
              </V4Button>
            </div>
          </V4Card>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="features" className="data-[state=active]:@dark:bg-primary/20">
              Features
            </TabsTrigger>
            <TabsTrigger value="syntax" className="data-[state=active]:@dark:bg-primary/20">
              @ Syntax
            </TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:@dark:bg-primary/20">
              Performance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="animate-fade-in">
            <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3 gap-6">
              <V4Card hover="scale">
                <V4CardHeader>
                  <V4CardTitle>Native CSS Variables</V4CardTitle>
                </V4CardHeader>
                <V4CardContent className="space-y-4">
                  <p>
                    Tailwind CSS v4 uses native CSS variables for colors and other values, resulting in better
                    performance and smaller bundle sizes.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-4 rounded bg-[--primary] text-[--primary-foreground]">Primary</div>
                    <div className="p-4 rounded bg-[--secondary] text-[--secondary-foreground]">Secondary</div>
                    <div className="p-4 rounded bg-[--accent] text-[--accent-foreground]">Accent</div>
                    <div className="p-4 rounded bg-[--muted] text-[--muted-foreground]">Muted</div>
                  </div>
                </V4CardContent>
              </V4Card>

              <V4Card hover="shadow">
                <V4CardHeader>
                  <V4CardTitle>New @ Syntax</V4CardTitle>
                </V4CardHeader>
                <V4CardContent className="space-y-4">
                  <p>The new @ syntax for variants makes your code more readable and easier to understand.</p>
                  <div className="space-y-2">
                    <div className="@hover:bg-primary @hover:text-primary-foreground p-4 rounded border">
                      Hover over this element
                    </div>
                    <div className="@md:flex @md:items-center @md:gap-2 p-4 rounded border">
                      Flex layout at md breakpoint
                    </div>
                    <div className="@dark:bg-primary @dark:text-primary-foreground p-4 rounded border">
                      Different color in dark mode
                    </div>
                  </div>
                </V4CardContent>
              </V4Card>

              <V4Card hover="lift">
                <V4CardHeader>
                  <V4CardTitle>Hover Effects</V4CardTitle>
                </V4CardHeader>
                <V4CardContent>
                  <div className="space-y-4">
                    <p>Try hovering over these cards to see different effects:</p>
                    <div className="grid grid-cols-1 @sm:grid-cols-3 gap-2">
                      <div className="hover-scale p-4 rounded border text-center">
                        <p className="font-medium">Scale</p>
                      </div>
                      <div className="hover-shadow p-4 rounded border text-center">
                        <p className="font-medium">Shadow</p>
                      </div>
                      <div className="hover-lift p-4 rounded border text-center">
                        <p className="font-medium">Lift</p>
                      </div>
                    </div>
                  </div>
                </V4CardContent>
              </V4Card>
            </div>
          </TabsContent>

          <TabsContent value="syntax" className="animate-fade-in">
            <V4Card>
              <V4CardHeader>
                <V4CardTitle>@ Syntax Examples</V4CardTitle>
                <V4CardDescription>
                  The new @ syntax makes your code more readable and easier to understand
                </V4CardDescription>
              </V4CardHeader>
              <V4CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Hover States</h3>
                    <div className="grid grid-cols-1 @md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Old Syntax:</p>
                        <pre className="p-4 rounded bg-muted overflow-x-auto">
                          <code>hover:bg-blue-500 hover:text-white</code>
                        </pre>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">New Syntax:</p>
                        <pre className="p-4 rounded bg-muted overflow-x-auto">
                          <code>@hover:bg-blue-500 @hover:text-white</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Media Queries</h3>
                    <div className="grid grid-cols-1 @md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Old Syntax:</p>
                        <pre className="p-4 rounded bg-muted overflow-x-auto">
                          <code>md:flex md:items-center md:gap-4</code>
                        </pre>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">New Syntax:</p>
                        <pre className="p-4 rounded bg-muted overflow-x-auto">
                          <code>@md:flex @md:items-center @md:gap-4</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Dark Mode</h3>
                    <div className="grid grid-cols-1 @md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Old Syntax:</p>
                        <pre className="p-4 rounded bg-muted overflow-x-auto">
                          <code>dark:bg-gray-800 dark:text-white</code>
                        </pre>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">New Syntax:</p>
                        <pre className="p-4 rounded bg-muted overflow-x-auto">
                          <code>@dark:bg-gray-800 @dark:text-white</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </V4CardContent>
              <V4CardFooter className="flex justify-between">
                <Badge variant="outline">Tailwind v4</Badge>
                <V4Button variant="ghost" size="sm" className="gap-1">
                  <Code className="h-4 w-4" /> View Documentation
                </V4Button>
              </V4CardFooter>
            </V4Card>
          </TabsContent>

          <TabsContent value="performance" className="animate-fade-in">
            <V4Card>
              <V4CardHeader>
                <V4CardTitle>Performance Improvements</V4CardTitle>
                <V4CardDescription>
                  Tailwind CSS v4 uses LightningCSS for significantly faster build times
                </V4CardDescription>
              </V4CardHeader>
              <V4CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col @md:flex-row gap-6">
                    <div className="flex-1 p-6 rounded-lg border bg-muted/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-green-500/10">
                          <Zap className="h-5 w-5 text-green-500" />
                        </div>
                        <h3 className="text-lg font-medium">Faster Build Times</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        LightningCSS provides up to 10-20x faster build times compared to the previous PostCSS-based
                        solution.
                      </p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Significantly reduced development server startup time</li>
                        <li>Faster hot module replacement</li>
                        <li>Improved production build performance</li>
                      </ul>
                    </div>

                    <div className="flex-1 p-6 rounded-lg border bg-muted/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-blue-500/10">
                          <Cpu className="h-5 w-5 text-blue-500" />
                        </div>
                        <h3 className="text-lg font-medium">Optimized Output</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Improved CSS output with better minification and browser support.
                      </p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Smaller bundle sizes</li>
                        <li>Better browser compatibility</li>
                        <li>Advanced CSS minification</li>
                        <li>Improved CSS variable handling</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg border bg-muted/20">
                    <h3 className="text-lg font-medium mb-4">Key Improvements</h3>
                    <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4 gap-4">
                      {[
                        { title: "Build Speed", value: "10-20x faster" },
                        { title: "Bundle Size", value: "~15% smaller" },
                        { title: "Memory Usage", value: "Reduced by ~40%" },
                        { title: "Browser Support", value: "Improved" },
                      ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-lg border bg-card">
                          <p className="text-sm text-muted-foreground">{stat.title}</p>
                          <p className="text-xl font-bold">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </V4CardContent>
              <V4CardFooter>
                <V4Button className="w-full @md:w-auto">
                  Try Tailwind v4 <ArrowRight className="ml-2 h-4 w-4" />
                </V4Button>
              </V4CardFooter>
            </V4Card>
          </TabsContent>
        </Tabs>

        <V4Card className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 @dark:from-primary-900/20 @dark:to-primary-800/20 border-primary-200 @dark:border-primary-800/30">
          <div className="flex flex-col @md:flex-row items-start @md:items-center justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Ready to upgrade to Tailwind CSS v4?</h2>
              <p className="text-muted-foreground">
                Experience faster builds, smaller bundles, and improved developer experience.
              </p>
            </div>
            <div className="flex flex-col @sm:flex-row gap-3">
              <V4Button variant="outline" onClick={() => setActiveTab("features")}>
                Explore Features
              </V4Button>
              <V4Button onClick={() => window.open("https://tailwindcss.com", "_blank")}>
                Get Started <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
              </V4Button>
            </div>
          </div>
        </V4Card>
      </div>
    </DashboardShell>
  )
}
