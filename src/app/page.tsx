import Image from "next/image";
import Link from "next/link";
import { Mail, Send, Calendar } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-tr from-blue-900 via-emerald-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-sm">ADDIN CENDEKIA</div>
          <nav className="flex gap-6 text-xs uppercase">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
            <Link href="#articles" className="hover:underline">
              Articles
            </Link>
          </nav>
        </div>

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

              <h2 className="text-lg font-bold uppercase mb-2">
                SOFTWARE DEVELOPER
              </h2>
              <p className="text-sm mb-6">
                With a strong focus on frontend technologies and user
                experiences. This site showcases my portfolio of projects and
                shares my thoughts through blog articles.
              </p>

              <p className="mb-4 text-sm">
                Have an interesting project for me?
              </p>
              <button className="bg-yellow-400 text-black rounded-full px-4 py-2 text-sm flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send me message
              </button>
            </div>

            {/* Right Column - Illustration */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Developer Illustration"
                  className="w-full h-auto"
                />
                {/* Note: Replace with an actual illustration */}
                {/* Suggested illustrations:
                  1. Developer character working on floating screens/interfaces
                  2. Abstract code visualization with colorful elements
                  3. 3D workspace with development tools and devices
                  4. Tech stack icons arranged in a creative pattern
                  5. Web/app interfaces in a perspective view
                */}
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
          system, ERP, custom HRIS, landpage, portal and mobile app.
        </p>

        <div className="flex justify-center gap-16 mb-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">6+</div>
            <div className="text-sm">Year of</div>
            <div className="text-sm">Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">45+</div>
            <div className="text-sm">Projects Involve</div>
            <div className="text-sm">and Developed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">37</div>
            <div className="text-sm">Professional</div>
            <div className="text-sm">Clients</div>
          </div>
        </div>

        {/* Technology Icons */}
        <div className="grid grid-cols-6 md:grid-cols-10 gap-4 mb-16">
          {/* These would be replaced with actual tech icons */}
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="HTML"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="CSS"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="JavaScript"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="React"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Vue"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Angular"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Node.js"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="TypeScript"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="PHP"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Magento"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 container mx-auto px-4" id="projects">
        <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>

        <p className="text-sm mb-6 max-w-2xl">
          Each project showcases the technologies used, challenges faced, and
          solutions implemented. Details reflect real-world problems tackled
          through thoughtful technical decisions
        </p>

        <Link href="#" className="text-emerald-600 text-sm mb-8 inline-block">
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

            {/* Short Image */}
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
                <div className="flex items-center text-white/70 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>January 28, 2025</span>
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

            {/* Short Image */}
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
                <div className="flex items-center text-white/70 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>November 5, 2024</span>
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
              <div className="h-48 bg-gray-500"></div>
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
                  Exploring the latest React patterns and best practices for
                  building scalable and maintainable applications. We&apos;ll
                  dive into hooks, context, and the new React server components
                  that are changing how we build web applications.
                </p>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-500"></div>
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
                  A comprehensive look at the emerging UI/UX design trends that
                  are shaping the digital landscape this year. From neumorphism
                  to glassmorphism, we explore how these trends are evolving and
                  how you can incorporate them into your projects.
                </p>
              </div>
            </div>

            {/* Article Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-500"></div>
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
                  Learn how to optimize your web applications for maximum
                  performance. This article covers techniques for reducing
                  bundle size, improving load times, and creating smooth user
                  experiences even on low-powered devices.
                </p>
              </div>
            </div>

            {/* Article Card 4 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-500"></div>
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
                  Dive deep into advanced JavaScript concepts that will take
                  your coding skills to the next level. We&apos;ll explore
                  closures, prototypes, async patterns, and functional
                  programming techniques that can make your code more elegant
                  and efficient.
                </p>
              </div>
            </div>

            {/* Article Card 5 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-500"></div>
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
                  A guide to setting up efficient CI/CD pipelines for your
                  projects. Learn how to automate testing, deployment, and
                  monitoring to ensure your applications are always running
                  smoothly and your team can ship features faster.
                </p>
              </div>
            </div>

            {/* Article Card 6 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-500"></div>
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
                  Tips and strategies for advancing your career as a developer
                  in today&apos;s competitive landscape. From building a
                  personal brand to mastering in-demand skills, this article
                  provides actionable advice for developers at all stages of
                  their careers.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="#" className="text-emerald-600 text-sm hover:underline">
              See All Articles
            </Link>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-tr from-blue-900 via-emerald-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
          <p className="text-sm mb-8 max-w-xl mx-auto">
            Have an interesting project for me? I&apos;m always open to
            discussing new opportunities and collaborations. Get in touch and
            let&apos;s create something amazing together.
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
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <span className="sr-only">LinkedIn</span>
                  <span className="text-xs">in</span>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <span className="sr-only">GitHub</span>
                  <span className="text-xs">G</span>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <span className="sr-only">Instagram</span>
                  <span className="text-xs">I</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-12">
            ©Copyright: Addin cendekia wahid
          </div>
        </div>
      </footer>
    </main>
  );
}
