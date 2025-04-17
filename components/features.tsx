"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Globe, Database, Coins, FileText, Users, Microscope, Rocket } from "lucide-react"

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Medical Data Management",
      description:
        "Ensuring data integrity and source verification through blockchain technology for space medical research.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Collaborative Ecosystem",
      description: "Breaking down geographical and institutional barriers for space medicine research collaboration.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Value Mining with Privacy",
      description: "Maximizing research value while protecting astronaut privacy through advanced encryption.",
    },
    {
      icon: <Coins className="h-10 w-10 text-primary" />,
      title: "Sustainable Scientific Incentives",
      description: "Balancing scientific openness with platform sustainability through token economics.",
    },
  ]

  const realWorldContext = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "DeSci Precedents",
      description: "Building on successful models like VitaDAO, Molecule Protocol, and MediLinker.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Space Agency Integration",
      description: "Aligning with NASA's ExMC, ESA's Medical Data Management System, and TRISH initiatives.",
    },
    {
      icon: <Microscope className="h-10 w-10 text-primary" />,
      title: "Research Compatibility",
      description: "Supporting all 16 Fram2 mission medical experiments with specialized data structures.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Future-Proof Design",
      description: "Scalable architecture ready for expansion to future space missions and Earth applications.",
    },
  ]

  return (
    <section id="features" className="inspira-section bg-black">
      <div className="inspira-container">
        <div className="text-center mb-16">
          <h2 className="inspira-heading text-white">Core Value Proposition</h2>
          <p className="inspira-subheading">
            Orbit Cipher combines blockchain security with scientific collaboration to revolutionize space medical
            research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div
                className={`inspira-card h-full p-6 ${
                  activeFeature === index ? "border-primary/40" : "border-white/10"
                }`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="inspira-heading text-white">Real-World Context & Foundation</h2>
          <p className="inspira-subheading">
            Orbit Cipher builds upon established DeSci precedents and integrates with existing space medicine
            initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {realWorldContext.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inspira-card h-full p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
