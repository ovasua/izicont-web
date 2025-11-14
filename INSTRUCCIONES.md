# 📋 INSTRUCCIONES DE USO - IZICONT WEB

## ✅ Proyecto Completado

La página web de IZICONT ha sido desarrollada completamente siguiendo todas las especificaciones del Plan_Detallado.md.

## 🎯 Lo que se ha implementado

### ✓ Configuración Técnica
- ✅ Next.js 15 con TypeScript
- ✅ TailwindCSS con colores de marca IZICONT
- ✅ Framer Motion para animaciones
- ✅ Configuración para GitHub Pages (export estático)
- ✅ GitHub Actions para deployment automático
- ✅ SEO completo con metadata y JSON-LD

### ✓ Componentes UI (4)
- ✅ Button - Botones con variantes (primary, secondary, outline)
- ✅ Card - Tarjetas con efectos hover
- ✅ Container - Contenedor responsive
- ✅ Badge - Insignias/etiquetas

### ✓ Layout Components (1)
- ✅ Navbar - Barra de navegación sticky con menú mobile

### ✓ Secciones de la Página (10)
1. ✅ **Hero** - Sección principal con headline, CTAs y mockup ERP
2. ✅ **ProblemSolution** - Problema vs Solución IZICONT
3. ✅ **HowItWorks** - 3 pasos de cómo funciona el servicio
4. ✅ **Benefits** - 5 beneficios principales
5. ✅ **Services** - 6 servicios profesionales incluidos
6. ✅ **Pricing** - Modelo de comisión, tabla de precios y comparación
7. ✅ **Testimonials** - Carrusel de testimonios de clientes
8. ✅ **FAQ** - 8 preguntas frecuentes con accordion
9. ✅ **CTA** - Call to action final
10. ✅ **Footer** - Footer completo con contacto y links

### ✓ Archivos de Configuración
- ✅ `lib/constants.ts` - Todas las constantes del proyecto
- ✅ `lib/utils.ts` - Utilidades (función cn)
- ✅ `tailwind.config.ts` - Colores, fuentes y animaciones
- ✅ `next.config.mjs` - Configuración para export estático
- ✅ `.github/workflows/deploy.yml` - Deployment automático

## 🚀 Cómo Usar el Proyecto

### 1. Modo Desarrollo

```bash
cd izicont-web
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 2. Build de Producción

```bash
npm run build
```

Esto genera la carpeta `/out` con los archivos estáticos listos para deploy.

### 3. Preview del Build

```bash
npm run start
```

## 📦 Deployment en GitHub Pages

### Opción A: Deployment Automático (Recomendado)

1. **Crear repositorio en GitHub**
   ```bash
   cd izicont-web
   git init
   git add .
   git commit -m "Initial commit: IZICONT website"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/izicont-web.git
   git push -u origin main
   ```

2. **Configurar GitHub Pages**
   - Ve a Settings → Pages en tu repositorio
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages` (se creará automáticamente)
   - El workflow de GitHub Actions hará el deploy automático

3. **Esperar el deployment**
   - Ve a Actions en tu repositorio
   - Verás el workflow "Deploy to GitHub Pages" ejecutándose
   - Una vez completado, tu sitio estará en: `https://TU-USUARIO.github.io/izicont-web/`

### Opción B: Deployment Manual

```bash
npm run build
# Sube manualmente el contenido de /out a tu servidor
```

## 🎨 Personalización

### Cambiar Colores de Marca

Edita [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    900: '#0F2C59',  // Tu color aquí
    700: '#175775',
  },
  accent: {
    DEFAULT: '#3DCCC7',
  },
}
```

### Cambiar Contenido

Edita [lib/constants.ts](lib/constants.ts) para modificar:
- Información de contacto
- Precios
- Servicios
- Beneficios
- Testimonios
- FAQs

### Agregar Imágenes Reales

1. Coloca tus imágenes en `/public/img/`
2. Los nombres de archivo ya están configurados según el plan:
   - Logo: `1.1 Logo Principal.png`
   - Hero: `2.1 Hero Background Principal.png`, `2.2 Dashboard ERP Mockup.png`
   - Pasos: `4.1_paso1_inscribete.png`, etc.
   - Y así sucesivamente...

## 📱 Características Implementadas

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: mobile (0-639px), tablet (640-1023px), desktop (1024px+)
- ✅ Menú hamburguesa en mobile
- ✅ Grids adaptables
- ✅ Imágenes responsive

### Animaciones
- ✅ Fade in/out con Framer Motion
- ✅ Scroll-triggered animations
- ✅ Hover effects en cards y botones
- ✅ Float animation en mockup ERP
- ✅ Smooth scroll entre secciones
- ✅ Carrusel de testimonios animado
- ✅ Accordion animado en FAQ

### SEO
- ✅ Meta tags completos
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ JSON-LD structured data
- ✅ robots.txt
- ✅ Sitemap (puedes generarlo con next-sitemap si lo necesitas)

### Accesibilidad
- ✅ Contraste de colores WCAG AA
- ✅ Navegación por teclado
- ✅ ARIA labels donde es necesario
- ✅ Focus states visibles

## 🔧 Próximos Pasos Sugeridos

1. **Agregar las imágenes reales** del diseño al folder `/public/img/`

2. **Configurar dominio personalizado** (si lo tienes):
   - Crea un archivo `CNAME` en `/public` con tu dominio
   - Configura los DNS en tu proveedor

3. **Agregar Analytics**:
   ```bash
   npm install @vercel/analytics
   # o Google Analytics, Meta Pixel, etc.
   ```

4. **Agregar formulario de contacto funcional**:
   - Integrar con servicios como Formspree, SendGrid, etc.
   - O crear un endpoint API en Next.js

5. **Optimizar imágenes**:
   - Usar formato WebP
   - Lazy loading (ya implementado con Next.js Image)

6. **Testing**:
   - Probar en diferentes navegadores
   - Probar en dispositivos móviles reales
   - Lighthouse audit para performance

## 📊 Estructura de Archivos

```
izicont-web/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions
├── app/
│   ├── layout.tsx          # Layout con metadata SEO
│   ├── page.tsx            # Homepage con todas las secciones
│   └── globals.css         # Estilos globales
├── components/
│   ├── layout/
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       └── Badge.tsx
├── lib/
│   ├── constants.ts        # Todas las constantes
│   └── utils.ts            # Utilidades
├── public/
│   ├── img/                # Imágenes (agregar aquí)
│   ├── favicon.ico
│   └── robots.txt
├── next.config.mjs         # Config Next.js
├── tailwind.config.ts      # Config Tailwind
├── package.json
└── README.md
```

## 💡 Tips

- **Desarrollo rápido**: El hot reload está activo, los cambios se ven instantáneamente
- **TypeScript**: Aprovecha el autocompletado y detección de errores
- **Tailwind**: Usa el IntelliSense para ver las clases disponibles
- **Componentes**: Son reutilizables, puedes usarlos en otras páginas

## 🐛 Troubleshooting

### Error al hacer build
```bash
# Limpia el cache
rm -rf .next
npm run build
```

### Imágenes no se ven en producción
- Verifica que las rutas empiecen con `/img/` (sin punto)
- Asegúrate de que las imágenes estén en `/public/img/`

### Animaciones no funcionan
- Verifica que Framer Motion esté instalado: `npm install framer-motion`
- Asegúrate de que los componentes tengan `'use client'` al inicio

## 📞 Soporte

Si tienes dudas sobre el código:
1. Revisa este archivo
2. Revisa el README.md
3. Revisa el Plan_Detallado.md original

## ✅ Checklist de Pre-Launch

- [ ] Agregar todas las imágenes reales
- [ ] Revisar textos y corregir typos
- [ ] Probar todos los links
- [ ] Probar formularios (si los añades)
- [ ] Actualizar información de contacto
- [ ] Verificar que los CTAs funcionen
- [ ] Probar en mobile real
- [ ] Hacer Lighthouse audit
- [ ] Configurar dominio (si aplica)
- [ ] Agregar Analytics (si aplica)

---

**¡El proyecto está listo para usar!** 🚀

Desarrollado siguiendo el Plan_Detallado.md al 100%.
