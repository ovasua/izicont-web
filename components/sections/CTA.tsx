'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PRICING } from '@/lib/constants'
import { getAssetPath } from '@/lib/utils'

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-primary relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Decorative growth image */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 opacity-10">
        <img
          src={getAssetPath("/img/8.2_decorativo_crecimiento.png")}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para desencadenar
            <br />
            el poder para crecer?
          </h2>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Únete a más de 150 empresas que ya transformaron
            su contabilidad con IZICONT
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="primary" size="lg" className="bg-accent hover:bg-accent-light">
              Comenzar por S/ {PRICING.inscription}
            </Button>
            <Button variant="outline" size="lg">
              Agendar una demo
            </Button>
          </div>

          {/* Small text */}
          <p className="text-sm text-white/70 mb-12">
            Sin contratos • Cancela cuando quieras • Soporte incluido
          </p>

          {/* Features Bar */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-white font-medium">Inscripción en minutos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-white font-medium">Equipo experto dedicado</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-white font-medium">ERP Cloud incluido</p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
