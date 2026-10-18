import { urlLogin, urlRegistro, urlWhatsAppDemo } from "@/lib/links";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-forest font-heading text-lg font-bold text-gold">
            T
          </span>
          <span className="font-heading text-lg font-bold text-forest">
            Trato Hecho
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <a href="#como-funciona" className="text-ink/70 hover:text-forest">
            Cómo funciona
          </a>
          <a href="#funciones" className="text-ink/70 hover:text-forest">
            Funciones
          </a>
          <a href="#precios" className="text-ink/70 hover:text-forest">
            Precios
          </a>
          <a href="#preguntas" className="text-ink/70 hover:text-forest">
            Preguntas
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={urlLogin()}
            className="rounded-md px-3 py-2 text-sm font-semibold text-forest hover:bg-forest/5"
          >
            Entrar
          </a>
          <a
            href={urlRegistro()}
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-gold-light"
          >
            Crear cuenta
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-ink text-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold font-heading font-bold text-ink">
              T
            </span>
            <span className="font-heading text-lg font-bold">Trato Hecho</span>
          </div>
          <p className="mt-3 text-sm text-surface/70">
            El sistema operativo de ventas con agentes de IA, hecho para
            negocios bolivianos. Santa Cruz de la Sierra, Bolivia.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold">Producto</h4>
          <ul className="mt-3 space-y-2 text-sm text-surface/70">
            <li>
              <a href="#funciones" className="hover:text-gold">
                Funciones
              </a>
            </li>
            <li>
              <a href="#precios" className="hover:text-gold">
                Precios
              </a>
            </li>
            <li>
              <a href={urlRegistro()} className="hover:text-gold">
                Crear cuenta
              </a>
            </li>
            <li>
              <a href={urlLogin()} className="hover:text-gold">
                Entrar
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-surface/70">
            <li>
              <a
                href={urlWhatsAppDemo()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                WhatsApp
              </a>
            </li>
            <li>hola@tratohecho.bo</li>
            <li>Santa Cruz, Bolivia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-surface/10 py-5 text-center text-xs text-surface/50">
        © {new Date().getFullYear()} Trato Hecho · Software 100% abierto (MIT) ·
        Tus datos en tu servidor
      </div>
    </footer>
  );
}
