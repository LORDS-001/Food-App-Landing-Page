import Image from "next/image"
import { ArrowRight, Search, Star, Clock, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
              Now delivering in 42 cities
            </div>

            <h1 className="text-balance font-sans text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
              Your city&apos;s kitchens,{" "}
              <span className="font-serif italic text-primary">delivered</span>{" "}
              to your door.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Order from hundreds of independent restaurants, bakeries, and home
              kitchens. Hot food, straight to your apartment lobby in under 30
              minutes.
            </p>

            {/* Search bar */}
            <div className="mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 px-3 py-2">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter your apartment address"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button
                size="lg"
                className="h-11 gap-2 rounded-xl bg-primary px-5 text-primary-foreground hover:bg-primary/90"
              >
                Find food
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-6">
              <Stat value="1,200+" label="Local vendors" />
              <Stat value="28 min" label="Avg delivery" />
              <Stat value="4.9★" label="Rated by 80k" />
            </div>
          </div>

          {/* Right: image composition */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              {/* Main hero image */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-border bg-muted">
                <Image
                  src="/images/hero-dish.jpg"
                  alt="A warm bowl of fresh pasta ready for delivery"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating rating card */}
              <div className="absolute -left-6 top-10 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-5 shadow-lg shadow-foreground/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-medium">4.9 rating</div>
                  <div className="text-xs text-muted-foreground">
                    from 82,431 orders
                  </div>
                </div>
              </div>

              {/* Floating delivery card */}
              <div className="absolute -right-4 bottom-16 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-5 shadow-lg shadow-foreground/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-medium">Arriving in 22 min</div>
                  <div className="text-xs text-muted-foreground">
                    Courier 2 blocks away
                  </div>
                </div>
              </div>

              {/* Floating apartment card */}
              <div className="absolute -bottom-4 left-6 flex items-center gap-3 rounded-2xl bg-primary p-3 pr-5 text-primary-foreground shadow-xl shadow-primary/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/15">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-medium">Apt 4B — Willow St</div>
                  <div className="text-xs text-primary-foreground/80">
                    Meet at lobby · Code #8421
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl tracking-tight md:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs text-muted-foreground md:text-sm">
        {label}
      </div>
    </div>
  )
}
