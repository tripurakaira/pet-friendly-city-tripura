import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Our Mission
            </h1>
            <p className="text-xl text-gray-600">
              We're working to make Tripura a more pet-friendly place, one community at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-6">
                We envision a city where pets and their owners can thrive together. A place where
                public spaces welcome our furry friends, where pet owners have access to the
                resources they need, and where every pet has a loving home.
              </p>
              <p className="text-gray-600">
                Through community engagement, education, and advocacy, we're working to create
                a more inclusive and pet-friendly environment for everyone.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&auto=format&fit=crop&q=60"
                alt="Happy pets in the city"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Our Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-display text-xl font-semibold mb-4">
                Pet-Friendly Spaces
              </h3>
              <p className="text-gray-600">
                Create and maintain public spaces where pets and their owners can enjoy
                quality time together safely and comfortably.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-display text-xl font-semibold mb-4">
                Community Education
              </h3>
              <p className="text-gray-600">
                Provide resources and education to help pet owners become better
                caregivers and responsible community members.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-display text-xl font-semibold mb-4">
                Pet Adoption
              </h3>
              <p className="text-gray-600">
                Facilitate pet adoptions and ensure every pet finds a loving,
                permanent home with responsible owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Together, we can make Tripura a better place for pets and their owners.
            Get involved today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/volunteer-form" className="btn-primary">
              Volunteer With Us
            </a>
            <a href="/adopt" className="btn-outline">
              Adopt a Pet
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 