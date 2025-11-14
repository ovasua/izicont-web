import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Benefits } from '@/components/sections/Benefits'
import { Services } from '@/components/sections/Services'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Benefits />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
