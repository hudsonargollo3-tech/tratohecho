/**
 * URL del CRM (la instancia real de Trato Hecho).
 * Las CTA de registro y login apuntan acá.
 */
export const CRM_URL = "https://app.tratohecho.bo";

export function urlRegistro(invitado?: string) {
  return invitado ? `${CRM_URL}/signup?invite=${invitado}` : `${CRM_URL}/signup`;
}

export function urlLogin() {
  return `${CRM_URL}/login`;
}

export function urlWhatsAppDemo() {
  const mensaje = encodeURIComponent(
    "¡Hola! Vi el sitio de Trato Hecho y quiero una demostración.",
  );
  return `https://wa.me/59170000000?text=${mensaje}`;
}
