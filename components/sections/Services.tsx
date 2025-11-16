'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { SERVICES } from '@/lib/constants'
import { getAssetPath } from '@/lib/utils'

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5">
        <img
          src={getAssetPath("/img/8.2_decorativo_crecimiento.png")}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
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
                {/* Icon SVG */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6 inline-block"
                >
                  <div className="w-24 h-24 mx-auto">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full"
                    />
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
