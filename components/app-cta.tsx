import Image from "next/image"
import { Apple, Play, ArrowRight } from "lucide-react"

export function AppCta() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary text-secondary-foreground">
          <div className="grid grid-cols-1 items-center gap-10 p-8 md:p-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-3 text-sm text-primary">Get the app</p>
              <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
                Dinner is{" "}
                <span className="font-serif italic text-primary">
                  three taps
                </span>{" "}
                away.
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-secondary-foreground/70">
                Download Corner for iOS or Android. Your addresses, payment
                methods, and favorite vendors sync across every device.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-primary px-5 py-3.5 text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Apple className="h-6 w-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider text-primary-foreground/80">
                      Download on
                    </div>
                    <div className="text-sm font-medium">the App Store</div>
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 px-5 py-3.5 text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
                >
                  <Play className="h-6 w-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider text-secondary-foreground/70">
                      Get it on
                    </div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["bg-chart-1", "bg-chart-3", "bg-chart-2", "bg-chart-4"].map(
                    (c) => (
                      <div
                        key={c}
                        className={`h-8 w-8 rounded-full border-2 border-secondary ${c}`}
                      />
                    ),
                  )}
                </div>
                <div className="text-sm text-secondary-foreground/70">
                  Joined by{" "}
                  <span className="font-medium text-secondary-foreground">
                    340,000+
                  </span>{" "}
                  hungry neighbors
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
                <Image
                  src="/images/app-mockup.jpg"
                  alt="Corner app shown on a smartphone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* Decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
          />
        </div>
      </div>
    </section>
  )
}
