import Image from "next/image"
import { Check, KeyRound, DoorOpen, ShieldCheck, Bell } from "lucide-react"

const perks = [
  {
    icon: KeyRound,
    title: "Building codes, saved",
    description:
      "Store your lobby code once. Every courier gets it automatically — no buzzer chaos.",
  },
  {
    icon: DoorOpen,
    title: "Doorstep or lobby",
    description:
      "Set default drop-off per address. Meet at the door, grab from the lobby, whatever works.",
  },
  {
    icon: ShieldCheck,
    title: "Verified couriers",
    description:
      "Every rider is background-checked. Share live location with anyone in your household.",
  },
  {
    icon: Bell,
    title: "Quiet arrival",
    description:
      "Opt out of buzzer calls. We'll text when your food is downstairs — no 3am wake-ups.",
  },
]

export function ApartmentFeature() {
  return (
    <section id="apartments" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border">
              <Image
                src="/images/courier.jpg"
                alt="Corner courier delivering to an apartment building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-6 text-background">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/20 px-3 py-1.5 text-xs backdrop-blur">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  Live · Courier Ana is 2 min away
                </div>
              </div>
            </div>

            {/* Floating info card */}
            <div className="absolute -right-4 top-10 hidden w-64 rounded-2xl border border-border bg-card p-4 shadow-xl shadow-foreground/10 md:block">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Delivery to
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  On the way
                </span>
              </div>
              <div className="mt-2 font-medium">The Willow · Apt 4B</div>
              <div className="mt-1 text-xs text-muted-foreground">
                128 Willow St, Brooklyn
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-muted p-3 text-xs">
                <Check className="h-4 w-4 text-primary" />
                Lobby code #8421 shared with courier
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="mb-3 text-sm text-primary">Built for apartments</p>
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Delivery that understands{" "}
              <span className="font-serif italic">your building.</span>
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-muted-foreground">
              Every Corner address is a full profile of your home — lobby
              codes, elevators, preferred drop-off, quiet hours. Set it once,
              and every order just works.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
        </div>
      </div>
    </section>
  )
}
