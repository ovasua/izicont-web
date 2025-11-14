'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wide mb-4 block">
            SERVICIOS PROFESIONALES
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            Todo lo que necesitas para
            <br />
            gestionar tu empresa
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Servicios contables, tributarios y tecnológicos totalmente integrados
            a tu ERP Cloud. Todo en un solo lugar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6 inline-block"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary-700/20 rounded-2xl flex items-center justify-center mx-auto">
                    <div className="text-4xl">
                      {service.id === 'outsourcing' && '📚'}
                      {service.id === 'tributaria' && '📋'}
                      {service.id === 'laboral' && '👔'}
                      {service.id === 'constitucion' && '🏢'}
                      {service.id === 'erp' && '💼'}
                      {service.id === 'reportes' && '📊'}
                    </div>
                  </div>
                </motion.div>

                {/* Title */}
                <h4 className="text-xl font-bold text-primary-900 mb-3">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
