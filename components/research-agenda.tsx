"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ResearchAgenda() {
  return (
    <section id="research" className="py-20 bg-black">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">DeSci Metrics and Success Criteria</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Measuring impact and ensuring continuous improvement in decentralized space medicine research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
                Impact Measurement Framework
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3 text-white">Scientific Progress Metrics</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Knowledge generation (publications, datasets)
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Research acceleration (time-to-insight)
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Collaboration density (cross-institutional connections)
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3 text-white">Platform Health Indicators</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Active researcher participation
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Data contribution growth
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Analysis tool utilization
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Governance participation rates
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-white">Long-Term Value Creation</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Translation to space mission improvements
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Impact on astronaut health outcomes
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Knowledge transfer to terrestrial applications
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden aspect-square md:aspect-auto"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%A3%8E%E6%A0%BC%EF%BC%9A%E7%A7%91%E5%AD%A6%EF%BC%8C%E5%86%99%E5%AE%9E%EF%BC%8C%E4%B8%93%E4%B8%9A%20%20%E4%B8%BB%E9%A2%98%EF%BC%9A%E5%A4%AA%E7%A9%BA%E9%A3%9E%E8%A1%8C%E4%B8%AD%E4%BA%BA%E4%BD%93%E8%A1%80%E6%B6%B2%E5%AD%A6%E5%8F%98%E5%8C%96%E7%9A%84%E7%A0%94%E7%A9%B6%20%20%E8%AE%BE%E7%BD%AE%EF%BC%9A%E5%A4%AA%E7%A9%BA%E8%88%B1%E5%86%85%E9%83%A8%EF%BC%8C%E7%A7%91%E7%A0%94%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%8E%AF%E5%A2%83%EF%BC%8C%E9%AB%98%E7%A7%91%E6%8A%80%E8%AE%BE%E5%A4%87%E7%8E%AF%E7%BB%95%20%20%E7%BB%84%E6%88%90%EF%BC%9A%E7%89%B9%E5%86%99%E8%A7%86%E8%A7%92%EF%BC%8C%E8%81%9A%E7%84%A6%E5%AE%9E%E9%AA%8C%E8%AE%BE%E5%A4%87%E5%92%8C%E8%A1%80%E6%B6%B2%E6%A0%B7%E6%9C%AC%EF%BC%8C%E5%AE%87%E8%88%AA%E5%91%98%E6%93%8D-T5nG4dFY9m6Q23zgcVQrdb90bCYa8K.jpeg"
              alt="Astronaut conducting blood sample analysis in space"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white text-lg font-semibold mb-2">Space Hematology Research</h4>
              <p className="text-white/80 text-sm">Analyzing blood sample changes in microgravity conditions</p>
            </div>
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
              Continuous Improvement
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-black to-purple-950/30 p-6 rounded-xl border border-purple-500/20">
                <h4 className="text-xl font-semibold mb-3 text-white">Evidence-Based Platform Evolution</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Regular user feedback collection
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Usage pattern analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Comparative benchmarking against traditional approaches
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-black to-purple-950/30 p-6 rounded-xl border border-purple-500/20">
                <h4 className="text-xl font-semibold mb-3 text-white">Adaptive Development</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Quarterly platform assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Prioritized enhancement roadmap
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Community-driven feature prioritization
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-black to-purple-950/30 p-6 rounded-xl border border-purple-500/20 md:col-span-2 lg:col-span-1">
                <h4 className="text-xl font-semibold mb-3 text-white">Iterative Research Protocols</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Methodology refinement based on outcomes
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Cross-disciplinary review process
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Transparent protocol versioning
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">DeSci Research Agenda</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Focused research priorities to advance human health and performance in space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden aspect-square md:aspect-auto"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%A3%8E%E6%A0%BC%EF%BC%9A%E7%A7%91%E5%B9%BB%EF%BC%8C%E6%9C%AA%E6%9D%A5%E4%B8%BB%E4%B9%89%EF%BC%8C%E7%A7%91%E6%8A%80%E6%84%9F%E5%8D%81%E8%B6%B3%20%20%E4%B8%BB%E9%A2%98%EF%BC%9A%E5%8C%BB%E7%94%9F%E7%A9%BF%E7%9D%80%E5%AE%87%E8%88%AA%E6%9C%8D%EF%BC%8C%E8%BF%9B%E8%A1%8CX%E5%B0%84%E7%BA%BF%E5%BD%B1%E5%83%8F%E8%AF%8A%E6%96%AD%E5%AE%9E%E9%AA%8C%EF%BC%8C%E5%AE%9E%E9%AA%8C%E7%BB%93%E6%9E%9C%E4%BB%A5%E5%8A%A8%E6%95%88%E5%BD%A2%E5%BC%8F%E8%A2%AB%E5%90%B8%E5%85%A5%E5%8C%BA%E5%9D%97%E9%93%BEDeSci%20%20%E8%AE%BE%E7%BD%AE%EF%BC%9A%E5%AE%87%E8%88%AA%E4%BB%93%E5%86%85%E9%83%A8%EF%BC%8C%E9%AB%98%E7%A7%91%E6%8A%80%E5%AE%9E%E9%AA%8C%E8%AE%BE%E5%A4%87%E7%8E%AF%E7%BB%95%EF%BC%8C%E6%97%A0%E9%87%8D%E5%8A%9B%E7%8E%AF-Xl0xlhhHiTqRHpRjABXAkM1drOTEfg.jpeg"
              alt="Astronaut examining holographic medical data"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white text-lg font-semibold mb-2">Advanced Medical Diagnostics</h4>
              <p className="text-white/80 text-sm">Holographic visualization of physiological adaptations to space</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
                Priority Research Areas
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">Space Radiation Effects</h4>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Cellular and genetic impacts
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Countermeasure development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Long-term exposure modeling
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">Microgravity Adaptation</h4>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Musculoskeletal changes
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Cardiovascular response
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Neurovestibular adaptation
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">Isolation and Confinement</h4>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Psychological resilience factors
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Team dynamics in space
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Countermeasure effectiveness
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">Human Performance</h4>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Cognitive function in space
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Work capacity assessment
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Human-system integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
              Methodological Innovations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-b from-black to-blue-950/30 p-6 rounded-xl border border-blue-500/20">
                <h4 className="text-xl font-semibold mb-3 text-white">Remote Health Monitoring</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Non-invasive biomarker tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    AI-assisted anomaly detection
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Predictive health modeling
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-black to-blue-950/30 p-6 rounded-xl border border-blue-500/20">
                <h4 className="text-xl font-semibold mb-3 text-white">Distributed Clinical Trials</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Protocol standardization
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Remote consent management
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Decentralized outcome assessment
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Future Vision: Beyond Earth Orbit</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Expanding decentralized science to support deep space exploration and interplanetary research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
                Expansion to Deep Space Exploration
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3 text-white">Mars Mission Preparation</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Extended isolation studies
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Radiation shielding assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Medical self-sufficiency protocols
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-white">Lunar Gateway Integration</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Partial gravity adaptation research
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Long-duration habitat health monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Emergency response simulation
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden aspect-square md:aspect-auto"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%A3%8E%E6%A0%BC%EF%BC%9A%E7%A7%91%E5%B9%BB%EF%BC%8C%E6%9C%AA%E6%9D%A5%E4%B8%BB%E4%B9%89%EF%BC%8C%E6%A2%A6%E5%B9%BB%E6%84%9F%20%20%E4%B8%BB%E9%A2%98%EF%BC%9A%E4%BA%BA%E7%B1%BB%E5%9C%A8%E5%A4%AA%E7%A9%BA%E8%88%B1%E4%B8%AD%E7%9D%A1%E7%9C%A0%EF%BC%8C%E6%A2%A6%E4%B8%AD%E5%87%BA%E7%8E%B0Web3%E5%85%83%E7%B4%A0%EF%BC%8C%E6%97%81%E8%BE%B9%E6%9C%89%E5%AE%87%E8%88%AA%E5%91%98%E8%A7%82%E5%AF%9F%E7%9D%A1%E7%9C%A0%E6%95%B0%E6%8D%AE%20%20%E8%AE%BE%E7%BD%AE%EF%BC%9A%E5%A4%AA%E7%A9%BA%E8%88%B1%E5%86%85%E9%83%A8%EF%BC%8C%E9%AB%98%E7%A7%91%E6%8A%80%E7%9D%A1%E7%9C%A0%E8%88%B1%EF%BC%8C%E6%97%A0%E9%87%8D%E5%8A%9B%E7%8E%AF%E5%A2%83%20%20%E7%BB%84%E6%88%90%EF%BC%9A%E7%89%B9%E5%86%99%E8%A7%86%E8%A7%92%EF%BC%8C%E8%81%9A-pPz6wAd0Ksc66Wq7oD4Wyx2wlnoJXF.jpeg"
              alt="Space sleep research with Web3 integration"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white text-lg font-semibold mb-2">Sleep Science in Space</h4>
              <p className="text-white/80 text-sm">Monitoring neural activity during extended space missions</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
              Ultimate DeSci Vision
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-b from-black to-purple-950/30 p-6 rounded-xl border border-purple-500/20">
                <h4 className="text-xl font-semibold mb-3 text-white">Interplanetary Science Network</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Autonomous research nodes beyond Earth
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Delay-tolerant scientific collaboration
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Resilient knowledge preservation across solar system
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-black to-purple-950/30 p-6 rounded-xl border border-purple-500/20">
                <h4 className="text-xl font-semibold mb-3 text-white">Human Space Exploration Enablement</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Evidence-based risk reduction
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Health maintenance optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Psychological support systems
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden aspect-square"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-20250330-172505.png-JgY1O4BUpiDU7jUFhvdaRxTF2lYwWc.jpeg"
              alt="Astronaut with holographic anatomical overlay"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white text-lg font-semibold mb-2">Augmented Medical Visualization</h4>
              <p className="text-white/80 text-sm">Real-time physiological monitoring with blockchain verification</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
