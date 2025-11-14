import { Container } from '@/components/ui/Container'
import { CONTACT, SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-primary-900 text-white pt-20 pb-8">
      <Container>
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src="/img/1.3 Logo en Blanco.png"
              alt="IZICONT"
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/80 mb-4 leading-relaxed">
              Despreocúpate de los números. Enfócate en crecer.
            </p>
            <p className="text-white/70 text-sm">
              Servicio contable profesional + ERP Cloud para empresas peruanas.
              Paga solo cuando vendes.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/70 hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-white/70 hover:text-accent transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#precios" className="text-white/70 hover:text-accent transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-accent transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent">📞</span>
                <div>
                  <a href={`tel:${CONTACT.phone}`} className="text-white/70 hover:text-accent transition-colors">
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">📧</span>
                <div>
                  <a href={`mailto:${CONTACT.email}`} className="text-white/70 hover:text-accent transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">🕐</span>
                <div className="text-white/70">
                  {CONTACT.schedule}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">📍</span>
                <div className="text-white/70">
                  Lima, Perú
                </div>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
              >
                <span>f</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
              >
                <span>in</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
              >
                <span>ig</span>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
              >
                <span>yt</span>
              </a>
            </div>

            <div className="mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                <span>🇵🇪</span>
                <span className="text-sm font-medium">Hecho en Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} IZICONT. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Términos de servicio
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Política de cookies
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
