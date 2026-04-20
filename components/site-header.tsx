"use client"

import { useState } from "react"
import { Menu, X, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Restaurants", href: "#vendors" },
  { label: "How it works", href: "#how" },
  { label: "For apartments", href: "#apartments" },
  { label: "Become a vendor", href: "#vendors" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="font-serif text-lg italic leading-none">C</span>
          </div>
          <span className="font-serif text-2xl tracking-tight">Corner</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>Brooklyn, NY</span>
          </button>
          <Button
            variant="ghost"
            className="rounded-full text-sm"
            size="sm"
          >
            Sign in
          </Button>
          <Button
            className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
            size="sm"
          >
            Order now
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background md:hidden",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2 border-t border-border/60 pt-4">
            <Button variant="ghost" className="flex-1 rounded-full" size="sm">
              Sign in
            </Button>
            <Button
              className="flex-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              size="sm"
            >
              Order now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
