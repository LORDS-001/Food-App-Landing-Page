import Image from "next/image"
import { Flame, Users, Leaf, Wallet, ArrowUpRight } from "lucide-react"

export function ValueBento() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-8 bg-border" />
              <span>04 / Why knock</span>
            </div>
            <h2 className="text-balance text-5xl font-medium leading-[0.95] tracking-tight md:text-6xl">
              A better way
              <br />
              to{" "}
              <span className="font-serif italic text-primary">eat at home.</span>
            </h2>
          </div>
          <div className="flex items-end md:col-span-7">
            <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Built for how you actually live. Fewer fees, better food, and a delivery
              network that respects your time and your neighbors&apos; sleep.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-6">
          {/* Big visual card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card md:col-span-4 md:row-span-2">
            <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[560px]">
              <Image
                src="/images/vendor-tacos.jpg"
                alt="Freshly prepared tacos arriving hot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 backdrop-blur">
                  <Flame className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[11px] uppercase tracking-widest">
                    30-minute guarantee
                  </span>
                </div>
                <h3 className="mt-5 max-w-md text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Hot food, every time — or the meal&apos;s on us.
                </h3>
                <p className="mt-4 max-w-md text-pretty text-sm text-muted-foreground md:text-base">
                  Thermal bags, smart routing, and a 30-minute promise. Nothing arrives lukewarm.
                </p>
              </div>
            </div>
          </div>

          <BentoCard
            icon={Users}
            title="Stack vendors in one cart"
            description="Pasta here, tiramisu there. Single cart, single courier, single fee."
            className="md:col-span-2"
          />
          <BentoCard
            icon={Leaf}
            title="Independent first"
            description="60% of our kitchens are small, local, and independent. We take less so they earn more."
            className="md:col-span-2"
          />

          <BentoWideCard
            icon={Wallet}
            label="Membership"
            title="knock+ — free delivery forever."
            description="$9.99/month. Unlimited free delivery on $15+ orders, priority couriers, and exclusive vendor drops."
            cta="See perks"
            className="md:col-span-3"
          />
          <BentoWideCard
            icon={Flame}
            label="For business"
            title="Feed your whole office."
            description="Group ordering, centralized billing, and a dedicated account manager for teams of any size."
            cta="Talk to sales"
            variant="primary"
            className="md:col-span-3"
          />
        </div>
      </div>
    </section>
  )
}

function BentoCard({
  icon: Icon,
  title,
  description,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      className={`flex flex-col justify-between gap-10 rounded-2xl border border-border bg-card p-6 md:p-8 ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-xl font-medium leading-tight tracking-tight md:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

function BentoWideCard({
  icon: Icon,
  label,
  title,
  description,
  cta,
  variant = "default",
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  title: string
  description: string
  cta: string
  variant?: "default" | "primary"
  className?: string
}) {
  const isPrimary = variant === "primary"
  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 ${
        isPrimary
          ? "border-transparent bg-primary text-primary-foreground"
          : "border-border bg-card"
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
            isPrimary
              ? "bg-primary-foreground/15 text-primary-foreground"
              : "bg-primary/10 text-primary"
          }`}
        >
          <Icon className="h-4.5 w-4.5" />
        </div>
        <span
          className={`font-mono text-[11px] uppercase tracking-widest ${
            isPrimary ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {label}
        </span>
      </div>
      <h3 className="mt-6 max-w-md text-2xl font-medium leading-tight tracking-tight md:text-3xl">
        {title}
      </h3>
      <p
        className={`mt-3 max-w-md text-sm leading-relaxed ${
          isPrimary ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
      <button
        className={`mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          isPrimary
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
        }`}
      >
        {cta}
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  )
}
