import { VolunteerForm } from '@/components/VolunteerForm'

export default function VolunteerFormPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-center mb-8">
            Join Our Volunteer Team
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Help us make our city more pet-friendly! Fill out the form below to get started.
          </p>
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
            <VolunteerForm />
          </div>
        </div>
      </div>
    </main>
  )
} 