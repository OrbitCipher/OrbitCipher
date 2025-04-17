"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Fram2Experiments() {
  const experiments = [
    {
      title: "SpaceXray",
      description: "First X-ray imaging in space",
    },
    {
      title: "Egress Study",
      description: "Assessment of astronaut ability to perform tasks after landing",
    },
    {
      title: "Blood Flow Restriction (BFR) Study",
      description: "Maintaining muscle and bone health through exercise",
    },
    {
      title: "Oura Ring Sleep Study",
      description: "Monitoring sleep quality and stress levels",
    },
    {
      title: "Hyperfine MRI Study",
      description: "Portable MRI brain imaging after landing",
    },
    {
      title: "Continuous Glucose Monitor Study",
      description: "Monitoring glucose regulation in microgravity",
    },
    {
      title: "Women's Health Study",
      description: "Studying the effects of microgravity on female reproductive hormones",
    },
    {
      title: "Space THAL",
      description: "Exploring the effects of spaceflight on blood health",
    },
    {
      title: "Motion Sickness Study",
      description: "Quantifying motion sickness severity during gravity transitions",
    },
    {
      title: "Bone Health Study",
      description: "Monitoring bone microstructure changes",
    },
    {
      title: "Cognitive and Physiologic Responses",
      description: "Tracking cognitive performance and physiological changes",
    },
    {
      title: "Otolith and Posture Evaluation II",
      description: "Studying motion sickness and spatial orientation",
    },
  ]

  return (
    <section id="fram2" className="inspira-section bg-black">
      <div className="inspira-container">
        <div className="text-center mb-16">
          <h2 className="inspira-heading text-white">Fram2 Mission Medical Experiments</h2>
          <p className="inspira-subheading">
            Orbit Cipher is designed to support all 16 medical experiments from the groundbreaking Fram2 mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experiments.slice(0, 8).map((experiment, index) => (
                <div key={index} className="inspira-card p-4">
                  <h4 className="text-white font-semibold mb-1">{experiment.title}</h4>
                  <p className="text-white/70 text-sm">{experiment.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {experiments.slice(8).map((experiment, index) => (
            <div key={index} className="inspira-card p-4">
              <h4 className="text-white font-semibold mb-1">{experiment.title}</h4>
              <p className="text-white/70 text-sm">{experiment.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
