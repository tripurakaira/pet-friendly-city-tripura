import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// This would typically come from a database or API
const stories = [
  {
    id: 'park-transformation',
    title: 'Community Park Transformation',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60',
    description: 'How we turned an unused space into a vibrant pet-friendly park where pets and owners can socialize.',
    content: `In early 2024, our team identified an underutilized space in the heart of the city that had the potential to become a haven for pets and their owners. Through community engagement and collaboration with local authorities, we transformed this space into a beautiful pet-friendly park.

The transformation included:
- Installation of secure fencing and gates
- Creation of separate areas for small and large dogs
- Addition of water stations and waste disposal facilities
- Planting of pet-safe vegetation
- Installation of benches and shaded areas for owners

The impact has been remarkable:
- Over 100 daily visitors with their pets
- Increased community engagement
- Reduced stray animal presence in the area
- Improved neighborhood safety and cleanliness

This project serves as a model for future pet-friendly space development in our city.`,
    impact: 'Created a safe, engaging space for over 100 pets and their owners daily'
  },
  {
    id: 'business-initiative',
    title: 'Pet-Friendly Business Initiative',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60',
    description: 'Local businesses opening their doors to pets, creating a more inclusive community for pet owners.',
    content: `Our Pet-Friendly Business Initiative has successfully encouraged local businesses to welcome pets into their establishments. Through education and support, we've helped businesses create pet-friendly policies and spaces.

Key achievements:
- 25 local businesses certified as pet-friendly
- Training provided to business owners and staff
- Development of pet-friendly guidelines
- Creation of a pet-friendly business directory

The initiative has led to:
- Increased foot traffic for participating businesses
- Enhanced community inclusivity
- Better understanding of pet-friendly business practices
- Stronger community bonds

This program continues to grow, with more businesses joining each month.`,
    impact: '25 local businesses now welcome pets, serving thousands of pet owners'
  },
  {
    id: 'education-program',
    title: 'Education Program Success',
    date: 'January 20, 2024',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60',
    description: 'Teaching responsible pet ownership in schools and creating a new generation of pet advocates.',
    content: `Our education program has reached over 1,000 students across 15 schools, teaching them about responsible pet ownership and animal welfare. The program combines classroom learning with practical experiences.

Program components:
- Interactive workshops on pet care
- Visits from therapy animals
- Art and writing competitions
- Community service projects
- Parent engagement sessions

The results have been inspiring:
- Increased awareness of pet welfare
- Development of empathy in students
- Creation of school pet care clubs
- Family adoption of classroom pets
- Community service projects led by students

This program is creating a new generation of responsible pet owners and animal advocates.`,
    impact: 'Educated over 1,000 students about responsible pet ownership'
  }
]

export default function StoryPage({ params }: { params: { id: string } }) {
  const story = stories.find(s => s.id === params.id)

  if (!story) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <Link
          href="/impact"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          ← Back to Impact Stories
        </Link>

        <article className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative h-96">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                {story.title}
              </h1>
              <span className="text-gray-500">{story.date}</span>
            </div>

            <div className="bg-primary-50 p-4 rounded-lg mb-8">
              <p className="text-primary-700 font-medium">
                Impact: {story.impact}
              </p>
            </div>

            <div className="prose max-w-none">
              {story.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Get Involved
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/volunteer-form" className="btn-primary">
                  Volunteer With Us
                </Link>
                <Link href="/about" className="btn-outline">
                  Learn More About Our Mission
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
} 