"use client"

import { useState } from "react"
import { Pizza, Beef, Salad, Fish, Coffee, IceCream, Soup, Croissant, Cookie, Flame } from "lucide-react"

const categories = [
  { label: "All", icon: Flame, count: "1,200" },
  { label: "Pizza", icon: Pizza, count: "128" },
  { label: "Burgers", icon: Beef, count: "94" },
  { label: "Healthy", icon: Salad, count: "156" },
  { label: "Sushi", icon: Fish, count: "72" },
  { label: "Coffee", icon: Coffee, count: "211" },
  { label: "Dessert", icon: IceCream, count: "89" },
  { label: "Ramen", icon: Soup, count: "48" },
  { label: "Bakery", icon: Croissant, count: "63" },
  { label: "Late night", icon: Cookie, count: "37" },
]

export function CategoriesStrip() {
  const [active, setActive] = useState("All")

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Browse by craving
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:block">
            {categories.length} categories
          </p>
        </div>

        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden">
          {categories.map(({ label, icon: Icon, count }) => {
            const isActive = active === label
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-muted-foreground/40"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{label}</span>
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
