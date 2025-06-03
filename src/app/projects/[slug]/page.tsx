import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Calendar,
  ChevronRight,
  ExternalLink,
  Github,
  Code,
  Users,
  CheckCircle,
  Award,
  Lightbulb,
  ChevronLeft,
} from "lucide-react";

import TimelineItem from "../_components/timeline-item";

export default function ProjectDetailPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-600">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <Link href="/projects" className="hover:text-emerald-600">
              Projects
            </Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <span className="text-gray-900">E-commerce Platform</span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Project */}
          <div className="lg:col-span-2">
            {/* Project Type and Date */}
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">
                  Web Development
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  E-commerce
                </span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Completed: March 15, 2025</span>
              </div>
            </div>

            {/* Project Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              E-commerce Platform
            </h1>

            {/* Project Excerpt */}
            <div className="mb-6">
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-emerald-500 pl-4 italic">
                A comprehensive e-commerce solution built for Acme Corporation,
                featuring modern UI/UX design, real-time inventory management,
                and seamless payment processing. This project transformed their
                online retail presence and significantly improved customer
                conversion rates.
              </p>
              <div className="flex items-center mt-4 gap-3">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                  Commission Project
                </span>
                <span className="text-sm text-gray-500">
                  Duration: 4 months
                </span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">
                  Team: 3 developers
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                width={1200}
                height={600}
                alt="E-commerce Platform"
                className="w-full h-auto"
              />
            </div>

            {/* Project Screenshots Carousel */}
            <div className="mb-8">
              <div className="relative">
                {/* Carousel container */}
                <div className="overflow-hidden rounded-lg shadow-md">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="w-full flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=600&width=1200"
                        width={1200}
                        height={600}
                        alt="E-commerce Platform - Homepage"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-full flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=600&width=1200"
                        width={1200}
                        height={600}
                        alt="E-commerce Platform - Product Page"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-full flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=600&width=1200"
                        width={1200}
                        height={600}
                        alt="E-commerce Platform - Shopping Cart"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-full flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=600&width=1200"
                        width={1200}
                        height={600}
                        alt="E-commerce Platform - Admin Dashboard"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <button className="w-2 h-2 rounded-full bg-white shadow-sm"></button>
                  <button className="w-2 h-2 rounded-full bg-white/50 shadow-sm"></button>
                  <button className="w-2 h-2 rounded-full bg-white/50 shadow-sm"></button>
                  <button className="w-2 h-2 rounded-full bg-white/50 shadow-sm"></button>
                </div>
              </div>

              {/* Image counter and description */}
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">1</span> of{" "}
                  <span className="font-medium">4</span> screenshots
                </div>
                <div className="text-sm text-gray-600">Homepage Design</div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="mt-4">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-gray-200">
                  <button className="flex-shrink-0 w-1/4 min-w-[80px] h-12 rounded-md overflow-hidden border-2 border-emerald-500 opacity-100">
                    <Image
                      src="/placeholder.svg?height=48&width=80"
                      width={80}
                      height={48}
                      alt="Homepage thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <button className="flex-shrink-0 w-1/4 min-w-[80px] h-12 rounded-md overflow-hidden border-2 border-gray-200 opacity-60 hover:opacity-80 transition-opacity">
                    <Image
                      src="/placeholder.svg?height=48&width=80"
                      width={80}
                      height={48}
                      alt="Product page thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <button className="flex-shrink-0 w-1/4 min-w-[80px] h-12 rounded-md overflow-hidden border-2 border-gray-200 opacity-60 hover:opacity-80 transition-opacity">
                    <Image
                      src="/placeholder.svg?height=48&width=80"
                      width={80}
                      height={48}
                      alt="Shopping cart thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <button className="flex-shrink-0 w-1/4 min-w-[80px] h-12 rounded-md overflow-hidden border-2 border-gray-200 opacity-60 hover:opacity-80 transition-opacity">
                    <Image
                      src="/placeholder.svg?height=48&width=80"
                      width={80}
                      height={48}
                      alt="Admin dashboard thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  {/* Additional thumbnails for demonstration of scrolling */}
                  <button className="flex-shrink-0 w-1/4 min-w-[80px] h-12 rounded-md overflow-hidden border-2 border-gray-200 opacity-60 hover:opacity-80 transition-opacity">
                    <Image
                      src="/placeholder.svg?height=48&width=80"
                      width={80}
                      height={48}
                      alt="Mobile view thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <button className="flex-shrink-0 w-1/4 min-w-[80px] h-12 rounded-md overflow-hidden border-2 border-gray-200 opacity-60 hover:opacity-80 transition-opacity">
                    <Image
                      src="/placeholder.svg?height=48&width=80"
                      width={80}
                      height={48}
                      alt="User profile thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#"
                className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>

            {/* Technology Stack */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-emerald-600" />
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 text-xs font-medium">R</span>
                  </div>
                  <span className="text-sm">React.js</span>
                </div>
                <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 text-xs font-medium">
                      N
                    </span>
                  </div>
                  <span className="text-sm">Node.js</span>
                </div>
                <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-600 text-xs font-medium">
                      R
                    </span>
                  </div>
                  <span className="text-sm">Redux</span>
                </div>
                <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-yellow-600 text-xs font-medium">
                      JS
                    </span>
                  </div>
                  <span className="text-sm">JavaScript</span>
                </div>
                <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 text-xs font-medium">
                      CSS
                    </span>
                  </div>
                  <span className="text-sm">Tailwind CSS</span>
                </div>
                <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 text-xs font-medium">
                      M
                    </span>
                  </div>
                  <span className="text-sm">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project Timeline */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
                Project Timeline
              </h2>
              <div className="relative">
                {/* Horizontal scrollable container */}
                <div className="overflow-x-auto pb-4">
                  <div className="flex min-w-max">
                    {/* Timeline line */}
                    <div
                      className="absolute top-5 left-0 right-0 h-0.5 bg-emerald-200"
                      style={{ width: "calc(100% - 40px)", marginLeft: "20px" }}
                    ></div>

                    {/* Timeline items */}
                    <div className="flex space-x-16 relative px-4">
                      <TimelineItem
                        date="November 15, 2024"
                        title="Project Start"
                        description="Initial requirements gathering and project planning phase."
                        fullDescription="Initial requirements gathering and project planning phase. Detailed scope definition and resource allocation completed."
                      />

                      <TimelineItem
                        date="December 20, 2024"
                        title="Design Phase"
                        description="Finalized UI/UX designs and received client approval."
                        fullDescription="Finalized UI/UX designs and received client approval. Multiple iterations were completed based on stakeholder feedback."
                      />

                      <TimelineItem
                        date="February 10, 2025"
                        title="Development"
                        description="Core functionality implemented and ready for testing."
                        fullDescription="Core functionality implemented and ready for testing. All major features were completed ahead of schedule."
                      />

                      <TimelineItem
                        date="March 15, 2025"
                        title="Project Launch"
                        description="Successfully deployed to production after thorough testing."
                        fullDescription="Successfully deployed to production after thorough testing and client approval. Post-launch support was provided for 2 weeks."
                      />
                    </div>
                  </div>
                </div>

                {/* Scroll indicators */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-sm border border-gray-100 hidden md:flex">
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-sm border border-gray-100 hidden md:flex">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Mobile note */}
              <div className="text-xs text-gray-500 mt-4 text-center md:hidden">
                Scroll horizontally to see the complete timeline
              </div>
            </div>

            {/* Client Information (for commission projects) */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-emerald-600" />
                Client Information
              </h2>
              <div className="flex items-start">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Client Logo"
                  className="rounded-md mr-4"
                />
                <div>
                  <h3 className="font-medium text-base">Acme Corporation</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    A leading retailer in the fashion industry with over 50
                    physical stores across the country.
                  </p>
                  <a
                    href="#"
                    className="text-emerald-600 text-sm hover:underline"
                  >
                    Visit Client Website
                  </a>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#overview"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Project Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#problem"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Problem Statement
                  </a>
                </li>
                <li>
                  <a
                    href="#solution"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Solution Approach
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Key Features
                  </a>
                </li>
                <li>
                  <a
                    href="#technical"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Technical Implementation
                  </a>
                </li>
                <li>
                  <a
                    href="#challenges"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Challenges & Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#results"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Results & Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#lessons"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Lessons Learned
                  </a>
                </li>
              </ul>
            </div>

            {/* Project Content */}
            <div className="prose prose-emerald max-w-none">
              <h2 id="overview">Project Overview</h2>
              <p>
                This e-commerce platform was developed for Acme Corporation to
                modernize their online retail presence and create a seamless
                shopping experience for their customers. The project involved
                creating a full-featured online store with product management,
                cart functionality, secure checkout process, and integration
                with their existing inventory management system.
              </p>
              <p>
                The platform was designed to handle high traffic volumes,
                provide personalized shopping experiences, and optimize
                conversion rates through an intuitive user interface and
                streamlined checkout process.
              </p>

              <h2 id="problem">Problem Statement</h2>
              <p>
                Acme Corporation was facing several challenges with their
                existing e-commerce solution:
              </p>
              <ul>
                <li>
                  Outdated user interface that wasn't mobile-responsive,
                  resulting in high bounce rates on mobile devices
                </li>
                <li>
                  Slow page load times affecting user experience and search
                  engine rankings
                </li>
                <li>
                  Limited integration with their inventory management system,
                  causing stock discrepancies
                </li>
                <li>
                  High cart abandonment rates due to a complicated checkout
                  process
                </li>
                <li>
                  Inability to implement modern marketing features like
                  personalized recommendations
                </li>
              </ul>

              <h2 id="solution">Solution Approach</h2>
              <p>Our approach to solving these challenges involved:</p>
              <ol>
                <li>
                  <strong>User-Centered Design:</strong> We conducted extensive
                  user research and created detailed personas to inform our
                  design decisions. The new interface was designed with a
                  mobile-first approach to ensure optimal performance across all
                  devices.
                </li>
                <li>
                  <strong>Modern Tech Stack:</strong> We selected React.js for
                  the frontend to create a fast, responsive user interface, and
                  Node.js for the backend to handle API requests efficiently.
                </li>
                <li>
                  <strong>Performance Optimization:</strong> We implemented lazy
                  loading, code splitting, and image optimization techniques to
                  improve page load times.
                </li>
                <li>
                  <strong>Seamless Integrations:</strong> We developed custom
                  APIs to integrate with Acme's inventory management system,
                  ensuring real-time stock updates.
                </li>
                <li>
                  <strong>Streamlined Checkout:</strong> We redesigned the
                  checkout process to reduce friction and implemented guest
                  checkout options to lower abandonment rates.
                </li>
              </ol>

              <h2 id="features">Key Features</h2>
              <p>The platform includes the following key features:</p>
              <ul>
                <li>
                  <strong>Responsive Product Catalog:</strong> A visually
                  appealing product display with advanced filtering and sorting
                  options
                </li>
                <li>
                  <strong>Personalized Recommendations:</strong> AI-powered
                  product recommendations based on browsing history and purchase
                  behavior
                </li>
                <li>
                  <strong>Secure Payment Processing:</strong> Integration with
                  multiple payment gateways with PCI compliance
                </li>
                <li>
                  <strong>User Account Management:</strong> Customer profiles
                  with order history, saved addresses, and wishlist
                  functionality
                </li>
                <li>
                  <strong>Admin Dashboard:</strong> Comprehensive backend for
                  product management, order processing, and analytics
                </li>
                <li>
                  <strong>Search Optimization:</strong> Elasticsearch
                  implementation for fast and relevant product search results
                </li>
              </ul>

              <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Product Catalog Screenshot"
                  className="rounded-lg shadow-md"
                />
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Admin Dashboard Screenshot"
                  className="rounded-lg shadow-md"
                />
              </div>

              <h2 id="technical">Technical Implementation</h2>
              <p>
                The technical implementation of this project involved several
                key components:
              </p>

              <h3>Frontend Architecture</h3>
              <p>
                We used React.js with Redux for state management to create a
                responsive and interactive user interface. The component
                structure was designed to be modular and reusable, allowing for
                efficient development and maintenance.
              </p>
              <p>
                Tailwind CSS was used for styling, providing a consistent design
                system while maintaining flexibility for custom components.
              </p>

              <h3>Backend Development</h3>
              <p>
                The backend was built with Node.js and Express, providing
                RESTful APIs for the frontend to consume. We implemented JWT
                authentication for secure user sessions and role-based access
                control.
              </p>
              <p>
                MongoDB was chosen as the database for its flexibility in
                handling product data with varying attributes and its
                scalability to accommodate growing product catalogs.
              </p>

              <h3>Integration Points</h3>
              <p>Custom APIs were developed to integrate with:</p>
              <ul>
                <li>Acme's existing inventory management system</li>
                <li>Multiple payment gateways (Stripe, PayPal)</li>
                <li>Shipping providers for real-time shipping calculations</li>
                <li>Email service providers for transactional emails</li>
              </ul>

              <h2 id="challenges">Challenges & Solutions</h2>
              <p>
                Throughout the project, we encountered several challenges that
                required innovative solutions:
              </p>

              <h3>Challenge 1: Performance with Large Product Catalog</h3>
              <p>
                <strong>Problem:</strong> The client's catalog contained over
                10,000 products with multiple variations, causing slow loading
                times and poor search performance.
              </p>
              <p>
                <strong>Solution:</strong> We implemented Elasticsearch for
                efficient product search and filtering, along with pagination
                and lazy loading techniques. We also utilized Redis caching for
                frequently accessed data to reduce database load.
              </p>

              <h3>Challenge 2: Complex Inventory Management</h3>
              <p>
                <strong>Problem:</strong> The client needed real-time inventory
                updates across both online and physical stores to prevent
                overselling.
              </p>
              <p>
                <strong>Solution:</strong> We developed a custom synchronization
                service that used webhooks to receive real-time inventory
                updates from the client's ERP system. We also implemented a
                reservation system that temporarily holds inventory during the
                checkout process.
              </p>

              <h3>Challenge 3: Mobile Optimization</h3>
              <p>
                <strong>Problem:</strong> Creating a consistent and intuitive
                experience across various device sizes while maintaining all
                functionality.
              </p>
              <p>
                <strong>Solution:</strong> We adopted a mobile-first design
                approach and used responsive design techniques. We also
                implemented touch-friendly interfaces and optimized image
                loading for mobile networks.
              </p>

              <h2 id="results">Results & Impact</h2>
              <p>
                The implementation of the new e-commerce platform delivered
                significant results for Acme Corporation:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <div className="text-emerald-600 text-2xl font-bold mb-1">
                    42%
                  </div>
                  <div className="text-sm text-gray-700">
                    Increase in mobile conversion rate
                  </div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <div className="text-emerald-600 text-2xl font-bold mb-1">
                    28%
                  </div>
                  <div className="text-sm text-gray-700">
                    Reduction in cart abandonment
                  </div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <div className="text-emerald-600 text-2xl font-bold mb-1">
                    65%
                  </div>
                  <div className="text-sm text-gray-700">
                    Faster page load times
                  </div>
                </div>
              </div>

              <p>Additional business impacts included:</p>
              <ul>
                <li>
                  Increased average order value through effective cross-selling
                  features
                </li>
                <li>
                  Reduced customer service inquiries related to website
                  functionality
                </li>
                <li>
                  Improved inventory accuracy and reduced instances of
                  overselling
                </li>
                <li>
                  Enhanced ability to run targeted marketing campaigns through
                  the platform
                </li>
              </ul>

              <h2 id="lessons">Lessons Learned</h2>
              <p>
                This project provided valuable insights and learning
                opportunities:
              </p>
              <ol>
                <li>
                  <strong>Early Stakeholder Involvement:</strong> Involving key
                  stakeholders from different departments early in the process
                  helped identify potential integration challenges before they
                  became issues.
                </li>
                <li>
                  <strong>Incremental Deployment:</strong> Releasing features
                  incrementally allowed for real-world testing and feedback,
                  resulting in a more refined final product.
                </li>
                <li>
                  <strong>Performance Testing:</strong> Comprehensive
                  performance testing under various load conditions was crucial
                  for identifying optimization opportunities.
                </li>
                <li>
                  <strong>Documentation Importance:</strong> Thorough
                  documentation of APIs and integration points proved invaluable
                  for both the development team and the client's IT staff.
                </li>
              </ol>

              <p>
                Overall, this project demonstrated the importance of combining
                technical excellence with a deep understanding of business
                requirements to deliver a solution that not only meets but
                exceeds client expectations.
              </p>
            </div>

            {/* Project Gallery */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Homepage Design"
                  className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Product Page"
                  className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Shopping Cart"
                  className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Checkout Process"
                  className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Admin Dashboard"
                  className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Mobile View"
                  className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
              </div>
            </div>

            {/* Testimonial (for commission projects) */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-emerald-600" />
                Client Testimonial
              </h3>
              <blockquote className="text-gray-700 italic mb-4">
                "The e-commerce platform developed by Addin has transformed our
                online retail business. The attention to detail, technical
                expertise, and understanding of our business needs resulted in a
                solution that exceeded our expectations. We've seen significant
                improvements in conversion rates and customer satisfaction since
                launch."
              </blockquote>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  width={50}
                  height={50}
                  alt="Client Representative"
                  className="rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">
                    Digital Marketing Director, Acme Corporation
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps / Future Enhancements */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-emerald-600" />
                Future Enhancements
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                While the current version of the platform meets all the initial
                requirements, we've identified several potential enhancements
                for future iterations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">
                    Integration with a customer loyalty program to reward repeat
                    customers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">
                    Implementation of AR features to allow customers to
                    visualize products in their space
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">
                    Enhanced analytics dashboard with predictive inventory
                    management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">
                    Multi-language support to expand into international markets
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {/* Project Info Card */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6 shadow-sm">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Project Information
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600 text-sm">
                        Project Type:
                      </span>
                      <span className="text-sm font-medium">Commission</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600 text-sm">Duration:</span>
                      <span className="text-sm font-medium">4 months</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600 text-sm">Completed:</span>
                      <span className="text-sm font-medium">
                        March 15, 2025
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600 text-sm">Client:</span>
                      <span className="text-sm font-medium">
                        Acme Corporation
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600 text-sm">Role:</span>
                      <span className="text-sm font-medium">
                        Lead Developer
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
                  <h4 className="text-sm font-medium mb-2">
                    My Responsibilities:
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-600 flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Frontend Development
                    </li>
                    <li className="text-sm text-gray-600 flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      API Integration
                    </li>
                    <li className="text-sm text-gray-600 flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Performance Optimization
                    </li>
                    <li className="text-sm text-gray-600 flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Technical Documentation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6 shadow-sm">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Technology Stack
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Frontend:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          React.js
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          Redux
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          Tailwind CSS
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          JavaScript
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Backend:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          Node.js
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          Express
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          MongoDB
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          Redis
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">DevOps:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          Docker
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          AWS
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          CI/CD
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Testing:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          Jest
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          React Testing Library
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          Cypress
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6 shadow-sm">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">
                        Reduced page load time by 65% through performance
                        optimizations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">
                        Increased mobile conversion rate by 42% with responsive
                        design
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">
                        Reduced cart abandonment rate by 28% with streamlined
                        checkout
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">
                        Implemented real-time inventory synchronization with
                        99.9% accuracy
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6 shadow-sm">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Related Projects
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 mr-3">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          width={64}
                          height={64}
                          alt="Project thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          <Link
                            href="/projects/dashboard-ui"
                            className="hover:text-emerald-600"
                          >
                            Dashboard UI
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-500">
                          January 28, 2025
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 mr-3">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          width={64}
                          height={64}
                          alt="Project thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          <Link
                            href="/projects/mobile-app"
                            className="hover:text-emerald-600"
                          >
                            Mobile App
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-500">
                          February 12, 2025
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 mr-3">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          width={64}
                          height={64}
                          alt="Project thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          <Link
                            href="/projects/corporate-website"
                            className="hover:text-emerald-600"
                          >
                            Corporate Website
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-500">
                          April 5, 2025
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/projects"
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-4 inline-block"
                  >
                    View All Projects
                  </Link>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-emerald-50 rounded-lg border border-emerald-100 p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Interested in working together?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  I'm always open to discussing new projects and opportunities.
                  Let's create something amazing together.
                </p>
                <a
                  href="mailto:project.cendekia.v@gmail.com"
                  className="bg-emerald-600 text-white rounded-md px-4 py-2 text-sm inline-flex items-center gap-2 hover:bg-emerald-700 transition-colors w-full justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
