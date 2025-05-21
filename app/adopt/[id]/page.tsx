import { notFound } from 'next/navigation'
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
    details: 'Max is a well-trained and socialized Golden Retriever who loves to play and interact with people. He has completed basic obedience training and is house-trained. Max would be perfect for an active family who enjoys outdoor activities.',
    requirements: [
      'Active household with regular exercise routine',
      'Experience with large dogs preferred',
      'Secure fenced yard',
      'No small children (under 5)',
      'Regular veterinary care commitment'
    ]
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
    details: 'Luna is a beautiful Siamese cat with striking blue eyes and a gentle personality. She loves attention and enjoys playing with interactive toys. Luna has been spayed and is up to date on all vaccinations. She would thrive in a calm household where she can get plenty of attention.',
    requirements: [
      'Indoor-only home',
      'No other pets (prefers to be the only cat)',
      'Regular playtime and attention',
      'Quiet household preferred',
      'Regular veterinary care commitment'
    ]
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
    details: 'Buddy is a friendly Beagle who loves to explore and follow scents. He has a gentle temperament and gets along well with other dogs. Buddy is house-trained and knows basic commands. He would be a great companion for an active family who enjoys outdoor activities.',
    requirements: [
      'Active family with time for daily walks',
      'Secure fenced yard',
      'Experience with scent hounds preferred',
      'Regular exercise routine',
      'Commitment to ongoing training'
    ]
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
    details: 'Bella is a stunning Maine Coon with a luxurious coat and a friendly personality. She enjoys being around people and other cats. Bella has been spayed and is up to date on all vaccinations. She would do well in a home with other pets and plenty of space to explore.',
    requirements: [
      'Indoor-only home',
      'Regular grooming commitment',
      'Multi-level cat furniture',
      'Other friendly cats welcome',
      'Regular veterinary care'
    ]
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
    details: 'Rocky is a young German Shepherd with great potential. He is intelligent, trainable, and has a strong protective instinct. Rocky has completed basic obedience training and is eager to learn more. He would be perfect for an experienced owner who can provide proper training and exercise.',
    requirements: [
      'Experienced dog owner',
      'Active lifestyle with daily exercise',
      'Ongoing training commitment',
      'Secure fenced yard',
      'No small children (under 10)'
    ]
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
    details: 'Milo is a mature tabby cat who enjoys his independence but also loves cuddles on his own terms. He is an excellent mouser and loves watching birds from windows. Milo has been neutered and is up to date on all vaccinations. He would do well in a quiet home with a patient owner.',
    requirements: [
      'Indoor/outdoor home with safe access',
      'Quiet household preferred',
      'Patient owner who respects independence',
      'Regular veterinary care',
      'Safe outdoor space if allowed outside'
    ]
  }
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
                <Link href={`/adopt/${pet.id}/apply`} className="btn-primary flex-1">
                  Apply to Adopt
                </Link>
                <Link href="/contact" className="btn-outline flex-1">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 