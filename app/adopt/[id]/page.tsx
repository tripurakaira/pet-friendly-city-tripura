import { notFound } from 'next/navigation'
import Image from 'next/image'

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
    details: 'Max is a well-trained and socialized Golden Retriever who loves to play and interact with people. He has completed basic obedience training and is house-trained. Max would be perfect for an active family who enjoys outdoor activities.',
    requirements: [
      'Active household with regular exercise routine',
      'Experience with large dogs preferred',
      'Secure fenced yard',
      'No small children (under 5)',
      'Regular veterinary care commitment'
    ]
  },
  // Add other pets here...
]

export default function PetPage({ params }: { params: { id: string } }) {
  const pet = pets.find(p => p.id === params.id)

  if (!pet) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-96">
              <Image
                src={pet.image}
                alt={pet.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">
                    {pet.name}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {pet.breed} • {pet.age} • {pet.gender}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    pet.gender === 'Male'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-pink-100 text-pink-800'
                  }`}
                >
                  {pet.gender}
                </span>
              </div>

              <div className="prose max-w-none mb-8">
                <h2 className="text-xl font-semibold mb-4">About {pet.name}</h2>
                <p className="text-gray-600 mb-6">{pet.details}</p>

                <h2 className="text-xl font-semibold mb-4">Adoption Requirements</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {pet.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="btn-primary flex-1">
                  Apply to Adopt
                </button>
                <button className="btn-outline flex-1">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 