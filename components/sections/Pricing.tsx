'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PRICING, PRICING_TABLE } from '@/lib/constants'
import { getAssetPath } from '@/lib/utils'

export function Pricing() {
  return (
    <section id="precios" className="py-20 lg:py-32 bg-gradient-to-br from-accent/5 to-primary-700/5 relative overflow-hidden">
      {/* Decorative data connection image */}
      <div className="absolute top-1/4 left-0 w-1/4 h-1/4 opacity-5">
        <img
          src={getAssetPath("/img/8.3_decorativo_conexion_datos.png")}
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
            PRECIOS TRANSPARENTES
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            Planes que crecen contigo
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Paga solo cuando vendes. Sin mensualidades fijas. Sin permanencia mínima.
          </p>
        </motion.div>

        {/* Pricing Model Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="text-center relative overflow-hidden shadow-card-hover">
            <div className="absolute inset-0 bg-gradient-accent opacity-5" />
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Modelo de Comisión IZICONT
              </h3>

              <div className="mb-6">
                <div className="text-6xl font-bold text-accent mb-2">
                  {PRICING.commission}% <span className="text-3xl">+ IGV</span>
                </div>
                <p className="text-xl text-gray-700">de tus ventas mensuales</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-left">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-gray-700">Sin pago mensual fijo</span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-gray-700">Creces, nosotros crecemos</span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-gray-700">No vendes, no pagas</span>
                </div>
                <div className="flex items-center gap-2 text-left">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-gray-700">Totalmente escalable</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Inscripción única</p>
                <p className="text-3xl font-bold text-primary-900">S/ {PRICING.inscription}</p>
                <p className="text-sm text-gray-600">(Se paga una sola vez al registrarte)</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-primary-900 text-center mb-8">
            Ejemplos por rango de ventas
          </h3>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-primary-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                        Ventas Mensuales
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                        Comisión IZICONT (aprox.)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {PRICING_TABLE.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row.ventas}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-accent font-semibold">
                          {row.comision}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center mt-4">
            Comisión calculada como {PRICING.commission}% + IGV sobre ventas mensuales (sin IGV).
            Los valores mostrados son exactos según la fórmula: (Ventas × 2%) × 1.18
          </p>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Traditional Model */}
          <Card>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Modelo Tradicional</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-red-500">❌</span>
                <span className="text-gray-700">Pago fijo mensual: S/ 800-2,500</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">❌</span>
                <span className="text-gray-700">Software ERP aparte: S/ 500-1,500/mes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">❌</span>
                <span className="text-gray-700">Pagas aunque no vendas</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">❌</span>
                <span className="text-gray-700">Múltiples proveedores</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Total aproximado</p>
              <p className="text-2xl font-bold text-gray-900">S/ 1,300-4,000/mes</p>
            </div>
          </Card>

          {/* IZICONT Model */}
          <Card className="border-2 border-accent shadow-card-hover">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-primary-900">Modelo IZICONT</h4>
              <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                RECOMENDADO
              </span>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span className="text-gray-700">Solo pagas cuando vendes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span className="text-gray-700">ERP incluido sin costo extra</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span className="text-gray-700">Equipo profesional incluido</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span className="text-gray-700">Todo en uno</span>
              </div>
            </div>
            <div className="pt-4 border-t border-accent/20">
              <p className="text-sm text-gray-600 mb-1">Total</p>
              <p className="text-2xl font-bold text-accent">{PRICING.commission}% + IGV de ventas</p>
            </div>
          </Card>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button variant="primary" size="lg">
              Comenzar por S/ {PRICING.inscription}
            </Button>
            <Button variant="secondary" size="lg">
              Hablar con un asesor
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            ¿Tienes dudas? <a href="#contacto" className="text-accent hover:underline">Agenda una llamada gratis →</a>
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
