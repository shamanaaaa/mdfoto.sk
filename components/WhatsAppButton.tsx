import { MessageCircle } from "lucide-react";

const whatsappHref =
  "https://wa.me/421948505587?text=Ahoj%20Majka%2C%20m%C3%A1m%20z%C3%A1ujem%20o%20fotenie%20a%20rada%20by%20som%20si%20overila%20vo%C4%BEn%C3%BD%20term%C3%ADn.";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Napísať na WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-4 py-3 text-cream-100 shadow-lg hover:bg-charcoal-800 transition-colors"
    >
      <MessageCircle size={18} />
      <span className="text-xs tracking-widest uppercase">WhatsApp</span>
    </a>
  );
}
