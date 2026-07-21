import Hero from '../sections/Hero'
import LogoMarquee from '../sections/LogoMarquee'
import ServicesPreview from '../sections/ServicesPreview'
import FeaturedWork from '../sections/FeaturedWork'
import Industries from '../sections/Industries'
import WhyUs from '../sections/WhyUs'
import Process from '../sections/Process'
import Stats from '../sections/Stats'
import Testimonials from '../sections/Testimonials'
import CTABand from '../sections/CTABand'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesPreview />
      <FeaturedWork />
      <Industries />
      <WhyUs />
      <Process />
      <Stats />
      <Testimonials />
      <CTABand />
    </>
  )
}
