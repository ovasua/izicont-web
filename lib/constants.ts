import { getAssetPath } from './utils'

export const CONTACT = {
  phone: '+51 993 124 171',
  email: 'contacto@izicont.com',
  schedule: 'Lun - Vie | 8:00 a.m. a 5:00 p.m.',
} as const

export const PRICING = {
  inscription: 99,
  commission: 2,
  igv: 18,
} as const

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/izicont',
  linkedin: 'https://linkedin.com/company/izicont',
  instagram: 'https://instagram.com/izicont',
  youtube: 'https://youtube.com/@izicont',
} as const

export const SERVICES = [
  {
    id: 'outsourcing',
    title: 'Outsourcing Contable',
    icon: getAssetPath('/img/6.1_icono_outsourcing_contable.png'),
    description: 'Procesamiento completo de tu contabilidad. Registros, libros, balances y estados financieros. Todo al día, siempre.',
  },
  {
    id: 'tributaria',
    title: 'Asesoría Tributaria',
    icon: getAssetPath('/img/6.2_icono_asesoria_tributaria.png'),
    description: 'Cumplimiento tributario con SUNAT. Declaraciones, PDT, libros electrónicos y planificación fiscal.',
  },
  {
    id: 'laboral',
    title: 'Asesoría Laboral',
    icon: getAssetPath('/img/6.3_icono_asesoria_laboral.png'),
    description: 'Gestión de planillas, contratos, y cumplimiento con SUNAFIL. Evita multas y contingencias laborales.',
  },
  {
    id: 'constitucion',
    title: 'Constitución de Empresas',
    icon: getAssetPath('/img/6.4_icono_constitucion_empresas.png'),
    description: 'Te ayudamos a formalizar tu negocio. Constitución legal, RUC, licencias y todo lo necesario para empezar.',
  },
  {
    id: 'erp',
    title: 'ERP Cloud Completo',
    icon: getAssetPath('/img/6.5_icono_erp_cloud.png'),
    description: 'Sistema de gestión empresarial con módulos de ventas, compras, inventario, finanzas y más. Siempre actualizado.',
  },
  {
    id: 'reportes',
    title: 'Reportes en Tiempo Real',
    icon: getAssetPath('/img/6.6_icono_reportes_tiempo_real.png'),
    description: 'Dashboards personalizados, KPIs, gráficos y reportes exportables. Información para tomar decisiones inteligentes.',
  },
] as const

export const BENEFITS = [
  {
    id: 'erp',
    title: 'ERP Cloud profesional incluido',
    description: 'Te instalamos el mejor software de gestión empresarial para llevar adelante tu empresa. Sin costos adicionales, sin mantenimiento.',
    image: getAssetPath('/img/5.1_beneficio_erp.png'),
  },
  {
    id: 'equipo',
    title: 'Equipo multidisciplinario dedicado',
    description: 'Contadores públicos, ingenieros de sistemas e ingenieros industriales trabajando para tu empresa. Experiencia y profesionalismo garantizados.',
    image: getAssetPath('/img/5.2_beneficio_equipo.png'),
  },
  {
    id: 'mantenimiento',
    title: 'Sin mantenimiento ni alquileres',
    description: 'Olvídate de pagos mensuales fijos por software. Sin actualizaciones, sin licencias, sin sorpresas. Todo está incluido.',
    image: getAssetPath('/img/5.3_beneficio_sin_mantenimiento.png'),
  },
  {
    id: 'inscripcion',
    title: 'Afiliación rápida y simple',
    description: 'Regístrate con tu DNI o RUC en minutos. Pago único de S/ 99 soles por inscripción y listo. Sin trámites complicados.',
    image: getAssetPath('/img/5.4_beneficio_inscripcion_simple.png'),
  },
  {
    id: 'comision',
    title: 'Solo pagas cuando vendes',
    description: 'Comisión del 2% + IGV sobre tus ventas. Si no vendes, no pagas. Tu éxito es nuestro éxito. Simple y transparente.',
    image: getAssetPath('/img/5.5_beneficio_comision.png'),
  },
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    position: 'Gerente General',
    company: 'Distribuidora El Sol SAC',
    sector: 'Comercio',
    avatar: getAssetPath('/img/7.1_avatar_empresario1.png'),
    rating: 5,
    text: 'Antes gastábamos más de S/ 2,500 al mes entre contador y software. Con IZICONT pagamos solo cuando vendemos y tenemos todo integrado. La mejor decisión para nuestro flujo de caja.',
  },
  {
    id: 2,
    name: 'María Fernanda Ríos',
    position: 'CEO & Fundadora',
    company: 'Textiles Andinos EIRL',
    sector: 'Manufactura',
    avatar: getAssetPath('/img/7.2_avatar_empresaria2.png'),
    rating: 5,
    text: 'El ERP que nos dieron es increíble. Vemos todo en tiempo real y el equipo de contadores siempre está disponible. Ya no me preocupo por SUNAT, ellos se encargan de todo.',
  },
  {
    id: 3,
    name: 'Diego Paredes',
    position: 'Co-Founder',
    company: 'TechCommerce Solutions SRL',
    sector: 'E-commerce',
    avatar: getAssetPath('/img/7.3_avatar_empresario3.png'),
    rating: 5,
    text: 'Somos una startup en crecimiento. El modelo de comisión es perfecto porque cuando teníamos pocas ventas pagábamos poco, y ahora que crecimos seguimos pagando justo. Transparente y escalable.',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: '¿Cómo funciona exactamente el modelo de comisión?',
    answer: 'Pagas el 2% + IGV sobre tus ventas mensuales. Por ejemplo, si vendes S/ 100,000 al mes, pagas aproximadamente S/ 2,360 (2% + IGV). Si un mes vendes menos, pagas menos. Si no vendes nada, no pagas nada. La inscripción única de S/ 99 se paga solo una vez al registrarte.',
  },
  {
    question: '¿Qué incluye exactamente el servicio de IZICONT?',
    answer: 'Incluye TODO lo que necesitas: procesamiento contable completo, asesoría tributaria con SUNAT, asesoría laboral con SUNAFIL, el ERP Cloud profesional, reportes en tiempo real, y un equipo multidisciplinario dedicado. No hay costos ocultos ni servicios adicionales que pagar.',
  },
  {
    question: '¿Hay permanencia mínima o contratos largos?',
    answer: 'No. Puedes cancelar el servicio cuando quieras sin penalidades. Creemos en ganarnos tu confianza mes a mes con resultados, no con contratos que te aten.',
  },
  {
    question: '¿El ERP es realmente profesional o es limitado?',
    answer: 'Es un ERP Cloud completo y profesional con módulos de ventas, compras, inventario, finanzas, CRM, reportes y más. El mismo sistema que usan empresas grandes, pero accesible para PyMEs. Incluye actualizaciones, mantenimiento, soporte técnico y capacitación sin costo adicional.',
  },
  {
    question: '¿Funciona para mi tipo de empresa o industria?',
    answer: 'IZICONT funciona para todo tipo de empresas en Perú: comercio, servicios, manufactura, retail, e-commerce, construcción, etc. Nuestro ERP y servicios contables se adaptan a tu industria específica. Si tienes dudas, contáctanos y te confirmamos.',
  },
  {
    question: '¿Cómo aseguran el cumplimiento con SUNAT y SUNAFIL?',
    answer: 'Nuestro equipo está formado por Contadores Públicos Colegiados con amplia experiencia en normativa peruana. Nos encargamos de todas las declaraciones, libros electrónicos, PDTs, planillas y cumplimiento legal. Te evitamos multas y contingencias.',
  },
  {
    question: '¿Qué pasa con mi información? ¿Es segura?',
    answer: 'Tu información está protegida con los más altos estándares de seguridad: encriptación SSL, backups diarios automáticos, servidores en la nube con certificaciones internacionales. Solo tú y tu equipo autorizado tienen acceso a tu data.',
  },
  {
    question: '¿Cómo empiezo? ¿Cuánto tarda la implementación?',
    answer: 'Regístrate online, paga S/ 99 de inscripción y nuestro equipo te contacta en menos de 24 horas. La configuración inicial del ERP toma 2-3 días. En una semana ya estás operando con todo funcionando.',
  },
] as const

export const HOW_IT_WORKS = [
  {
    step: 1,
    badge: 'Paso 1',
    title: 'Inscríbete',
    description: 'Regístrate con tu DNI o RUC y paga solo S/ 99 por la inscripción. Sin contratos a largo plazo ni letra pequeña. Comienza en minutos.',
    details: [
      'Pago único: S/ 99',
      'Registro 100% online',
      'Configuración inmediata',
    ],
    image: getAssetPath('/img/4.1_paso1_inscribete.png'),
  },
  {
    step: 2,
    badge: 'Paso 2',
    title: 'Nosotros trabajamos',
    description: 'Nuestro equipo de contadores públicos, ingenieros de sistemas y asesores tributarios se encarga de toda tu contabilidad. Tú solo envías tu información.',
    details: [
      'Equipo multidisciplinario dedicado',
      'Procesamiento de documentos',
      'Cumplimiento con SUNAT y SUNAFIL',
      'Asesoría continua incluida',
    ],
    image: getAssetPath('/img/4.2_paso2_nosotros_trabajamos.png'),
  },
  {
    step: 3,
    badge: 'Paso 3',
    title: 'Tú consultas todo',
    description: 'Accede 24/7 a tu ERP Cloud y consulta toda tu información financiera en tiempo real. Dashboards, reportes, gráficos y toda la data que necesitas para tomar decisiones.',
    details: [
      'Acceso desde cualquier dispositivo',
      'Reportes en tiempo real',
      'Dashboards personalizados',
      'Exportación de datos ilimitada',
    ],
    image: getAssetPath('/img/4.3_paso3_consultas_todo.png'),
  },
] as const

export const PRICING_TABLE = [
  { ventas: 'S/ 64,375', comision: 'S/ 1,550' },
  { ventas: 'S/ 128,750', comision: 'S/ 3,099' },
  { ventas: 'S/ 214,583', comision: 'S/ 5,165' },
  { ventas: 'S/ 300,417', comision: 'S/ 7,230' },
  { ventas: 'S/ 386,250', comision: 'S/ 9,295' },
  { ventas: 'S/ 472,083', comision: 'S/ 11,360' },
  { ventas: 'S/ 557,917', comision: 'S/ 13,425' },
  { ventas: 'S/ 643,750', comision: 'S/ 15,491' },
] as const
