'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { FAQ_ITEMS, CONTACT } from '@/lib/constants'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gray-100">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wide mb-4 block">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-4">
            ¿Tienes dudas?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Aquí respondemos las preguntas más comunes sobre IZICONT
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="bg-white rounded-xl shadow-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-primary-900 pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl shadow-card p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            ¿No encontraste tu respuesta?
          </h3>
          <p className="text-gray-700 mb-6">
            Nuestro equipo está listo para ayudarte
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <span className="text-accent">📞</span>
              <a href={`tel:${CONTACT.phone}`} className="hover:text-accent transition-colors font-medium">
                {CONTACT.phone}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <span className="text-accent">📧</span>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors font-medium">
                {CONTACT.email}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-accent">🕐</span>
              <span>{CONTACT.schedule}</span>
            </div>
          </div>

          <a
            href={`https://wa.me/${CONTACT.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <span className="mr-2">💬</span>
            Hablar con un asesor
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
