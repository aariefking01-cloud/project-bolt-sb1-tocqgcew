export const BUSINESS = {
  name: 'Puduvai Bouncers',
  tagline: 'Professional Bouncer & Event Bouncer Services',
  location: 'White Town, Puducherry - 605001',
  address: 'Annai Indira Ninaivu Nagar, No. 13, Vanarapet, White Town, Puducherry - 605001',
  phone: '8220134135',
  phoneDisplay: '+91 82201 34135',
  phoneIntl: '+918220134135',
  whatsapp: '918220134135',
  instagram: 'puduvai_bouncers',
  instagramUrl: 'https://www.instagram.com/puduvai_bouncers/',
  instagramDisplay: '@puduvai_bouncers',
  city: 'Puducherry',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Puduvai+Bouncers+White+Town+Pondicherry',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Puduvai+Bouncers+White+Town+Pondicherry+605001',
};

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello Puduvai Bouncers, I would like to enquire about bouncer services for my event.';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildCallUrl(): string {
  return `tel:${BUSINESS.phoneIntl}`;
}
