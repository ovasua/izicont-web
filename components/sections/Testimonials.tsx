'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wide mb-4 block">
            CASOS DE ÉXITO
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            Empresas que ya crecen
            <br />
            con IZICONT
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 lg:p-12">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-accent">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                  &ldquo;{TESTIMONIALS[currentIndex].text}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary-700/20 flex items-center justify-center text-2xl flex-shrink-0">
                    👤
                  </div>

                  <div>
                    <p className="font-bold text-primary-900 text-lg">
                      {TESTIMONIALS[currentIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {TESTIMONIALS[currentIndex].position}
                    </p>
                    <p className="text-sm text-gray-500">
                      {TESTIMONIALS[currentIndex].company} • {TESTIMONIALS[currentIndex].sector}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-accent w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Social Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">+150</div>
            <p className="text-gray-600">empresas confían en IZICONT</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <p className="text-gray-600">de satisfacción de clientes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
            <p className="text-gray-600">rating promedio</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
