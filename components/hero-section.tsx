import Image from "next/image"
import { ArrowUpRight, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] grid-lines" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 pt-10 pb-16 md:px-8 md:pt-16 md:pb-24">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground md:mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
            <span className="font-mono uppercase tracking-widest">Live in 12 cities</span>
          </div>
          <span className="font-mono uppercase tracking-widest">Issue No. 04 / Spring 26</span>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <h1 className="text-balance text-[14vw] font-medium leading-[0.92] tracking-[-0.04em] md:text-[128px]">
              {"The city's best"}
              <br />
              kitchens,{" "}
              <span className="font-serif italic text-primary">delivered</span>
              <br />
              to your door.
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Knock brings together 1,200+ independent vendors across your city — from the
              taqueria down the block to the dim sum spot you keep meaning to try. One
              basket, one courier, one knock.
            </p>

            <form className="mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-border bg-card p-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 px-3 text-muted-foreground sm:flex-1">
                <span className="shrink-0 font-mono text-xs uppercase tracking-widest">
                  Deliver to
                </span>
                <input
                  type="text"
                  placeholder="123 Grand St, Apt 4B"
                  className="w-full flex-1 bg-transparent py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                className="h-11 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Find food
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>Avg. 24 min to your door</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                <span>4.9 from 180k riders</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/hero-dish.jpg"
                alt="Signature creamy pasta dish from a featured vendor"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-border bg-background/90 p-3 backdrop-blur-md">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>Order #A-4821</span>
                  <span className="text-primary">On the way</span>
                </div>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium leading-tight">Truffle Rigatoni</p>
                    <p className="text-xs text-muted-foreground">{"Nonna's, Soho · 1.2 mi"}</p>
                  </div>
                  <span className="font-mono text-xs text-foreground">8 min</span>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-2/3 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "1,200+", v: "Local vendors" },
            { k: "24 min", v: "Median delivery" },
            { k: "12", v: "Cities served" },
            { k: "4.9", v: "Rider rating" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-5 md:p-6">
              <div className="text-3xl font-medium tracking-tight md:text-4xl">{s.k}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
