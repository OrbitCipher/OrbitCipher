import Hero from "@/components/hero"
import Features from "@/components/features"
import Architecture from "@/components/architecture"
import TechnicalDetails from "@/components/technical-details"
import Fram2Experiments from "@/components/fram2-experiments"
import ResearchAgenda from "@/components/research-agenda"
import Roadmap from "@/components/roadmap"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Architecture />
      <TechnicalDetails />
      <Fram2Experiments />
      <ResearchAgenda />
      <Roadmap />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
