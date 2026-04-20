import Image from "next/image"
import { KeyRound, DoorOpen, ShieldCheck, Bell, Check } from "lucide-react"

const perks = [
  {
    icon: KeyRound,
    title: "Building codes, saved",
    description: "Store your lobby code once. Every courier gets it automatically — no buzzer chaos.",
  },
  {
    icon: DoorOpen,
    title: "Doorstep or lobby",
    description: "Set default drop-off per address. Meet at the door, grab from the lobby, whatever works.",
  },
  {
    icon: ShieldCheck,
    title: "Verified couriers",
    description: "Every rider is background-checked. Share live location with anyone in your household.",
  },
  {
    icon: Bell,
    title: "Quiet arrival",
    description: "Opt out of buzzer calls. We'll text when your food is downstairs — no 3am wake-ups.",
  },
]

export function ApartmentFeature() {
  return (
    <section id="apartments" className="relative border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* Copy */}
          <div className="md:col-span-6 md:order-1">
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-8 bg-border" />
              <span>03 / Built for apartments</span>
            </div>
            <h2 className="text-balance text-5xl font-medium leading-[0.95] tracking-tight md:text-6xl">
              Delivery that
              <br />
              understands{" "}
              <span className="font-serif italic text-primary">your building.</span>
            </h2>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Every knock address is a full profile of your home — lobby codes,
              elevator side, preferred drop-off, quiet hours. Set it once, and
              every order just works.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {perks.map((perk) => (
                <div key={perk.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <perk.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium leading-tight">{perk.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image + receipt */}
          <div className="relative md:col-span-6 md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src="/images/courier.jpg"
                alt="A knock courier at an apartment building lobby"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                  <span className="font-mono uppercase tracking-widest">
                    Ana · 2 min away
                  </span>
                </div>
              </div>
            </div>

            {/* Ticket card */}
            <div className="absolute -bottom-6 left-4 right-4 md:-left-8 md:-bottom-8 md:right-auto md:w-[360px]">
              <div className="relative rounded-2xl border border-border bg-background p-5 shadow-2xl ticket-edge">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>Delivery ticket</span>
                  <span className="text-primary">#A-4821</span>
                </div>
                <div className="mt-3 text-lg font-medium leading-tight">
                  The Willow · Apt 4B
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  128 Willow St, Brooklyn NY
                </div>
                <div className="my-4 flex items-center gap-2">
                  <div className="h-px flex-1 border-t border-dashed border-border" />
                </div>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-primary" />
                    <span>Lobby code #8421 shared</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-primary" />
                    <span>Meet at front desk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-primary" />
                    <span>No buzzer · text on arrival</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
