'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&auto=format&fit=crop&q=80"
          alt="Happy pets in the city"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Making Cities Better for{' '}
            <span className="text-primary-600">Pets</span> and{' '}
            <span className="text-secondary-600">People</span>
          </motion.h1>
          
          <motion.p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our movement to create pet-friendly communities where every pet has a home
            and every owner has support.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary">
              Join the Movement
            </Link>
            <Link href="/volunteer-form" className="btn-secondary">
              Volunteer Now
            </Link>
            <Link href="/impact" className="btn-outline">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 