"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Restaurants", href: "#vendors" },
  { label: "How it works", href: "#how" },
  { label: "For apartments", href: "#apartments" },
  { label: "Get the app", href: "#app" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="font-serif text-lg italic leading-none text-primary-foreground">k</span>
          </div>
          <span className="text-lg font-medium tracking-tight">knock.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono">Brooklyn, NY</span>
          </div>
          <Button
            variant="ghost"
            className="h-9 rounded-full text-sm text-foreground hover:bg-muted hover:text-foreground"
          >
            Sign in
          </Button>
          <Button className="h-9 rounded-full bg-secondary px-4 text-sm font-medium text-secondary-foreground hover:bg-secondary/90">
            Order now
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button
                variant="outline"
                className="h-11 rounded-full border-border bg-transparent text-foreground"
              >
                Sign in
              </Button>
              <Button className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Order now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
