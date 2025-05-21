import { AdoptionForm } from '@/components/AdoptionForm'
import { notFound } from 'next/navigation'

// This would typically come from a database or API
const pets = [
  {
    id: '1',
    name: 'Max',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '2 years',
    gender: 'Male',
  },
  {
    id: '2',
    name: 'Luna',
    type: 'Cat',
    breed: 'Siamese',
    age: '1 year',
    gender: 'Female',
  },
  {
    id: '3',
    name: 'Buddy',
    type: 'Dog',
    breed: 'Beagle',
    age: '3 years',
    gender: 'Male',
  },
  {
    id: '4',
    name: 'Bella',
    type: 'Cat',
    breed: 'Maine Coon',
    age: '2 years',
    gender: 'Female',
  },
  {
    id: '5',
    name: 'Rocky',
    type: 'Dog',
    breed: 'German Shepherd',
    age: '1 year',
    gender: 'Male',
  },
  {
    id: '6',
    name: 'Milo',
    type: 'Cat',
    breed: 'Tabby',
    age: '4 years',
    gender: 'Male',
  },
]

export default function AdoptionApplicationPage({ params }: { params: { id: string } }) {
  const pet = pets.find(p => p.id === params.id)

  if (!pet) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Adopt {pet.name}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {pet.breed} • {pet.age} • {pet.gender}
          </p>
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
            <AdoptionForm petName={pet.name} />
          </div>
        </div>
      </div>
    </main>
  )
} 