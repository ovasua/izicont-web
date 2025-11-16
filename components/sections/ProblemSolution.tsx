'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getAssetPath } from '@/lib/utils'

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
      {/* Background pattern image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={getAssetPath("/img/8.1_patron_tech_grid.png")}
          alt=""
          className="w-full h-full object-cover"
        />
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

            {/* Problem Illustration */}
            <div className="mt-8 rounded-2xl overflow-hidden">
              <img
                src={getAssetPath("/img/3.1_problema_caos_aplicaciones.png")}
                alt="Caos de aplicaciones"
                className="w-full h-auto"
              />
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

            {/* Solution Illustration */}
            <div className="mt-8 rounded-2xl overflow-hidden">
              <img
                src={getAssetPath("/img/3.2_solucion_izicont_unificada.png")}
                alt="Solución unificada IZICONT"
                className="w-full h-auto"
              />
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
