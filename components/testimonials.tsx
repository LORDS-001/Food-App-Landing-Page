import { Star } from "lucide-react"

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I live on the 14th floor. Corner is the first delivery app where the food actually shows up warm. The lobby-code feature is a quiet game-changer.",
    name: "Maya O.",
    role: "Brooklyn · Corner+ member",
    initials: "MO",
  },
  {
    quote:
      "Being able to order pasta from Pasta & Co and dessert from the bakery next door — in one cart, one delivery — saved my anniversary.",
    name: "Derek L.",
    role: "Williamsburg",
    initials: "DL",
  },
  {
    quote:
      "The couriers never buzz. My baby finally sleeps through dinner. Small thing, huge difference.",
    name: "Priya R.",
    role: "Astoria",
    initials: "PR",
  },
  {
    quote:
      "Our office of 40 uses Corner for weekly lunches. Group ordering means I stopped being a part-time cafeteria manager.",
    name: "Jordan T.",
    role: "Ops Lead, Fieldwork",
    initials: "JT",
  },
]

export function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm text-primary">Loved by 340k neighbors</p>
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Real people.{" "}
              <span className="font-serif italic">Real dinners.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                  aria-hidden
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">4.9 / 5</span> across
              80k+ ratings
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`flex flex-col justify-between gap-8 rounded-3xl border border-border p-6 ${
                i === 0 ? "bg-primary text-primary-foreground" : "bg-card"
              }`}
            >
              <blockquote
                className={`text-pretty text-[15px] leading-relaxed ${
                  i === 0 ? "" : "text-foreground"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                    i === 0
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {t.initials}
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div
                    className={`text-xs ${
                      i === 0
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
