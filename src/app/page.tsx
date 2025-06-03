import Image from "next/image";
import Link from "next/link";
import { Send, Calendar } from "lucide-react";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-tr from-blue-900 via-emerald-700 to-emerald-600 text-white">
        <Header />

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-sm mb-2">Hello world, my name is</p>
              <h1 className="text-3xl font-bold mb-1">ADDIN CENDEKIA WAHID,</h1>
              <p className="text-sm mb-8">
                welcome to my personal space on the web.
              </p>

              <h2 className="text-lg font-thin uppercase mb-2">
                IM A <strong>SOFTWARE DEVELOPER</strong>
              </h2>
              <p className="text-sm mb-6">
                With a strong focus on frontend technologies and user
                experiences. This site showcases my portfolio of projects and
                shares my thoughts through blog articles.
              </p>

              <p className="mb-6">
                Let me know if you have something to discuss with me
              </p>
              <button className="cursor-pointer bg-yellow-400 text-black rounded-full px-8 py-3 text-sm inline-flex items-center gap-2 mx-auto hover:bg-yellow-500 transition-colors">
                <Send className="w-4 h-4" />
                Send me message
              </button>
            </div>

            {/* Right Column - Illustration */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/hero-illustration.png?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Developer Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold mb-2">
          Experience Working on
        </h2>
        <h3 className="text-center text-xl font-semibold mb-8">
          Various Application
        </h3>

        <p className="text-center max-w-2xl mx-auto text-sm mb-12">
          Mostly working on e-commerce, but there are also various other
          applications such as company profile, news portal, school management
          system, ERP, custom HRIS, and custom mobile app.
        </p>

        <div className="flex justify-center gap-16 mb-16">
          {/* TODO: maybe its good to have statistic github */}
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">8+</div>
            <div className="text-sm">Year of</div>
            <div className="text-sm">Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">50+</div>
            <div className="text-sm">Projects Involve</div>
            <div className="text-sm">and Developed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">40+</div>
            <div className="text-sm">Professional</div>
            <div className="text-sm">Clients</div>
          </div>
        </div>

        {/* Technology Icons */}
        <div className="flex justify-center overflow-x-auto gap-8 py-4 mb-16 scrollbar-hide">
          {/* These would be replaced with actual tech icons */}
          <div className="flex-shrink-0">
            <Image
              src="/html.png?height=100&width=100"
              width={100}
              height={100}
              alt="HTML"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/css.png?height=100&width=100"
              width={100}
              height={100}
              alt="CSS"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/tailwindcss.png?height=100&width=100"
              width={100}
              height={100}
              alt="Tailwindcss"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/nodejs.png?height=100&width=100"
              width={100}
              height={100}
              alt="Node JS"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/typescript.png?height=100&width=100"
              width={100}
              height={100}
              alt="Typescript"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/reactjs.png?height=100&width=100"
              width={100}
              height={100}
              alt="React"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/nextjs.png?height=100&width=100"
              width={100}
              height={100}
              alt="Next JS"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/laravel.png?height=100&width=100"
              width={100}
              height={100}
              alt="Laravel"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/graphql.png?height=100&width=100"
              width={100}
              height={100}
              alt="Graphql"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/flutter.png?height=100&width=100"
              width={100}
              height={100}
              alt="Flutter"
              className="h-20 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 container mx-auto px-4" id="projects">
        <h2 className="text-2xl font-semibold mb-6">Featured Project</h2>

        <p className="text-sm mb-6 max-w-2xl">
          Each project showcases the technologies used, challenges faced, and
          solutions implemented. Details reflect real-world problems tackled
          through thoughtful technical decisions
        </p>

        <Link
          href="/projects"
          className="text-emerald-600 text-sm mb-8 inline-block"
        >
          See Another Projects
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Column 1 */}
          <div className="space-y-6">
            {/* Tall Image */}
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
                <div className="flex items-center text-white/70 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>March 15, 2025</span>
                </div>
              </div>
            </div>

            {/* Medium Image */}
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
                <div className="flex items-center text-white/70 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>April 5, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Medium Image */}
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
                <div className="flex items-center text-white/70 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>February 12, 2025</span>
                </div>
              </div>
            </div>

            {/* Tall Image */}
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
                <div className="flex items-center text-white/70 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>October 18, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section - Full Width Background */}
      <div className="bg-gray-50 w-full py-16" id="articles">
        <section className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6 relative inline-block">
            Latest Articles
            <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
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
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    Frontend
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>May 10, 2025</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Modern React Patterns for 2025
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. This content will be truncated
                  after three lines.
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
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Design
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>April 28, 2025</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">
                  UI/UX Trends to Watch in 2025
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. This content will be truncated
                  after three lines.
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
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    Performance
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>April 15, 2025</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Optimizing Web Performance
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. This content will be truncated
                  after three lines.
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
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    JavaScript
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>March 22, 2025</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Advanced JavaScript Techniques
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. This content will be truncated
                  after three lines.
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
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    DevOps
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>March 10, 2025</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">
                  CI/CD Pipeline Best Practices
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. This content will be truncated
                  after three lines.
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
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Career
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>February 28, 2025</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Growing as a Developer in 2025
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. This content will be truncated
                  after three lines.
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

          <div className="text-center mt-8">
            <Link
              href="/articles"
              className="text-emerald-600 text-sm hover:underline"
            >
              See All Articles
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
