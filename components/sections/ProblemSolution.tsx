'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function ProblemSolution() {
  const problemPoints = [
    'Múltiples suscripciones mensuales costosas',
    'Información fragmentada en diferentes sistemas',
    'Errores contables que cuestan dinero',
    'Pérdida de tiempo integrando herramientas',
    'Falta de control en tiempo real',
  ]

  const solutionPoints = [
    'Un solo sistema integrado (ERP + Contabilidad)',
    'Equipo de expertos dedicado a tu empresa',
    'Información en tiempo real, 24/7',
    'Pagas solo cuando vendes (2% + IGV)',
    'Sin sorpresas ni costos ocultos',
  ]

  return (
    <section id="problema-solucion" className="py-20 lg:py-32 bg-gray-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #0F2C59 1px, transparent 1px), linear-gradient(to bottom, #0F2C59 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* PROBLEMA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                EL PROBLEMA QUE TODOS TIENEN
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6 leading-tight">
              La empresa promedio utiliza hasta 14 aplicaciones diferentes para administrar su organización
            </h2>

            <div className="space-y-4">
              {problemPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </motion.div>
              ))}
            </div>

            {/* Illustration placeholder */}
            <div className="mt-8 p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
              <div className="flex items-center justify-center text-red-400">
                <div className="text-center">
                  <div className="text-6xl mb-2">⚠️</div>
                  <p className="text-sm font-medium text-gray-600">Caos de aplicaciones</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SOLUCIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                LA SOLUCIÓN IZICONT
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6 leading-tight">
              Todo en un solo lugar.
              <br />
              <span className="text-accent">Todo por un solo pago.</span>
            </h2>

            <div className="space-y-4">
              {solutionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <span className="text-accent text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </motion.div>
              ))}
            </div>

            {/* Illustration placeholder */}
            <div className="mt-8 p-8 bg-gradient-to-br from-accent/10 to-primary-700/10 rounded-2xl">
              <div className="flex items-center justify-center text-accent">
                <div className="text-center">
                  <div className="text-6xl mb-2">✨</div>
                  <p className="text-sm font-medium text-gray-600">Solución unificada IZICONT</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="primary" size="lg">
                Conoce cómo funciona →
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
