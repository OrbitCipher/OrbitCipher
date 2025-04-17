"use client"

import { motion } from "framer-motion"

export default function Roadmap() {
  const roadmapItems = [
    {
      period: "Q2 2025",
      title: "Proof of Concept & MVP",
      items: [
        "Complete core storage and access control system development",
        "Establish initial collaboration with Fram2 mission team",
        "Recruit 10-15 space medicine researchers for internal testing",
        "Formalize partnership with NASA's Translational Research Institute for Space Health",
      ],
    },
    {
      period: "Q3-Q4 2025",
      title: "Basic Platform Launch",
      items: [
        "Support complete Fram2 mission medical datasets",
        "Implement basic data analysis functionality",
        "Establish initial user community (≥100 professional users)",
        "Integration with existing space medicine databases",
      ],
    },
    {
      period: "2026",
      title: "Feature Expansion & Adoption Growth",
      items: [
        "Launch federated learning functionality",
        "Implement initial community governance mechanisms",
        "Expand to other space mission data",
        "Reach ≥500 active users",
        "ESA partnership development",
      ],
    },
    {
      period: "2027+",
      title: "Complete Ecosystem",
      items: [
        "Refine DAO governance",
        "Expand to Earth-based applications",
        "Build developer ecosystem",
        "Target ≥5,000 users",
        "Establish global space medicine consortium with all major space agencies",
      ],
    },
  ]

  return (
    <section id="roadmap" className="inspira-section bg-black">
      <div className="inspira-container">
        <div className="text-center mb-16">
          <h2 className="inspira-heading text-white">Implementation Roadmap</h2>
          <p className="inspira-subheading">Our strategic plan to build and scale the Orbit Cipher platform.</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/50" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
              >
                <div className="md:w-1/2 p-6">
                  <div className={`text-right ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="text-2xl font-bold mb-2 inspira-gradient-text">{item.period}</h3>
                    <h4 className="text-xl font-semibold mb-4 text-white">{item.title}</h4>
                    <ul className={`space-y-2 text-white/70 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      {item.items.map((listItem, i) => (
                        <li key={i} className="flex items-start justify-end md:justify-start">
                          {index % 2 === 0 ? (
                            <>
                              <span className="hidden md:inline">{listItem}</span>
                              <span className="text-primary ml-2 hidden md:inline">•</span>
                              <span className="md:hidden flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {listItem}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-primary mr-2">•</span>
                              {listItem}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:w-12 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary border-4 border-black z-10" />
                </div>

                <div className="md:w-1/2 p-6 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
