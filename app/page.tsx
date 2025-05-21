import Image from 'next/image'
import Link from 'next/link'
import { PetCarousel } from '@/components/PetCarousel'
import { Chatbot } from '@/components/Chatbot'
import { HeroSection } from '@/components/HeroSection'
import { ImpactStories } from '@/components/ImpactStories'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ImpactStories />

      {/* Pet Adoption Carousel Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
            Find Your Perfect Companion
          </h2>
          <PetCarousel />
          <div className="text-center mt-8">
            <Link href="/adopt" className="btn-primary">
              View All Pets
            </Link>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </main>
  )
} 