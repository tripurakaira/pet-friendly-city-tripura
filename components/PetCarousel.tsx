'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Pet = {
  id: string
  name: string
  type: string
  breed: string
  age: string
  gender: string
  image: string
  description: string
}

// Sample data - in a real app, this would come from an API
const pets: Pet[] = [
  {
    id: '1',
    name: 'Max',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '2 years',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60',
    description: 'Friendly and energetic, loves playing fetch and going for walks. Great with children and other pets.',
  },
  {
    id: '2',
    name: 'Luna',
    type: 'Cat',
    breed: 'Siamese',
    age: '1 year',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=60',
    description: 'Playful and affectionate, enjoys cuddling and chasing toys. Loves sunny spots and gentle pets.',
  },
  {
    id: '3',
    name: 'Buddy',
    type: 'Dog',
    breed: 'Beagle',
    age: '3 years',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&auto=format&fit=crop&q=60',
    description: 'Gentle and well-behaved, great with children and other pets. Enjoys long walks and belly rubs.',
  },
  {
    id: '4',
    name: 'Bella',
    type: 'Cat',
    breed: 'Maine Coon',
    age: '2 years',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=800&auto=format&fit=crop&q=60',
    description: 'Majestic and friendly, loves attention and playing with toys. Gets along well with other cats.',
  },
  {
    id: '5',
    name: 'Rocky',
    type: 'Dog',
    breed: 'German Shepherd',
    age: '1 year',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&auto=format&fit=crop&q=60',
    description: 'Intelligent and loyal, excellent guard dog. Needs regular exercise and mental stimulation.',
  },
  {
    id: '6',
    name: 'Milo',
    type: 'Cat',
    breed: 'Tabby',
    age: '4 years',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=60',
    description: 'Independent yet affectionate, loves exploring and watching birds. Great companion for quiet homes.',
  },
  // Add more pets as needed
]

export function PetCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="pb-12"
      >
        {pets.map((pet) => (
          <SwiperSlide key={pet.id}>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md">
              <div className="relative h-64">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-gray-900">
                      {pet.name}
                    </h3>
                    <p className="text-gray-600">
                      {pet.breed} • {pet.age}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      pet.gender === 'Male'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-pink-100 text-pink-800'
                    }`}
                  >
                    {pet.gender}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {pet.description}
                </p>
                <Link
                  href={`/adopt/${pet.id}`}
                  className="inline-block w-full text-center btn-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {pets.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 