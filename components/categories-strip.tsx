import {
  Pizza,
  Beef,
  Salad,
  Fish,
  Coffee,
  IceCream,
  Soup,
  Croissant,
  Cookie,
} from "lucide-react"

const categories = [
  { label: "Pizza", icon: Pizza },
  { label: "Burgers", icon: Beef },
  { label: "Healthy", icon: Salad },
  { label: "Sushi", icon: Fish },
  { label: "Coffee", icon: Coffee },
  { label: "Dessert", icon: IceCream },
  { label: "Ramen", icon: Soup },
  { label: "Bakery", icon: Croissant },
  { label: "Snacks", icon: Cookie },
]

export function CategoriesStrip() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center justify-between gap-4">
          <p className="shrink-0 text-sm text-muted-foreground">
            Browse cravings
          </p>
          <div className="hidden text-xs text-muted-foreground md:block">
            Scroll to explore →
          </div>
        </div>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="group flex shrink-0 items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-sm"
            >
              <Icon className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
