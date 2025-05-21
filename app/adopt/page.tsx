import Image from 'next/image'
import Link from 'next/link'

// This would typically come from a database or API
const pets = [
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
  // Add other pets here...
]

export default function AdoptPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <h1 className="font-display text-4xl font-bold text-center mb-12">
          Available Pets for Adoption
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md"
            >
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
          ))}
        </div>
      </div>
    </main>
  )
} 