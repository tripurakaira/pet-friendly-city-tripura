import Image from 'next/image'
import Link from 'next/link'

const stories = [
  {
    id: 'park-transformation',
    title: 'Community Park Transformation',
    description: 'How we turned an unused space into a vibrant pet-friendly park where pets and owners can socialize.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60',
    date: 'March 2024',
    impact: 'Created a safe space for 100+ pets and their owners to socialize daily',
  },
  {
    id: 'business-initiative',
    title: 'Pet-Friendly Business Initiative',
    description: 'Local businesses opening their doors to pets, creating a more inclusive community for pet owners.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60',
    date: 'February 2024',
    impact: '20+ local businesses now welcome pets',
  },
  {
    id: 'education-program',
    title: 'Education Program Success',
    description: 'Teaching responsible pet ownership in schools and creating a new generation of pet advocates.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60',
    date: 'January 2024',
    impact: 'Educated 500+ students about responsible pet ownership',
  },
]

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-gray-600">
              See how we're making a difference in our community, one paw at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl font-semibold text-gray-900">
                      {story.title}
                    </h3>
                    <span className="text-sm text-gray-500">{story.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="bg-primary-50 p-3 rounded-lg mb-4">
                    <p className="text-primary-700 font-medium">
                      Impact: {story.impact}
                    </p>
                  </div>
                  <Link
                    href={`/stories/${story.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                  >
                    Read Full Story →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-gray-600">Pets Adopted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <p className="text-gray-600">Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">Pet-Friendly Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of volunteers and help us create a more pet-friendly city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer-form" className="btn-primary">
              Volunteer With Us
            </Link>
            <Link href="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 