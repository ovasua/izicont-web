'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { BENEFITS } from '@/lib/constants'

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-gray-100">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wide mb-4 block">
            ¿POR QUÉ IZICONT?
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            Beneficios que impulsan
            <br />
            tu crecimiento
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                {/* Benefit Image */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-primary-900 mb-3">
                  {benefit.title}
                </h4>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
