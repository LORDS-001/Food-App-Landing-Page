const names = [
  "Nonna's",
  "Shoyu Club",
  "Taco Federal",
  "Green Bowl Co.",
  "Slice & Dice",
  "Ember BBQ",
  "The Dumpling Post",
  "Saffron Kitchen",
  "Blue Crab House",
  "Okonomi Bar",
  "Coney's Deli",
  "Masa Matcha",
  "Ghost Noodle",
  "Orchard Cafe",
]

export function VendorMarquee() {
  return (
    <section aria-label="Featured restaurant partners" className="border-b border-border bg-background">
      <div className="py-6 md:py-8">
        <div className="relative flex overflow-hidden">
          <div className="marquee flex shrink-0 items-center gap-12 pr-12">
            {[...names, ...names].map((name, i) => (
              <div key={`${name}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
                <span className="font-serif text-3xl italic text-foreground/80 md:text-5xl">
                  {name}
                </span>
                <span className="text-primary" aria-hidden>
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
