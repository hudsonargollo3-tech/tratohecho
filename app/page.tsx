import Link from "next/link";
import {
  Bot,
  MessageCircle,
  KanbanSquare,
  BellRing,
  BrainCircuit,
  Server,
  Users,
  Plug,
  Languages,
  ShieldCheck,
  Repeat,
  ScanLine,
} from "lucide-react";
import { Header, Footer } from "@/components/chrome";
import { WhatsAppMockup, ChatDemoLabel } from "@/components/WhatsAppMockup";
import { urlRegistro, urlLogin, urlWhatsAppDemo } from "@/lib/links";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Demos />
        <ComoFunciona />
        <Funciones />
        <ParaQuien />
        <Precios />
        <Preguntas />
        <CtaFinal />
      </main>

      <Footer />
    </>
  );
}

/* ═══════════════════════════ HERO ═══════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-forest/5 px-3 py-1 text-xs font-semibold text-forest">
            <MessageCircle className="h-3.5 w-3.5" />
            Hecho en Santa Cruz, para negocios bolivianos
          </span>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-forest md:text-5xl lg:text-[3.4rem]">
            Tu agente de ventas con IA, atendiendo por WhatsApp{" "}
            <span className="text-gold-dark">las 24 horas</span>.
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/70">
            Trato Hecho atiende a tus clientes, califica los interesados y mueve
            cada venta por el embudo — dentro de un CRM que corre en tu propio
            servidor. Sin mensualidad, sin funciones bloqueadas, tus datos son
            tuyos.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={urlRegistro()}
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 font-heading text-base font-semibold text-ink shadow-md transition hover:bg-gold-light"
            >
              Probar gratis 14 días
            </a>
            <a
              href={urlWhatsAppDemo()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-forest/20 bg-surface px-6 py-3.5 font-heading text-base font-semibold text-forest transition hover:bg-forest/5"
            >
              <MessageCircle className="h-5 w-5" />
              Ver demo por WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-forest" /> Sin tarjeta de
              crédito
            </span>
            <span className="flex items-center gap-1.5">
              <Server className="h-4 w-4 text-forest" /> 100% tuyo, self-hosted
            </span>
            <span className="flex items-center gap-1.5">
              <Languages className="h-4 w-4 text-forest" /> En español
            </span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <WhatsAppMockup />
        </div>
      </div>
      <ChatDemoLabel />
    </section>
  );
}

/* ═══════════════════════════ DEMOS ═══════════════════════════ */

function Demos() {
  return null; // El mockup del hero ya muestra el chat; sección reservada.
}

/* ═════════════════════════ CÓMO FUNCIONA ══════════════════════ */

const PASOS = [
  {
    icon: ScanLine,
    titulo: "1. Conecta tu WhatsApp",
    texto:
      "Escaneas un código QR con tu número y listo — como WhatsApp Web. Sin APIs complicadas, sin esperar aprobaciones de nadie.",
  },
  {
    icon: Bot,
    titulo: "2. Enciende el agente de IA",
    texto:
      "Subes tus precios, horarios y respuestas frecuentes. El agente aprende tu negocio y empieza a contestar, calificar y vender.",
  },
  {
    icon: KanbanSquare,
    titulo: "3. Seguís cada venta",
    texto:
      "Cada conversa vive en un tablero: quién preguntó, quién está por cerrar, quién se enfrió. Tu equipo y la IA trabajan en el mismo lugar.",
  },
];

function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-ink py-20 text-surface">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            En marcha en tres pasos
          </h2>
          <p className="mt-3 text-surface/70">
            Sin instalar nada raro. Sin depender de un técnico. El mismo día
            podés estar vendendo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PASOS.map((p) => (
            <div
              key={p.titulo}
              className="rounded-2xl border border-surface/10 bg-surface/5 p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold/15 text-gold">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-surface/70">
                {p.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════ FUNCIONES ═════════════════════════ */

const FUNCIONES = [
  {
    icon: Bot,
    titulo: "Agentes de IA que venden",
    texto:
      "No es un chatbot con respuestas fijas: el agente lee el historial del cliente, consulta tus precios reales, califica el interesado y lo mueve en el embudo. Cuando toca, lo pasa a una persona.",
  },
  {
    icon: MessageCircle,
    titulo: "WhatsApp real, multi-número",
    texto:
      "Tu propio número, con envíos con ritmo y horario cuidados para no perder la línea. O el canal oficial de Meta si preferís escalar con plantillas aprobadas.",
  },
  {
    icon: KanbanSquare,
    titulo: "Embudo con vocabulario tuyo",
    texto:
      "En el mismo sistema un negocio dice «cliente», otro «paciente» y otro «comprador». Configurable por rubro: tienda, clínica, inmobiliaria, servicio.",
  },
  {
    icon: BellRing,
    titulo: "Nada se muere en silencio",
    texto:
      "Si un cliente se enfría sin respuesta, Trato Hecho retoma la conversa y avisa al equipo. Hay un radar de lo que está en riesgo de perderse.",
  },
  {
    icon: BrainCircuit,
    titulo: "La IA mejora sola",
    texto:
      "Cada conversación resuelta alimenta la base de conocimiento. La pantalla de Evolución muestra si el agente está acertando más y qué le falta aprender.",
  },
  {
    icon: Users,
    titulo: "Gobierno del equipo",
    texto:
      "Quién atiende a quién, con historial auditado. Reparto automático de conversaciones, métricas por persona y roles con los permisos que vos definás.",
  },
  {
    icon: Plug,
    titulo: "Se conecta a todo",
    texto:
      "Recibí leads de tu web, formularios o n8n por webhook, y armá automatizaciones «cuando pase X, hacé Y» sin escribir código.",
  },
  {
    icon: Server,
    titulo: "Tus datos, tu servidor",
    texto:
      "Instalación con un comando en tu propia VPS. No hay plan pago con funciones escondidas: el software es 100% abierto (MIT) y completo.",
  },
  {
    icon: Languages,
    titulo: "Español de verdad",
    texto:
      "Toda la interfaz está en español, y el agente contesta en el castellano que hablan tus clientes cruceños — nada de traducciones a medias.",
  },
];

function Funciones() {
  return (
    <section id="funciones" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-forest md:text-4xl">
            Todo lo que tu operación de ventas necesita
          </h2>
          <p className="mt-3 text-ink/70">
            Atención, embudo, automatización y análisis en una sola mesa — con la
            IA como un miembro más del equipo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FUNCIONES.map((f) => (
            <div
              key={f.titulo}
              className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm transition hover:shadow-card"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-forest/8 text-forest">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-forest">
                {f.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {f.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════ PARA QUIÉN ════════════════════════ */

const RUBROS = [
  { nombre: "Tiendas y e-commerce", detalle: "Consulta de stock, precio y cierre de venta por chat." },
  { nombre: "Clínicas y salud", detalle: "Agendamiento de turnos y recordatorios automáticos." },
  { nombre: "Inmobiliarias", detalle: "Calificación de interesados y agendamiento de visitas." },
  { nombre: "Servicios técnicos", detalle: "Recepción de pedidos y seguimiento del trabajo." },
  { nombre: "Restaurantes", detalle: "Pedidos por WhatsApp con menú y confirmación." },
  { nombre: "Educación y cursos", detalle: "Captación de alumnos y acompañamiento hasta la inscripción." },
];

function ParaQuien() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-forest md:text-4xl">
            Sirve para cualquier negocio que venda conversando
          </h2>
          <p className="mt-3 text-ink/70">
            Si tu venta pasa por un chat, Trato Hecho entra. Y se adapta al
            vocabulario de tu rubro.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RUBROS.map((r) => (
            <div
              key={r.nombre}
              className="flex items-start gap-4 rounded-xl border border-forest/10 bg-surface p-5"
            >
              <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
              <div>
                <h3 className="font-heading font-semibold text-forest">
                  {r.nombre}
                </h3>
                <p className="mt-1 text-sm text-ink/65">{r.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════ PRECIOS ═══════════════════════════ */

const PLANES = [
  {
    nombre: "Autónomo",
    precio: "Bs 149",
    periodo: "/mes",
    descripcion: "Para un negocio que recién arranca con la IA.",
    items: [
      "1 número de WhatsApp",
      "1 agente de IA",
      "Embudo y contactos ilimitados",
      "Hasta 3.000 conversaciones/mes",
      "Soporte por WhatsApp",
    ],
    destacado: false,
  },
  {
    nombre: "Negocio",
    precio: "Bs 349",
    periodo: "/mes",
    descripcion: "El favorito de las tiendas con equipo de atención.",
    items: [
      "Hasta 3 números de WhatsApp",
      "3 agentes de IA",
      "Hasta 5 usuarios en el equipo",
      "Conversaciones ilimitadas",
      "Automatizaciones y webhooks",
      "Métricas por atendente",
    ],
    destacado: true,
  },
  {
    nombre: "A tu medida",
    precio: "Hablemos",
    periodo: "",
    descripcion: "Instalación dedicada en tu propio servidor.",
    items: [
      "Licencia completa MIT — sin límites",
      "Instalación en tu VPS, datos 100% tuyos",
      "Personalización de marca",
      "Acompañamiento en la puesta en marcha",
      "Soporte prioritario",
    ],
    destacado: false,
  },
];

function Precios() {
  return (
    <section id="precios" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-forest md:text-4xl">
            Precios claros, en bolivianos
          </h2>
          <p className="mt-3 text-ink/70">
            Sin sorpresas ni «consultar precio». Y siempre podés llevarte el
            software a tu propio servidor — es tuyo.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {PLANES.map((p) => (
            <div
              key={p.nombre}
              className={`relative flex flex-col rounded-2xl p-7 ${
                p.destacado
                  ? "border-2 border-gold bg-forest text-surface shadow-card md:-mt-3 md:mb-3"
                  : "border border-forest/10 bg-white"
              }`}
            >
              {p.destacado && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">
                  El más elegido
                </span>
              )}
              <h3
                className={`font-heading text-lg font-semibold ${
                  p.destacado ? "text-gold" : "text-forest"
                }`}
              >
                {p.nombre}
              </h3>
              <p
                className={`mt-1 text-sm ${p.destacado ? "text-surface/70" : "text-ink/60"}`}
              >
                {p.descripcion}
              </p>
              <div className="mt-5 flex items-end gap-1">
                <span className="font-heading text-4xl font-bold">
                  {p.precio}
                </span>
                {p.periodo && (
                  <span
                    className={`pb-1 text-sm ${p.destacado ? "text-surface/60" : "text-ink/50"}`}
                  >
                    {p.periodo}
                  </span>
                )}
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-sm ${
                      p.destacado ? "text-surface/80" : "text-ink/75"
                    }`}
                  >
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${p.destacado ? "text-gold" : "text-forest"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={p.destacado ? urlRegistro() : urlWhatsAppDemo()}
                {...(p.destacado ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className={`mt-7 rounded-lg py-3 text-center font-heading font-semibold transition ${
                  p.destacado
                    ? "bg-gold text-ink hover:bg-gold-light"
                    : "border border-forest/20 text-forest hover:bg-forest/5"
                }`}
              >
                {p.destacado ? "Empezar ahora" : "Consultar"}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink/50">
          Precios en bolivianos, IVA incluido. Cancelás cuando quieras.
        </p>
      </div>
    </section>
  );
}

/* ═════════════════════════ PREGUNTAS ═════════════════════════ */

const FAQ = [
  {
    p: "¿Necesito saber de tecnología para usarlo?",
    r: "No. Conectás tu WhatsApp escaneando un código QR, como en WhatsApp Web. La configuración inicial se hace con preguntas sencillas: cómo se llama tu negocio, qué vendés, a qué precio.",
  },
  {
    p: "¿La IA contesta sola todo el tiempo?",
    r: "Vos decidís. Puede atender 100% sola y pasarte solo lo complejo, o intervenir siempre que quieras. Cada conversación muestra quién la está atendiendo: la IA o una persona del equipo.",
  },
  {
    p: "¿Y si la IA no sabe una respuesta?",
    r: "Cuando no tiene la información, lo dice y pasa la conversación a tu equipo — con el historial completo. Y esa falla queda registrada para que le enseñes después.",
  },
  {
    p: "¿Es otro chatbot de opciones tipo menú?",
    r: "No. Entiende lo que el cliente escribe de verdad, consulta tus datos reales (precios, stock, horarios) y conversa en lenguaje natural, en español.",
  },
  {
    p: "¿De quién son los datos de mis clientes?",
    r: "Tuyos. En el plan dedicado, todo corre en tu propio servidor y nadie más tiene acceso. En la nube gestionada, tus datos nunca se usan para entrenar modelos de nadie.",
  },
  {
    p: "¿Sirve si no tengo página web?",
    r: "Perfecto — de hecho, la mayoría de nuestros negocios vende solo por WhatsApp. Trato Hecho nació para eso.",
  },
  {
    p: "¿Puedo cambiar de plan o cancelar?",
    r: "Sí, en cualquier momento y sin penalidad. Y como el software es abierto (licencia MIT), siempre podés exportar tu operación y seguir por tu cuenta.",
  },
];

function Preguntas() {
  return (
    <section id="preguntas" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-forest md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-ink/70">
            Lo que más nos preguntan los negocios cruceños.
          </p>
        </div>

        <div className="mt-10 divide-y divide-forest/10">
          {FAQ.map((f) => (
            <details key={f.p} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-forest">
                {f.p}
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-forest/20 text-forest transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════ CTA FINAL ═════════════════════════ */

function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-center text-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
      />
      <div className="mx-auto max-w-2xl px-5">
        <Repeat className="mx-auto h-10 w-10 text-gold" />
        <h2 className="mt-5 font-heading text-3xl font-bold md:text-4xl">
          Que tu próximo cliente sea atendido, aunque estés durmiendo
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-surface/75">
          Creá tu cuenta en dos minutos, conectá tu WhatsApp y dejá que el
          agente empiece a vender. Catorce días de prueba, sin tarjeta.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={urlRegistro()}
            className="rounded-lg bg-gold px-7 py-3.5 font-heading font-semibold text-ink shadow-md transition hover:bg-gold-light"
          >
            Crear mi cuenta gratis
          </a>
          <a
            href={urlLogin()}
            className="rounded-lg border border-surface/25 px-7 py-3.5 font-heading font-semibold text-surface transition hover:bg-surface/10"
          >
            Ya tengo cuenta
          </a>
        </div>
      </div>
    </section>
  );
}
