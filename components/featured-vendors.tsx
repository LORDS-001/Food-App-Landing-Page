import Image from "next/image"
import { Star, Clock, ArrowUpRight } from "lucide-react"

type Vendor = {
  name: string
  cuisine: string
  image: string
  rating: number
  time: string
  deliveryFee: string
  tag?: string
  featured?: boolean
}

const vendors: Vendor[] = [
  {
    name: "Nonna's",
    cuisine: "Italian / Handmade pasta",
    image: "/images/hero-dish.jpg",
    rating: 4.9,
    time: "22 min",
    deliveryFee: "$2.99",
    tag: "Top rated",
    featured: true,
  },
  {
    name: "Flame & Bun",
    cuisine: "Smash burgers",
    image: "/images/vendor-burger.jpg",
    rating: 4.8,
    time: "28 min",
    deliveryFee: "Free",
    tag: "Free fee",
  },
  {
    name: "Koji",
    cuisine: "Japanese / Omakase",
    image: "/images/vendor-sushi.jpg",
    rating: 4.9,
    time: "34 min",
    deliveryFee: "$3.49",
  },
  {
    name: "Forno 52",
    cuisine: "Wood-fired pizza",
    image: "/images/vendor-pizza.jpg",
    rating: 4.7,
    time: "24 min",
    deliveryFee: "$1.99",
    tag: "Trending",
  },
  {
    name: "Green Room",
    cuisine: "Grain bowls / Plant-based",
    image: "/images/vendor-salad.jpg",
    rating: 4.8,
    time: "18 min",
    deliveryFee: "$2.49",
  },
  {
    name: "Ippon",
    cuisine: "Tonkotsu ramen",
    image: "/images/vendor-ramen.jpg",
    rating: 4.9,
    time: "29 min",
    deliveryFee: "$2.99",
    tag: "New",
  },
  {
    name: "Taco Federal",
    cuisine: "Mexican / Street tacos",
    image: "/images/vendor-tacos.jpg",
    rating: 4.8,
    time: "21 min",
    deliveryFee: "$2.49",
  },
]

export function FeaturedVendors() {
  return (
    <section id="vendors" className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-8 bg-border" />
              <span>01 / Featured this week</span>
            </div>
            <h2 className="max-w-3xl text-balance text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
              Kitchens we&apos;re
              <br />
              <span className="font-serif italic text-primary">obsessed</span> with.
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            See all 1,200 vendors
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {vendors.map((vendor, idx) => (
            <VendorCard
              key={vendor.name}
              vendor={vendor}
              // first card spans wide, others regular
              className={
                idx === 0
                  ? "md:col-span-4 md:row-span-2"
                  : idx === 3
                    ? "md:col-span-2"
                    : "md:col-span-2"
              }
              large={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function VendorCard({
  vendor,
  className = "",
  large = false,
}: {
  vendor: Vendor
  className?: string
  large?: boolean
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 ${className}`}
    >
      <div className={`relative overflow-hidden bg-muted ${large ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
        <Image
          src={vendor.image || "/placeholder.svg"}
          alt={`${vendor.name} — ${vendor.cuisine}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

        {/* Top chips */}
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          {vendor.tag ? (
            <span className="rounded-full border border-border bg-background/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
              {vendor.tag}
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
            <Star className="h-3 w-3 fill-primary text-primary" />
            {vendor.rating}
          </span>
        </div>

        {/* Bottom content overlaid */}
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={`truncate font-medium tracking-tight text-foreground ${
                large ? "text-3xl md:text-4xl" : "text-xl"
              }`}
            >
              {vendor.name}
            </h3>
            <p className="mt-0.5 truncate text-xs text-muted-foreground">
              {vendor.cuisine}
            </p>
            <div className="mt-2 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {vendor.time}
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>{vendor.deliveryFee}</span>
            </div>
          </div>
          <button
            aria-label={`Order from ${vendor.name}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-[-45deg]"
          >
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  )
}
