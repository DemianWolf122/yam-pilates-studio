# Yam Pilates Studio

> **La energía de fluir en movimiento**

Landing page para **Yam Pilates Studio**, estudio de pilates boutique en Punta Mogotes (Mar del Plata). Sitio estático (HTML + CSS + JS vanilla), mobile-first, one-page long-scroll.

## Datos del negocio

| Dato | Valor |
|------|-------|
| Slogan | La energía de fluir en movimiento |
| Instructora | Paola Parra |
| Dirección | Puan 1873, Punta Mogotes |
| Instagram | [@yam_pilates](https://instagram.com/yam_pilates) |
| WhatsApp | ⚠️ *Pendiente* — por ahora apunta al teléfono de **Atrio Studio** (falta el número real) |

## Estructura del sitio

Nav · Hero · Enfoque · Paola (instructora) · El Estudio · Clases · Pilates & Salud · Contacto/Reserva · Footer.
CTA único y omnipresente a **WhatsApp** (estrategia tomada de la referencia PhiPilates). No se publican precios: *"tarifas por consulta directa"*.

## Sistema de diseño

**Paleta** (en `assets/css/styles.css`, tokens `:root`):
`--crema #F3ECE1` · `--arena #E4D5C1` · `--camel #C39A6B` · `--terracota #B0654A` (CTA) · `--malva #B79A97` · `--cacao #4A3B30` (texto) · `--oliva #8C8A6E`

**Tipografía:**
- **Libertinus Serif** — títulos y "Yam" (self-host vía Fontsource CDN)
- **Italianno** — "studio" y acentos en cursiva (Google Fonts)
- **Jost** — cuerpo, navegación, botones (Google Fonts)

El logotipo es el lockup **Yam** *studio* (serif bold + script), tal como el ejemplo 2 del moodboard.

## Archivos

```
index.html              # la landing
assets/css/styles.css   # sistema de diseño + secciones
assets/js/main.js       # nav, menú móvil, reveals, WhatsApp centralizado
assets/favicon.svg
```

## Correr en local

```bash
python -m http.server 5510
# abrir http://localhost:5510
```

## ⚠️ Placeholders a reemplazar antes de publicar

- [ ] **WhatsApp:** editar `YAM.whatsapp` en [`assets/js/main.js`](assets/js/main.js) (formato `549…`, sin `+`). Hoy vacío → abre WhatsApp sin destinatario.
- [ ] **Fotos:** los bloques `.photo-ph` (hero usa composición tipográfica; Paola y Estudio usan placeholders) van reemplazados por **fotografía real** del estudio y de Paola (editorial, luz natural).
- [ ] **Datos con `*`:** años de práctica, máx. personas por clase y horarios son provisorios — confirmar con Paola.
- [ ] **Clases:** modalidades y duraciones son tentativas hasta confirmar la oferta real.

---

Proyecto de **Atrio** · Hecho por Lucila
