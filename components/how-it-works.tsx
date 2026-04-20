import { MapPin, UtensilsCrossed, Bike, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Drop your pin",
    description:
      "Enter your address. We detect your building and show everything that delivers to your lobby tonight.",
    meta: "Auto-detect apartments",
  },
  {
    number: "02",
    icon: UtensilsCrossed,
    title: "Order from anywhere",
    description:
      "Stack dishes from different vendors into one cart. Pad thai here, tiramisu there, no extra fees.",
    meta: "Multi-vendor baskets",
  },
  {
    number: "03",
    icon: Bike,
    title: "Meet at the door",
    description:
      "Track your courier live. Lobby, doorstep, or front desk — we use your saved preferences every time.",
    meta: "Live tracking",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-8 bg-border" />
              <span>02 / The process</span>
            </div>
            <h2 className="text-balance text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
              Three taps.
              <br />
              <span className="font-serif italic text-primary">One hot meal.</span>
            </h2>
          </div>
          <div className="flex items-end md:col-span-7">
            <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              We built knock around the way people actually live — in apartments,
              between meetings, with friends over. Getting fed should feel
              effortless.
            </p>
          </div>
        </div>

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className="relative flex flex-col justify-between gap-12 bg-background p-6 md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Step {step.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {step.meta}
                </div>
              </div>

              {i < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary md:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
