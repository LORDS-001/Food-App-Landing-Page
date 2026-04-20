import Image from "next/image"
import { Star, Clock, ArrowUpRight } from "lucide-react"

type Vendor = {
  name: string
  cuisine: string
  image: string
  rating: number
  time: string
  deliveryFee: string
  badge?: string
}

const vendors: Vendor[] = [
  {
    name: "Pasta & Co.",
    cuisine: "Italian · Handmade",
    image: "/images/hero-dish.jpg",
    rating: 4.9,
    time: "20–30 min",
    deliveryFee: "$2.99",
    badge: "Top rated",
  },
  {
    name: "Flame & Bun",
    cuisine: "Burgers · Smash",
    image: "/images/vendor-burger.jpg",
    rating: 4.8,
    time: "25–35 min",
    deliveryFee: "Free",
    badge: "Free delivery",
  },
  {
    name: "Koji Sushi",
    cuisine: "Japanese · Omakase",
    image: "/images/vendor-sushi.jpg",
    rating: 4.9,
    time: "30–40 min",
    deliveryFee: "$3.49",
  },
  {
    name: "Forno 52",
    cuisine: "Wood-fired pizza",
    image: "/images/vendor-pizza.jpg",
    rating: 4.7,
    time: "20–30 min",
    deliveryFee: "$1.99",
    badge: "Trending",
  },
  {
    name: "Green Room",
    cuisine: "Bowls · Plant-based",
    image: "/images/vendor-salad.jpg",
    rating: 4.8,
    time: "15–25 min",
    deliveryFee: "$2.49",
  },
  {
    name: "Ippon Ramen",
    cuisine: "Japanese · Noodles",
    image: "/images/vendor-ramen.jpg",
    rating: 4.9,
    time: "25–35 min",
    deliveryFee: "$2.99",
    badge: "New",
  },
]

export function FeaturedVendors() {
  return (
    <section id="vendors" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm text-primary">Featured this week</p>
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              The best of your{" "}
              <span className="font-serif italic">neighborhood</span>, curated.
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
              From family-run kitchens to buzzy new openings — every vendor is
              hand-picked and rated by real neighbors.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-foreground underline-offset-4 hover:underline md:self-end"
          >
            See all 1,200 vendors
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.name} vendor={vendor} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={vendor.image || "/placeholder.svg"}
          alt={`${vendor.name} — ${vendor.cuisine}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {vendor.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
            {vendor.badge}
          </span>
        ) : null}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-background/95 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
          <Star className="h-3 w-3 fill-primary text-primary" />
          {vendor.rating}
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-medium tracking-tight">
            {vendor.name}
          </h3>
          <p className="mt-0.5 truncate text-sm text-muted-foreground">
            {vendor.cuisine}
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {vendor.time}
            </span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>{vendor.deliveryFee} delivery</span>
          </div>
        </div>
        <button
          aria-label={`Order from ${vendor.name}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <ArrowUpRight className="h-5 w-5" />
        </button>
      </div>
    </article>
  )
}
