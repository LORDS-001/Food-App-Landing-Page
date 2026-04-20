import { MapPin, UtensilsCrossed, Bike } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Drop your pin",
    description:
      "Enter your apartment address — we detect your building and show everything that delivers to your lobby.",
  },
  {
    number: "02",
    icon: UtensilsCrossed,
    title: "Pick from hundreds",
    description:
      "Browse local restaurants, home kitchens, and bakeries. Stack orders from multiple vendors in one cart.",
  },
  {
    number: "03",
    icon: Bike,
    title: "Meet at the door",
    description:
      "Track your courier in real-time. They'll reach you at the lobby, doorstep, or building code — your call.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-3 text-sm text-primary">How Corner works</p>
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Three taps.{" "}
              <span className="font-serif italic">One hot meal.</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-secondary-foreground/70">
              We built Corner around the way people actually live — in
              apartments, between meetings, with friends over. Getting fed
              should feel effortless.
            </p>
          </div>

          <ol className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-secondary-foreground/10 bg-secondary-foreground/10 md:grid-cols-3">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="flex flex-col justify-between gap-10 bg-secondary p-8"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm italic text-primary">
                        {step.number}
                      </span>
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-12 font-sans text-2xl font-medium leading-tight tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary-foreground/70">
                    {step.description}
                  </p>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  )
}
