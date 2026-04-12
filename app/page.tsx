import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Problems } from '@/components/problems'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { Comparison } from '@/components/comparison'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Problems />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Comparison />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
