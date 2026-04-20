import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesStrip } from "@/components/categories-strip"
import { FeaturedVendors } from "@/components/featured-vendors"
import { HowItWorks } from "@/components/how-it-works"
import { ApartmentFeature } from "@/components/apartment-feature"
import { ValueBento } from "@/components/value-bento"
import { Testimonials } from "@/components/testimonials"
import { AppCta } from "@/components/app-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <CategoriesStrip />
      <FeaturedVendors />
      <HowItWorks />
      <ApartmentFeature />
      <ValueBento />
      <Testimonials />
      <AppCta />
      <SiteFooter />
    </main>
  )
}
