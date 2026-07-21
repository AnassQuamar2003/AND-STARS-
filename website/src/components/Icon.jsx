// Explicit icon registry — only the icons actually used, so the bundle stays small.
import {
  Circle,
  // industries
  UtensilsCrossed, BedDouble, Stethoscope, Scale, Car, GraduationCap, Dumbbell, Rocket,
  // why us
  Sparkles, Zap, TrendingUp, BadgeDollarSign,
  // services
  Layout, ShoppingBag, Boxes, Wand2, ShieldCheck,
} from 'lucide-react'

const registry = {
  UtensilsCrossed, BedDouble, Stethoscope, Scale, Car, GraduationCap, Dumbbell, Rocket,
  Sparkles, Zap, TrendingUp, BadgeDollarSign,
  Layout, ShoppingBag, Boxes, Wand2, ShieldCheck,
}

// Render a registered lucide icon by string name (from data files).
export default function Icon({ name, ...props }) {
  const Cmp = registry[name] || Circle
  return <Cmp {...props} />
}
