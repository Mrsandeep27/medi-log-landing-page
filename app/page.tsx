import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Problems } from '@/components/problems'
import { HowItWorks } from '@/components/how-it-works'
import { Features } from '@/components/features'
import { Comparison } from '@/components/comparison'
import { Testimonials } from '@/components/testimonials'
import { Keywords } from '@/components/keywords'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Problems />
      <HowItWorks />
      <Features />
      <Comparison />
      <Testimonials />
      <Keywords />
      <FinalCTA />
      <Footer />
    </main>
  )
}
