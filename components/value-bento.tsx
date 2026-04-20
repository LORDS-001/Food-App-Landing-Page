import Image from "next/image"
import { Flame, Users, Leaf, Wallet } from "lucide-react"

export function ValueBento() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm text-primary">Why Corner</p>
          <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
            A better way to{" "}
            <span className="font-serif italic">eat at home.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          {/* Big feature card with image */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card md:col-span-4 md:row-span-2">
            <div className="relative aspect-[16/10] md:aspect-auto md:h-full">
              <Image
                src="/images/vendor-tacos.jpg"
                alt="Freshly prepared tacos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-background md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/15 px-3 py-1.5 text-xs backdrop-blur">
                  <Flame className="h-3.5 w-3.5 text-primary" />
                  Always under 30 minutes
                </div>
                <h3 className="mt-4 max-w-md text-balance font-sans text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                  Hot food, every time — or the meal&apos;s on us.
                </h3>
                <p className="mt-3 max-w-md text-pretty text-sm text-background/80">
                  Thermal bags, smart routing, and a 30-minute guarantee.
                  Nothing arrives lukewarm.
                </p>
              </div>
            </div>
          </div>

          {/* Small cards */}
          <BentoCard
            icon={Users}
            title="Stack vendors in one cart"
            description="Pasta from one spot, tiramisu from another. Single cart, single delivery, one fee."
            className="md:col-span-2"
          />
          <BentoCard
            icon={Leaf}
            title="Support local, always"
            description="60% of our vendors are small, independent kitchens. We take less so they earn more."
            className="md:col-span-2"
          />
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <BentoWideCard
              icon={Wallet}
              label="Corner+ members"
              title="Free delivery, forever."
              description="$9.99/month for unlimited free delivery on orders over $15, priority couriers, and exclusive vendor drops."
              cta="See membership perks"
            />
            <BentoWideCard
              icon={Flame}
              label="For businesses"
              title="Feed your whole office."
              description="Group ordering, centralized billing, and a dedicated account manager for teams of any size."
              cta="Talk to our team"
              variant="primary"
            />
          </div>
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
      className={`flex flex-col justify-between gap-10 rounded-3xl border border-border bg-card p-6 md:p-8 ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-sans text-xl font-medium leading-tight tracking-tight">
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
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  title: string
  description: string
  cta: string
  variant?: "default" | "primary"
}) {
  const isPrimary = variant === "primary"
  return (
    <div
      className={`rounded-3xl border p-6 md:p-8 ${
        isPrimary
          ? "border-transparent bg-primary text-primary-foreground"
          : "border-border bg-card"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            isPrimary
              ? "bg-primary-foreground/15 text-primary-foreground"
              : "bg-primary/10 text-primary"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <span
          className={`text-xs ${
            isPrimary ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {label}
        </span>
      </div>
      <h3 className="mt-6 max-w-md font-sans text-2xl font-medium leading-tight tracking-tight md:text-3xl">
        {title}
      </h3>
      <p
        className={`mt-2 max-w-md text-sm leading-relaxed ${
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
        {cta} →
      </button>
    </div>
  )
}
