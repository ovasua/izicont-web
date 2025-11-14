'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { HOW_IT_WORKS } from '@/lib/constants'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wide mb-4 block">
            SIMPLE Y DIRECTO
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            Cómo funciona IZICONT
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Tres pasos para transformar tu contabilidad
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {HOW_IT_WORKS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card hover className="h-full relative overflow-hidden">
                {/* Step number background */}
                <div className="absolute -top-8 -right-8 text-9xl font-bold text-accent/5">
                  {step.step}
                </div>

                <div className="relative z-10">
                  {/* Badge */}
                  <Badge variant="accent" className="mb-4">
                    {step.badge}
                  </Badge>

                  {/* Illustration image */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-accent mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="primary" size="lg">
            Comenzar ahora →
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
