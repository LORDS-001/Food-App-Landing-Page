import { Instagram, Twitter, Youtube } from "lucide-react"

const columns = [
  {
    title: "Eat",
    links: [
      "Browse vendors",
      "Categories",
      "New arrivals",
      "Group orders",
      "Gift cards",
    ],
  },
  {
    title: "Work with us",
    links: [
      "Become a vendor",
      "Deliver with Corner",
      "For apartments",
      "For offices",
      "Press",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Sustainability", "Newsroom", "Contact"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-lg italic leading-none">
                  C
                </span>
              </div>
              <span className="font-serif text-2xl tracking-tight">Corner</span>
            </div>
            <p className="mt-5 max-w-sm text-pretty text-sm text-muted-foreground">
              Food from your neighborhood, delivered the way apartments
              actually work. Made in New York with love (and a lot of takeout).
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-sm items-center gap-2 rounded-full border border-border bg-card p-1.5"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-medium">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} Corner Delivery, Inc. All rights
            reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Cookies
            </a>
            <div className="flex items-center gap-3 pl-2">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="transition-colors hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="transition-colors hover:text-foreground"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
