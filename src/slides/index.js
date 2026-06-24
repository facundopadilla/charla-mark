// Slide registry — single source of truth for order, titles and section labels.
// Each entry: { id, title, section, Component }

// Opening
import Cover from './opening/Cover'
import AboutMe from './opening/AboutMe'
import Hook from './opening/Hook'
import Takeaways from './opening/Takeaways'
import Agenda from './opening/Agenda'

// Community
import SaltaDev from './community/SaltaDev'

// Section dividers
import {
  Divider1,
  Divider2,
  Divider3,
  Divider4,
  Divider5,
  Divider6,
  Divider7,
  Divider8,
} from './dividers'

// 01 · Panorama
import Trends2026 from './s1/Trends2026'
import AiAgentic from './s1/AiAgentic'
import InstagramAlgo from './s1/InstagramAlgo'
import MetaSocialCommerce from './s1/MetaSocialCommerce'
import ConsumerAr from './s1/ConsumerAr'
import ConsumerBehavior from './s1/ConsumerBehavior'
import ConsumerApps from './s1/ConsumerApps'
import PaymentsLatam from './s1/PaymentsLatam'

// 02 · Redes como canal
import WhatsAppKing from './s2/WhatsAppKing'
import WhatsAppVsEmail from './s2/WhatsAppVsEmail'
import WhatsAppGrowth from './s2/WhatsAppGrowth'
import WhatsApp2026 from './s2/WhatsApp2026'
import InstagramSelling from './s2/InstagramSelling'

// 03 · Omnicanalidad
import OmniHow from './s3/OmniHow'
import OmniTools from './s3/OmniTools'

// 04 · Fidelización
import FerreteriaGay from './s4/FerreteriaGay'
import WhyRetain from './s4/WhyRetain'
import LoyaltyPrograms from './s4/LoyaltyPrograms'
import RetentionFlows from './s4/RetentionFlows'
import MassMessaging from './s4/MassMessaging'
import LoyaltyMetrics from './s4/LoyaltyMetrics'

// 05 · Atención y postventa
import ServiceBenchmarks from './s5/ServiceBenchmarks'
import ChatbotsAI from './s5/ChatbotsAI'
import PostSale from './s5/PostSale'

// 06 · Herramientas
import FreeStack from './s6/FreeStack'
import EmailCrmTools from './s6/EmailCrmTools'
import ToolsByCategory from './s6/ToolsByCategory'

// 07 · Casos reales
import CasesHighlights from './s7/CasesHighlights'
import CasesMore from './s7/CasesMore'
import CommonPractices from './s7/CommonPractices'

// 08 · Plan de acción
import ActionPlan from './s8/ActionPlan'
import QuickWins from './s8/QuickWins'
import CommonMistakes from './s8/CommonMistakes'
import ArgentinaContext from './s8/ArgentinaContext'

// Closing
import Recap from './closing/Recap'
import Closing from './closing/Closing'

const S = (id, title, section, Component) => ({ id, title, section, Component })

export const slides = [
  // Apertura
  S('cover', 'Marketing Digital & Fidelización 2026', 'Apertura', Cover),
  S('about', 'Quién soy — Facundo Padilla', 'Apertura', AboutMe),
  S('saltadev', 'SaltaDev — la comunidad', 'Apertura', SaltaDev),
  S('hook', 'Por qué esta charla, ahora', 'Apertura', Hook),
  S('takeaways', 'Las tres conclusiones', 'Apertura', Takeaways),
  S('agenda', 'Qué vamos a ver hoy', 'Apertura', Agenda),

  // 01 · Panorama
  S('d1', 'Panorama actual', '01 · Panorama', Divider1),
  S('s1-trends', 'La IA pasa de probar a confiar', '01 · Panorama', Trends2026),
  S('s1-agentic', 'De automatizar a agentes que deciden', '01 · Panorama', AiAgentic),
  S('s1-ig', 'Instagram premia la intención', '01 · Panorama', InstagramAlgo),
  S('s1-meta', 'El 82% del social commerce es Meta', '01 · Panorama', MetaSocialCommerce),
  S('s1-ar', 'El eCommerce argentino crece', '01 · Panorama', ConsumerAr),
  S('s1-behavior', 'Consumidor racional y mobile-first', '01 · Panorama', ConsumerBehavior),
  S('s1-apps', 'Apps que usa el argentino para comparar', '01 · Panorama', ConsumerApps),
  S('s1-pay', 'Cómo paga el comprador argentino', '01 · Panorama', PaymentsLatam),

  // 02 · Redes como canal
  S('d2', 'Redes como canal de venta', '02 · Redes', Divider2),
  S('s2-wa', 'WhatsApp es EL canal de LATAM', '02 · Redes', WhatsAppKing),
  S('s2-vs', 'WhatsApp vs Email', '02 · Redes', WhatsAppVsEmail),
  S('s2-growth', 'Argentina lidera el comercio por WhatsApp', '02 · Redes', WhatsAppGrowth),
  S('s2-2026', 'Lo nuevo de WhatsApp Business 2026', '02 · Redes', WhatsApp2026),
  S('s2-ig', 'Dónde vender de verdad', '02 · Redes', InstagramSelling),

  // 03 · Omnicanalidad
  S('d3', 'Omnicanalidad', '03 · Omnicanalidad', Divider3),
  S('s3-how', 'Bandeja unificada e historial', '03 · Omnicanalidad', OmniHow),
  S('s3-tools', 'Plataformas para vender online', '03 · Omnicanalidad', OmniTools),

  // 04 · Fidelización
  S('d4', 'Fidelización y retención', '04 · Fidelización', Divider4),
  S('s4-gay', 'Un caso de acá: Ferretería Gay', '04 · Fidelización', FerreteriaGay),
  S('s4-why', 'Retener es el mejor negocio', '04 · Fidelización', WhyRetain),
  S('s4-prog', 'Programas que sí funcionan', '04 · Fidelización', LoyaltyPrograms),
  S('s4-flows', 'Flujos automatizados', '04 · Fidelización', RetentionFlows),
  S('s4-mass', 'Mensajes masivos sin miedo', '04 · Fidelización', MassMessaging),
  S('s4-metrics', 'Las métricas que importan', '04 · Fidelización', LoyaltyMetrics),

  // 05 · Atención y postventa
  S('d5', 'Atención y postventa', '05 · Atención', Divider5),
  S('s5-bench', 'La velocidad como diferenciador', '05 · Atención', ServiceBenchmarks),
  S('s5-bots', 'Automatizar sin perder cercanía', '05 · Atención', ChatbotsAI),
  S('s5-post', 'Seguimiento que genera recomendaciones', '05 · Atención', PostSale),

  // 06 · Herramientas
  S('d6', 'Herramientas recomendadas', '06 · Herramientas', Divider6),
  S('s6-free', 'El stack gratuito para arrancar', '06 · Herramientas', FreeStack),
  S('s6-email', 'Email, CRM y automatización', '06 · Herramientas', EmailCrmTools),
  S('s6-cat', 'El resto del kit, por categoría', '06 · Herramientas', ToolsByCategory),

  // 07 · Casos reales
  S('d7', 'Casos reales 2024–2026', '07 · Casos', Divider7),
  S('s7-hi', 'Negocios como el tuyo', '07 · Casos', CasesHighlights),
  S('s7-more', 'Funciona a toda escala', '07 · Casos', CasesMore),
  S('s7-common', 'Qué tienen en común', '07 · Casos', CommonPractices),

  // 08 · Plan de acción
  S('d8', 'Plan de acción', '08 · Plan', Divider8),
  S('s8-plan', 'Plan de acción en 8 pasos', '08 · Plan', ActionPlan),
  S('s8-quick', 'Victorias rápidas, bajo presupuesto', '08 · Plan', QuickWins),
  S('s8-mistakes', 'Errores comunes y cómo evitarlos', '08 · Plan', CommonMistakes),
  S('s8-ar', 'Hecho para el contexto argentino', '08 · Plan', ArgentinaContext),

  // Cierre
  S('recap', 'Si te llevás solo tres cosas', 'Cierre', Recap),
  S('closing', 'Gracias', 'Cierre', Closing),
]

export default slides
