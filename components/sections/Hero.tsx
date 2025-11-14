'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { PRICING } from '@/lib/constants'
import { getAssetPath } from '@/lib/utils'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={getAssetPath("/img/2.1 Hero Background Principal.png")}
          alt="Background IZICONT"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <Container className="relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              Despreocúpate de los números.
              <br />
              <span className="text-accent">Enfócate en crecer.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
            >
              Servicio contable profesional + ERP Cloud de clase mundial.
              <br />
              Todo por una pequeña comisión sobre tus ventas.
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Badge variant="outline" className="text-white border-white/50 bg-white/10 backdrop-blur-sm">
                ✓ Sin mensualidades fijas
              </Badge>
              <Badge variant="outline" className="text-white border-white/50 bg-white/10 backdrop-blur-sm">
                ✓ Equipo experto incluido
              </Badge>
              <Badge variant="outline" className="text-white border-white/50 bg-white/10 backdrop-blur-sm">
                ✓ Solo pagas cuando vendes
              </Badge>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <Button variant="primary" size="lg">
                Comenzar por S/ {PRICING.inscription}
              </Button>
              <Button variant="outline" size="lg">
                Ver Planes y Precios
              </Button>
            </motion.div>

            {/* Small text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-sm text-white/70"
            >
              Inscripción única S/ {PRICING.inscription} • Sin contratos • Cancela cuando quieras
            </motion.p>
          </motion.div>

          {/* Mockup ERP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* ERP Dashboard Mockup */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20">
                <img
                  src={getAssetPath("/img/2.2 Dashboard ERP Mockup.png")}
                  alt="Dashboard ERP IZICONT"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-700/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
