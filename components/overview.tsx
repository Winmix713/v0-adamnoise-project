"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AreaChart } from "@/components/charts/area-chart"
import { motion } from "framer-motion"

export function Overview() {
  const [timeframe, setTimeframe] = useState("Last 7 days")
  const [activeTab, setActiveTab] = useState("customers") // 'customers' or 'balance'

  const customers = [
    { name: "Gladyce", image: "/placeholder.svg?height=64&width=64&text=G" },
    { name: "Elbert", image: "/placeholder.svg?height=64&width=64&text=E" },
    { name: "Joyce", image: "/placeholder.svg?height=64&width=64&text=J" },
    { name: "John", image: "/placeholder.svg?height=64&width=64&text=J" },
    { name: "Elbert", image: "/placeholder.svg?height=64&width=64&text=E" },
    { name: "Joyce", image: "/placeholder.svg?height=64&width=64&text=J" },
    { name: "Anna", image: "/placeholder.svg?height=64&width=64&text=A" },
  ]

  return (
    <Card className="mb-24 shadow-m">
      <div className="flex items-center h-12 px-20 border-b">
        <div className="mr-auto text-heading-l font-semibold">Overview</div>
        <Button variant="outline" className="flex items-center gutter-4 h-12 px-16 rounded-l">
          {timeframe}
          <ChevronDown className="h-5 w-5 ml-8" />
        </Button>
      </div>

      <div className="pt-12">
        <div className="pt-4">
          <div className="flex mb-16 p-6 border rounded-[2rem] bg-muted/20 mx-20">
            <div
              className={`group flex-1 px-48 py-32 rounded-l cursor-pointer transition-all ${activeTab === "customers" ? "bg-background shadow-m" : ""}`}
              onClick={() => setActiveTab("customers")}
            >
              <div
                className={`flex items-center gutter-12 mb-8 text-heading-m font-medium ${activeTab === "customers" ? "text-primary" : "text-muted-foreground"}`}
              >
                <svg
                  className={`h-6 w-6 ${activeTab === "customers" ? "fill-primary" : "fill-muted-foreground"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M17 13.507a3.75 3.75 0 1 1 0 7.5H7a3.75 3.75 0 1 1 0-7.5h10zm0 1.5H7a2.25 2.25 0 1 0 0 4.5h10a2.25 2.25 0 1 0 0-4.5zM12 3a4.25 4.25 0 1 1 0 8.5A4.25 4.25 0 1 1 12 3zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 1 0 0-5.5z"></path>
                </svg>
                <div>Customers</div>
              </div>

              <div className="flex items-center gutter-16 max-md:flex-col max-md:items-stretch max-md:gap-4">
                <div className="text-display-s font-bold">1,293</div>
                <div>
                  <div className="inline-flex items-center gutter-4 px-6 rounded-s bg-red-500/10 text-red-500 h-7 text-body-s font-medium">
                    <svg className="h-4 w-4 fill-red-500" viewBox="0 0 24 24">
                      <path d="M12 5.5a1.1 1.1 0 0 1 1.098 1.102v9.327c.068-.051.133-.108.195-.17l1.833-1.84c.429-.43 1.124-.43 1.552 0s.429 1.128 0 1.558l-1.833 1.84c-1.572 1.578-4.12 1.578-5.691 0l-1.833-1.84c-.429-.43-.429-1.128 0-1.558s1.124-.43 1.552 0l1.833 1.84c.062.062.127.119.195.17l.001-9.327A1.1 1.1 0 0 1 12 5.5z"></path>
                    </svg>
                    36.8%
                  </div>
                  <div className="mt-4 text-body-s text-muted-foreground">vs last month</div>
                </div>
              </div>
            </div>

            <div
              className={`group flex-1 px-48 py-32 rounded-l cursor-pointer transition-all ${activeTab === "balance" ? "bg-background shadow-m" : ""}`}
              onClick={() => setActiveTab("balance")}
            >
              <div
                className={`flex items-center gutter-12 mb-8 text-heading-m font-medium ${activeTab === "balance" ? "text-primary" : "text-muted-foreground"}`}
              >
                <svg
                  className={`h-6 w-6 ${activeTab === "balance" ? "fill-primary" : "fill-muted-foreground"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M19.935 7.589l.838 3.232c.146.434.227.899.227 1.383v3.513a4.25 4.25 0 0 1-4.25 4.25h-9.5A4.25 4.25 0 0 1 3 15.717v-3.513c0-.256.023-.506.066-.749H3.01v-1.318a3.75 3.75 0 0 1 2.742-3.612l8.308-2.32a4.75 4.75 0 0 1 5.875 3.383zM16.75 9.455h-9.5a2.75 2.75 0 0 0-2.75 2.75v3.513a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-3.513a2.75 2.75 0 0 0-2.75-2.75zm-2.287-3.804l-8.308 2.32c-.326.091-.618.251-.863.462a4.22 4.22 0 0 1 1.958-.478h9.5c.659 0 1.283.15 1.84.418l-.107-.407a3.25 3.25 0 0 0-4.02-2.315z"></path>
                </svg>
                <div>Balance</div>
              </div>

              <div className="flex items-center gutter-16 max-md:flex-col max-md:items-stretch max-md:gap-4">
                <div className="text-display-s font-bold">256k</div>
                <div>
                  <div className="inline-flex items-center gutter-4 px-6 rounded-s bg-green-500/10 text-green-500 h-7 text-body-s font-medium">
                    <svg className="h-4 w-4 fill-green-500 rotate-180" viewBox="0 0 24 24">
                      <path d="M12 5.5a1.1 1.1 0 0 1 1.098 1.102v9.327c.068-.051.133-.108.195-.17l1.833-1.84c.429-.43 1.124-.43 1.552 0s.429 1.128 0 1.558l-1.833 1.84c-1.572 1.578-4.12 1.578-5.691 0l-1.833-1.84c-.429-.43-.429-1.128 0-1.558s1.124-.43 1.552 0l1.833 1.84c.062.062.127.119.195.17l.001-9.327A1.1 1.1 0 0 1 12 5.5z"></path>
                    </svg>
                    36.8%
                  </div>
                  <div className="mt-4 text-body-s text-muted-foreground">vs last month</div>
                </div>
              </div>
            </div>
          </div>

          {activeTab === "customers" ? (
            <div className="p-20">
              <div className="mb-24">
                <div className="text-heading-m font-medium">857 new customers today!</div>
                <div className="text-body-s text-muted-foreground">Send a welcome message to all new customers.</div>
              </div>

              <div className="flex overflow-hidden relative">
                <div className="absolute inset-y-0 -left-24 z-10 w-40 bg-gradient-to-r from-background to-transparent pointer-events-none hidden md:block"></div>
                <div className="absolute inset-y-0 -right-24 z-10 w-40 bg-gradient-to-l from-background to-transparent pointer-events-none hidden md:block"></div>

                <div className="flex overflow-auto scrollbar-hide">
                  {customers.map((customer, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 px-4 py-32 text-center min-w-[120px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Avatar className="h-16 w-16 mx-auto">
                        <AvatarImage src={customer.image || "/placeholder.svg"} alt={customer.name} />
                        <AvatarFallback>{customer.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="mt-16 text-body-s text-muted-foreground truncate">{customer.name}</div>
                    </motion.div>
                  ))}

                  <motion.div
                    className="flex-1 px-8 py-32 text-center min-w-[120px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: customers.length * 0.1 }}
                  >
                    <Link className="group inline-flex flex-col justify-center items-center" href="/customers">
                      <motion.div
                        className="flex justify-center items-center h-16 w-16 rounded-full border border-border transition-colors group-hover:border-primary group-hover:shadow-s"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ChevronRight className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                      </motion.div>
                      <div className="mt-16 text-body-s text-muted-foreground transition-colors group-hover:text-primary">
                        View all
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          ) : (
            <div className="pt-12 px-12 pb-4">
              <div className="h-[316px]">
                <BalanceChart />
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

function BalanceChart() {
  return (
    <div className="w-full h-full">
      <AreaChart color="#22c55e" />
    </div>
  )
}
