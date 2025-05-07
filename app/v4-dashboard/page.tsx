"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { V4Card, V4CardContent, V4CardHeader, V4CardTitle } from "@/components/ui/v4-card"
import { V4Button } from "@/components/ui/v4-button"
import { V4Badge } from "@/components/ui/v4-badge"
import { V4DashboardCard } from "@/components/dashboard/v4-dashboard-card"
import { AreaChart } from "@/components/charts/area-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { motion } from "framer-motion"
import { ArrowRight, DollarSign, ShoppingCart, Users } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function V4DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <V4Card className="p-6">
            <div className="flex flex-col @md:flex-row @md:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold tracking-tight mb-2">Tailwind v4 Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                  Enhanced dashboard with Tailwind CSS v4 features and improved performance
                </p>
              </div>
              <V4Button
                onClick={() => toast({ title: "Welcome", description: "Welcome to the Tailwind v4 Dashboard!" })}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </V4Button>
            </div>
          </V4Card>
        </motion.div>

        <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4 gap-6">
          <V4DashboardCard
            title="Total Revenue"
            value="$45,231.89"
            change={20.1}
            icon={<DollarSign className="h-4 w-4" />}
          />
          <V4DashboardCard title="Subscriptions" value="2,350" change={-5.2} icon={<Users className="h-4 w-4" />} />
          <V4DashboardCard title="Sales" value="12,234" change={10.3} icon={<ShoppingCart className="h-4 w-4" />} />
          <V4DashboardCard title="Active Users" value="573" change={8.4} icon={<Users className="h-4 w-4" />} />
        </div>

        <div className="grid grid-cols-1 @lg:grid-cols-2 gap-6">
          <V4Card hover="lift">
            <V4CardHeader>
              <V4CardTitle>Revenue Over Time</V4CardTitle>
            </V4CardHeader>
            <V4CardContent>
              <div className="h-[300px] w-full">
                <AreaChart color="#22c55e" />
              </div>
            </V4CardContent>
          </V4Card>

          <V4Card hover="lift">
            <V4CardHeader>
              <V4CardTitle>Sales Overview</V4CardTitle>
            </V4CardHeader>
            <V4CardContent>
              <div className="h-[300px] w-full">
                <BarChart />
              </div>
            </V4CardContent>
          </V4Card>
        </div>

        <div className="grid grid-cols-1 @md:grid-cols-3 gap-6">
          <V4Card className="@md:col-span-2" hover="shadow">
            <V4CardHeader>
              <V4CardTitle>Recent Transactions</V4CardTitle>
            </V4CardHeader>
            <V4CardContent>
              <div className="space-y-4">
                {[
                  { name: "Payment from John Doe", amount: "$250.00", status: "completed" },
                  { name: "Payment from Jane Smith", amount: "$890.00", status: "processing" },
                  { name: "Payment from Bob Johnson", amount: "$350.00", status: "completed" },
                  { name: "Payment from Alice Brown", amount: "$1,200.00", status: "failed" },
                  { name: "Payment from Charlie Davis", amount: "$550.00", status: "completed" },
                ].map((transaction, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg border @hover:bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-medium">{transaction.amount}</p>
                      <V4Badge
                        variant={
                          transaction.status === "completed"
                            ? "success"
                            : transaction.status === "processing"
                              ? "warning"
                              : "destructive"
                        }
                      >
                        {transaction.status}
                      </V4Badge>
                    </div>
                  </div>
                ))}
              </div>
            </V4CardContent>
          </V4Card>

          <V4Card hover="scale">
            <V4CardHeader>
              <V4CardTitle>Sales by Category</V4CardTitle>
            </V4CardHeader>
            <V4CardContent>
              <div className="space-y-4">
                {[
                  { name: "Electronics", percentage: 45, amount: "$12,430" },
                  { name: "Clothing", percentage: 30, amount: "$8,320" },
                  { name: "Food", percentage: 15, amount: "$4,180" },
                  { name: "Other", percentage: 10, amount: "$2,790" },
                ].map((category, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-sm text-muted-foreground">{category.amount}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${category.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </V4CardContent>
          </V4Card>
        </div>

        <V4Card className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 @dark:from-primary-900/20 @dark:to-primary-800/20 border-primary-200 @dark:border-primary-800/30">
          <div className="flex flex-col @md:flex-row items-start @md:items-center justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Tailwind CSS v4 Performance</h2>
              <p className="text-muted-foreground">
                This dashboard uses the latest Tailwind CSS v4 features for improved performance and developer
                experience.
              </p>
            </div>
            <div className="flex flex-col @sm:flex-row gap-3">
              <V4Button variant="outline">Learn More</V4Button>
              <V4Button>View Documentation</V4Button>
            </div>
          </div>
        </V4Card>
      </div>
    </DashboardShell>
  )
}
