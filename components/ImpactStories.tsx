'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function ImpactStories() {
  return (
    <motion.section 
      className="section-padding bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
          Impact Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60"
                alt="Community Park Transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-3">Community Park Transformation</h3>
              <p className="text-gray-600 mb-4">
                How we turned an unused space into a vibrant pet-friendly park where pets and owners can socialize.
              </p>
              <Link href="/stories/park-transformation" className="text-primary-600 hover:text-primary-700 font-medium">
                Read More →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60"
                alt="Pet-Friendly Business Initiative"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-3">Pet-Friendly Business Initiative</h3>
              <p className="text-gray-600 mb-4">
                Local businesses opening their doors to pets, creating a more inclusive community for pet owners.
              </p>
              <Link href="/stories/business-initiative" className="text-primary-600 hover:text-primary-700 font-medium">
                Read More →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60"
                alt="Education Program Success"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-3">Education Program Success</h3>
              <p className="text-gray-600 mb-4">
                Teaching responsible pet ownership in schools and creating a new generation of pet advocates.
              </p>
              <Link href="/stories/education-program" className="text-primary-600 hover:text-primary-700 font-medium">
                Read More →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 