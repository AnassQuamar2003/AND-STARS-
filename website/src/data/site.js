// Single source of truth — mirrors the agency-services / agency-clients skills.

export const brand = {
  name: 'AND STARS',
  tagline: 'Young Minds. Bright Future.',
  mission: 'We build fast, modern, revenue-driving websites and web apps for growing businesses.',
  vision: 'To become the trusted digital partner for ambitious businesses ready to grow.',
  values: ['Craftsmanship', 'Speed', 'Transparency', 'Growth'],
  email: 'hello@andstars.dev',
}

export const services = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    blurb: 'Landing pages, business & corporate websites that look premium and load fast.',
    features: ['Custom UI design', 'Fully responsive', 'CMS & blog', 'SEO & speed', 'Analytics'],
    tiers: [
      { name: 'Landing Page', price: '$600 – $3,500' },
      { name: 'Business Website', price: '$1,500 – $8,000' },
      { name: 'Corporate Website', price: '$5,000 – $15,000' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Development',
    blurb: 'Online stores that turn visitors into customers, with secure checkout and full admin control.',
    features: ['Cart & checkout', 'Payment gateway', 'Order tracking', 'Discounts', 'Customer accounts'],
    tiers: [
      { name: 'Starter', price: '$3,000 – $6,000' },
      { name: 'Professional', price: '$6,000 – $15,000' },
      { name: 'Enterprise', price: '$15,000 – $50,000+' },
    ],
  },
  {
    id: 'web-apps',
    title: 'Custom Web Applications',
    blurb: 'ERP, CRM, booking systems and platforms built on Laravel + React.',
    features: ['Authentication & roles', 'Dashboards', 'Reports & APIs', 'Notifications', 'Documentation'],
    tiers: [
      { name: 'Small', price: '$5,000 – $10,000' },
      { name: 'Medium', price: '$10,000 – $30,000' },
      { name: 'Large', price: '$30,000 – $150,000+' },
    ],
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    blurb: 'Modernize an outdated site — better UX, faster performance, higher conversions.',
    features: ['UX audit', 'Modern design', 'Faster performance', 'Mobile optimization', 'SEO improvements'],
    tiers: [{ name: 'Full redesign', price: '$1,500 – $8,000' }],
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    blurb: 'Keep your site secure, backed up and up to date — monthly peace of mind.',
    features: ['Security updates', 'Backups', 'Minor fixes', 'Monitoring', 'Priority support'],
    tiers: [{ name: 'Starter', price: 'from $100 / month' }],
  },
]

export const industries = [
  { name: 'Restaurants', icon: 'UtensilsCrossed', hook: 'Online menu, reservations & ordering that fill more tables.' },
  { name: 'Hotels', icon: 'BedDouble', hook: 'Direct bookings, stunning galleries — less OTA commission.' },
  { name: 'Dentists', icon: 'Stethoscope', hook: 'Appointment booking and trust that wins new patients.' },
  { name: 'Lawyers', icon: 'Scale', hook: 'Authority-first design with online consultation booking.' },
  { name: 'Car Rental', icon: 'Car', hook: 'Fleet catalog with online booking & payments.' },
  { name: 'Schools', icon: 'GraduationCap', hook: 'From info site to full school management system.' },
  { name: 'Gyms', icon: 'Dumbbell', hook: 'Class schedules, memberships and easy sign-ups.' },
  { name: 'Startups', icon: 'Rocket', hook: 'Launch fast, look funded — landing pages & MVP apps.' },
]

export const stats = [
  { value: 40, suffix: '+', label: 'Projects delivered' },
  { value: 30, suffix: '+', label: 'Happy clients' },
  { value: 5, suffix: '', label: 'Industries served' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
]

export const process = [
  { step: '01', title: 'Discover', text: 'We learn your business, goals and audience to define the plan.' },
  { step: '02', title: 'Design', text: 'We craft a modern, on-brand design you approve before we build.' },
  { step: '03', title: 'Develop', text: 'We build fast, secure and responsive — with clean, tested code.' },
  { step: '04', title: 'Launch', text: 'We deploy, optimize for SEO & speed, and support you after go-live.' },
]

export const whyUs = [
  { title: 'Modern Design', text: 'Cinematic, unique interfaces — never a template.', icon: 'Sparkles' },
  { title: 'Fast Performance', text: 'Optimized for speed, SEO and Core Web Vitals.', icon: 'Zap' },
  { title: 'Real Results', text: 'We design for conversions — more leads and sales.', icon: 'TrendingUp' },
  { title: 'Fair Pricing', text: 'Transparent tiers with no surprise costs.', icon: 'BadgeDollarSign' },
]

export const testimonials = [
  { quote: 'AND STARS rebuilt our site and bookings jumped within weeks. Truly next level.', name: 'Sarah M.', role: 'Hotel Owner' },
  { quote: 'They made our clinic look premium. New patients mention the website constantly.', name: 'Dr. Karim', role: 'Dental Clinic' },
  { quote: 'Our custom booking app runs flawlessly. Best dev team we have worked with.', name: 'Yassine B.', role: 'Car Rental CEO' },
]

export const work = [
  { title: 'Lumière Bistro', category: 'Restaurants', desc: 'Menu, reservations & online ordering.' },
  { title: 'Azure Stay Hotels', category: 'Hotels', desc: 'Direct booking engine & gallery.' },
  { title: 'BrightSmile Dental', category: 'Dentists', desc: 'Appointment booking & patient trust.' },
  { title: 'DriveNow Rentals', category: 'Car Rental', desc: 'Fleet catalog & online payments.' },
  { title: 'PulseFit Gym', category: 'Gyms', desc: 'Memberships & class scheduling.' },
  { title: 'NovaLaunch', category: 'Startups', desc: 'High-converting product landing page.' },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]
