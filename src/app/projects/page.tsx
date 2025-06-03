import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-tr from-blue-900 via-emerald-700 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">FEATURED PROJECT</h1>
          <p className="text-sm max-w-xl mx-auto">
            Explore my portfolio of projects showcasing various technologies,
            challenges faced, and solutions implemented
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 container mx-auto px-4">
        {/* Sorting Controls */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                className="text-sm border border-gray-200 rounded-md px-3 py-2 bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Project Name</option>
                <option value="client">Client Name</option>
              </select>
            </div>

            <div className="flex items-center">
              <label htmlFor="projectType" className="text-sm mr-2">
                Project Type:
              </label>
              <select
                id="projectType"
                className="text-sm border border-gray-200 rounded-md px-3 py-2 bg-white"
              >
                <option value="all">All Types</option>
                <option value="commission">Commission</option>
                <option value="personal">Personal</option>
                <option value="open-source">Open Source</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="text-sm mr-2">Categories:</label>
              <div className="relative">
                <button
                  type="button"
                  className="text-sm border border-gray-200 rounded-md px-3 py-2 bg-white flex items-center gap-2 min-w-[120px]"
                >
                  <span>Select Categories</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown would be implemented with state management */}
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">9</span> of{" "}
            <span className="font-medium">24</span> projects
          </div>
        </div>

        {/* Active Filters Display */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
              Web Development
              <button className="hover:bg-emerald-200 rounded-full p-0.5">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
              Commission
              <button className="hover:bg-blue-200 rounded-full p-0.5">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
            <button className="text-xs text-gray-500 hover:text-gray-700 underline">
              Clear all filters
            </button>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Column 1 */}
          <div className="space-y-6">
            {/* Project Card 1 - Tall */}
            <div className="relative group overflow-hidden rounded-lg shadow-sm h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=600"
                width={600}
                height={800}
                alt="E-commerce Platform"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">
                  E-commerce Platform
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  A full-featured online store with product management, cart
                  functionality, and secure checkout process.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>March 15, 2025</span>
                  </div>
                  <Link
                    href="/projects/ecommerce-platform"
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 2 - Medium */}
            <div className="relative group overflow-hidden rounded-lg shadow-sm h-[320px]">
              <Image
                src="/placeholder.svg?height=640&width=600"
                width={600}
                height={640}
                alt="Mobile App"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">Mobile App</h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  A cross-platform mobile application for task management with
                  offline capabilities and cloud sync.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>February 12, 2025</span>
                  </div>
                  <Link
                    href="/projects/mobile-app"
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 3 - Short */}
            <div className="relative group overflow-hidden rounded-lg shadow-sm h-[250px]">
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Weather App"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">Weather App</h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  A weather forecasting application with location-based
                  services, interactive maps, and severe weather alerts.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>August 15, 2024</span>
                  </div>
                  <Link
                    href="/projects/weather-app"
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Project Card 4 - Short */}
            <div className="relative group overflow-hidden rounded-lg shadow-sm h-[250px]">
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Dashboard UI"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">Dashboard UI</h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  An intuitive analytics dashboard with real-time data
                  visualization and customizable widgets.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>January 28, 2025</span>
                  </div>
                  <Link
                    href="/projects/dashboard-ui"
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 5 - Tall */}
            <div className="relative group overflow-hidden rounded-lg shadow-sm h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=600"
                width={600}
                height={800}
                alt="Educational Platform"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">
                  Educational Platform
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  An online learning platform with course management,
                  interactive lessons, and progress tracking.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>October 18, 2024</span>
                  </div>
                  <Link
                    href="/projects/educational-platform"
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 6 - Medium */}
            <div className="relative group overflow-hidden rounded-lg shadow-sm h-[320px]">
              <Image
                src="/placeholder.svg?height=640&width=600"
                width={600}
                height={640}
                alt="Social Media App"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">
                  Social Media App
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  A social networking platform with real-time messaging, content
                  sharing, and user engagement features.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>December 10, 2024</span>
                  </div>
                  <Link
                    href="/projects/social-media-app"
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {/* Project Card 7 - Medium */}
            <div className="relative group overflow-hidden rounded-lg shadow-sm h-[320px]">
              <Image
                src="/placeholder.svg?height=640&width=600"
                width={600}
                height={640}
                alt="Corporate Website"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">
                  Corporate Website
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  A responsive corporate website with CMS integration,
                  multilingual support, and optimized performance.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>April 5, 2025</span>
                  </div>
                  <Link
                    href="/projects/corporate-website"
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 8 - Short */}
            <div className="relative group overflow-hidden rounded-lg shadow-sm h-[250px]">
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Fitness Tracker"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">
                  Fitness Tracker
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  A health and fitness application that tracks workouts,
                  nutrition, and provides personalized recommendations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>November 5, 2024</span>
                  </div>
                  <Link
                    href="/projects/fitness-tracker"
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 9 - Tall */}
            <div className="relative group overflow-hidden rounded-lg shadow-sm h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=600"
                width={600}
                height={800}
                alt="Travel Booking App"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">
                  Travel Booking App
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  A travel booking application with flight and hotel
                  reservations, itinerary planning, and travel recommendations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>September 22, 2024</span>
                  </div>
                  <Link
                    href="/projects/travel-booking-app"
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <nav className="flex items-center space-x-1">
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-emerald-600 bg-emerald-600 text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </section>
    </>
  );
}
