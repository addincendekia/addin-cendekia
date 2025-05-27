import Image from "next/image"
import Link from "next/link"
import { Mail, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export default function ArticlesPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-sm">PROJECT CENDEKIA</div>
          <nav className="flex gap-6 text-xs uppercase">
            <Link href="/" className="hover:underline">
              About
            </Link>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/articles" className="hover:underline font-semibold">
              Articles
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-tr from-blue-900 via-emerald-700 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">ARTICLES</h1>
          <p className="text-sm max-w-xl mx-auto">Discover my topics related to software development</p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Articles List (2/3 width) */}
          <div className="md:col-span-2">
            {/* Sorting and Items Per Page Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <label htmlFor="sort" className="text-sm mr-2">
                    Sort by:
                  </label>
                  <select id="sort" className="text-sm border border-gray-200 rounded-md px-3 py-2 bg-white">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <label htmlFor="perPage" className="text-sm mr-2">
                    Show:
                  </label>
                  <select id="perPage" className="text-sm border border-gray-200 rounded-md px-3 py-2 bg-white">
                    <option value="9">9 per page</option>
                    <option value="12">12 per page</option>
                    <option value="18">18 per page</option>
                    <option value="24">24 per page</option>
                  </select>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">6</span> of <span className="font-medium">24</span> articles
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Article Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-500">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Article thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">Frontend</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>May 10, 2025</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Modern React Patterns for 2025</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    Some quick example text to build on the card title and make up the bulk of the card's content. This
                    content will be truncated after three lines.
                  </p>
                  <Link
                    href="/articles/modern-react-patterns"
                    className="text-emerald-600 text-sm mt-3 inline-block hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Article Card 2 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-500">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Article thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Design</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>April 28, 2025</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">UI/UX Trends to Watch in 2025</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    Some quick example text to build on the card title and make up the bulk of the card's content. This
                    content will be truncated after three lines.
                  </p>
                  <Link
                    href="/articles/ui-ux-trends"
                    className="text-emerald-600 text-sm mt-3 inline-block hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Article Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-500">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Article thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Performance</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>April 15, 2025</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Optimizing Web Performance</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    Some quick example text to build on the card title and make up the bulk of the card's content. This
                    content will be truncated after three lines.
                  </p>
                  <Link
                    href="/articles/optimizing-web-performance"
                    className="text-emerald-600 text-sm mt-3 inline-block hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Article Card 4 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-500">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Article thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">JavaScript</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>March 22, 2025</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Advanced JavaScript Techniques</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    Some quick example text to build on the card title and make up the bulk of the card's content. This
                    content will be truncated after three lines.
                  </p>
                  <Link
                    href="/articles/advanced-javascript"
                    className="text-emerald-600 text-sm mt-3 inline-block hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Article Card 5 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-500">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Article thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">DevOps</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>March 10, 2025</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">CI/CD Pipeline Best Practices</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    Some quick example text to build on the card title and make up the bulk of the card's content. This
                    content will be truncated after three lines.
                  </p>
                  <Link
                    href="/articles/cicd-pipeline"
                    className="text-emerald-600 text-sm mt-3 inline-block hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Article Card 6 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-500">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Article thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Career</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>February 28, 2025</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Growing as a Developer in 2025</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    Some quick example text to build on the card title and make up the bulk of the card's content. This
                    content will be truncated after three lines.
                  </p>
                  <Link
                    href="/articles/growing-as-developer"
                    className="text-emerald-600 text-sm mt-3 inline-block hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
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
                <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  10
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </div>

          {/* Right Column - Filters (1/3 width) */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
              <h3 className="font-medium text-lg mb-4">Filters</h3>

              {/* Search */}
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium mb-2">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search articles..."
                    className="w-full border border-gray-200 rounded-md px-4 py-2 pl-10"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Categories</label>
                <div className="flex flex-wrap gap-2">
                  <button className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-xs px-3 py-1.5 rounded-full flex items-center">
                    <span>Frontend</span>
                    <span className="ml-1 text-xs">✓</span>
                  </button>
                  <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full">
                    Design
                  </button>
                  <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full">
                    Performance
                  </button>
                  <button className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 text-xs px-3 py-1.5 rounded-full flex items-center">
                    <span>JavaScript</span>
                    <span className="ml-1 text-xs">✓</span>
                  </button>
                  <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full">
                    DevOps
                  </button>
                  <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full">
                    Career
                  </button>
                  <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full">
                    React
                  </button>
                  <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full">
                    Vue
                  </button>
                  <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full">
                    Angular
                  </button>
                </div>

                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Find categories..."
                    className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm"
                  />
                </div>
              </div>

              {/* Date Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Date Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">From</label>
                    <input type="date" className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">To</label>
                    <input type="date" className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm" />
                  </div>
                </div>
              </div>

              {/* Apply Filters Button */}
              <div className="flex gap-2">
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-700 flex-grow">
                  Apply Filters
                </button>
                <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-100">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-tr from-blue-900 via-emerald-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
          <p className="text-sm mb-8 max-w-xl mx-auto">
            Have an interesting project for me? I'm always open to discussing new opportunities and collaborations. Get
            in touch and let's create something amazing together.
          </p>

          <a
            href="mailto:project.cendekia.v@gmail.com"
            className="bg-yellow-400 text-black rounded-full px-8 py-3 text-sm inline-flex items-center gap-2 mx-auto hover:bg-yellow-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Send Me a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-sm mb-4">PROJECT CENDEKIA</h3>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4">Information</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="#" className="hover:text-emerald-600">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-600">
                    Term & Condition
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4">Reach Me</h3>
              <ul className="text-sm space-y-2">
                <li>Sidoarjo, East Java, Indonesia</li>
                <li>+6222345764</li>
                <li>project.cendekia.v@gmail.com</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4">Social Media</h3>
              <div className="flex gap-2">
                <Link href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="sr-only">LinkedIn</span>
                  <span className="text-xs">in</span>
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="sr-only">GitHub</span>
                  <span className="text-xs">G</span>
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="sr-only">Instagram</span>
                  <span className="text-xs">I</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-12">©Copyright: Addin cendekia wahid</div>
        </div>
      </footer>
    </main>
  )
}
