export const SITE = {
  mapsUrl: 'https://maps.app.goo.gl/MFTyoLP8kJyNCne27',
  instagramUrl: 'https://www.instagram.com/vfitness_nutricion/',
  instagramHandle: '@vfitness_nutricion',
} as const;

export const METHOD = {
  title: 'Método VFitness',
  tagline: 'Hemos desarrollado un método simple y muy efectivo para que llegues a tu objetivo.',
  points: [
    'Contabilizamos todas las calorías a partir de tu metabolismo basal, adaptando los macronutrientes para que todo haga bien su función. Si todo está bien adaptado, los resultados son increíbles.',
    'Marcamos un plan de entrenamiento específico para que desarrolles toda tu musculatura de forma completa.',
    'Te acompañamos durante todo el proceso hasta que llegues a ver tu cuerpo deseado.',
  ],
  stat: 'Más de 7.000 cambios',
  statLabel: 'han confiado en nosotros y han conseguido cumplir sus metas.',
  cta: '¿A qué esperas para tener el cuerpo de tus sueños?',
} as const;

/** Id del plan a destacar como "Recomendado" (puede variar por ejemplo) */
export const RECOMMENDED_PLAN_ID = 'dieta-entreno-mensual';

export const PLANS = [
  {
    id: 'dieta-mensual',
    name: 'Dieta Mensual',
    price: 80,
    period: 'Cada mes',
    description: 'Dieta personalizada mensual (Online). Dietas para perder peso y/o subir músculo. Enviaremos un cuestionario al Email una vez recibido el pago.',
    onlyOnline: true,
  },
  {
    id: 'entreno-mensual',
    name: 'Entreno Mensual',
    price: 80,
    period: 'Cada mes',
    description: 'Entreno personalizado mensual (Online). Entrenos para perder peso y/o subir músculo. Enviaremos un cuestionario al Email una vez recibido el pago.',
    onlyOnline: true,
  },
  {
    id: 'dieta-entreno-mensual',
    name: 'Dieta + Entreno Mensual',
    price: 120,
    period: 'Cada mes',
    description: 'Dietas y entrenos personalizados mensuales (Online). D + E para perder peso y/o subir músculo. Cuestionario al Email tras el pago.',
    onlyOnline: true,
  },
  {
    id: 'dieta-trimestral',
    name: 'Dieta Trimestral',
    price: 200,
    period: 'Cada 3 meses',
    description: 'Dieta personalizada trimestral (Online).',
    onlyOnline: true,
  },
  {
    id: 'entreno-trimestral',
    name: 'Entreno Trimestral',
    price: 200,
    period: 'Cada 3 meses',
    description: 'Entreno personalizado trimestral (Online).',
    onlyOnline: true,
  },
  {
    id: 'dieta-entreno-trimestral',
    name: 'Dieta + Entreno Trimestral',
    price: 300,
    period: 'Cada 3 meses',
    description: 'Dieta y entreno personalizados trimestrales (Online).',
    onlyOnline: true,
  },
  {
    id: 'dieta-anual',
    name: 'Dieta Anual',
    price: 799,
    period: 'Cada año',
    description: 'Dieta personalizada anual (Online). Dietas para perder peso y/o subir músculo. Cuestionario al Email tras el pago.',
    onlyOnline: true,
  },
  {
    id: 'entreno-anual',
    name: 'Entreno Anual',
    price: 799,
    period: 'Cada año',
    description: 'Entrenos personalizados anuales (Online). Para perder peso y/o subir músculo. Cuestionario al Email tras el pago.',
    onlyOnline: true,
  },
  {
    id: 'dieta-entreno-anual',
    name: 'Dieta + Entreno Anual',
    price: 1200,
    period: 'Cada año',
    description: 'Dietas y entrenos personalizados anuales (Online). D + E para perder peso y/o subir músculo. Cuestionario al Email tras el pago.',
    onlyOnline: true,
  },
] as const;

/** Para ejemplo minimalista: 3 tipos con precios por periodo */
export const PLAN_TIERS = [
  { id: 'dieta', name: 'Solo dieta', mensual: 80, trimestral: 200, anual: 799, periodLabel: { mensual: 'Cada mes', trimestral: 'Cada 3 meses', anual: 'Cada año' } },
  { id: 'dieta-entreno', name: 'Dieta + Entreno', mensual: 120, trimestral: 300, anual: 1200, periodLabel: { mensual: 'Cada mes', trimestral: 'Cada 3 meses', anual: 'Cada año' }, recommended: true },
  { id: 'entreno', name: 'Solo entreno', mensual: 80, trimestral: 200, anual: 799, periodLabel: { mensual: 'Cada mes', trimestral: 'Cada 3 meses', anual: 'Cada año' } },
] as const;
