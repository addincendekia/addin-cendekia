import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Calendar,
  Clock,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ChevronRight,
} from "lucide-react";

export default function ArticlePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
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

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-600">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <Link href="/articles" className="hover:text-emerald-600">
              Articles
            </Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <span className="text-gray-900">
              Modern React Patterns for 2025
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Article */}
          <div className="lg:col-span-2">
            {/* Category and Date */}
            <div className="flex items-center justify-between mb-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">
                Frontend
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>May 10, 2025</span>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>8 min read</span>
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Modern React Patterns for 2025
            </h1>

            {/* Article Excerpt */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed border-l-4 border-emerald-500 pl-4 italic">
              Exploring the latest React patterns and best practices for
              building scalable and maintainable applications in 2025. From
              advanced hooks to server components, discover how to write
              cleaner, more efficient code.
            </p>

            {/* Author */}
            <div className="flex items-center mb-8">
              <Image
                src="/placeholder.svg?height=50&width=50"
                width={50}
                height={50}
                alt="Addin Cendekia"
                className="rounded-full mr-3"
              />
              <div>
                <div className="font-medium">Addin Cendekia</div>
                <div className="text-sm text-gray-500">Software Developer</div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                width={1200}
                height={600}
                alt="Modern React Patterns"
                className="w-full h-auto"
              />
            </div>

            {/* Social Sharing */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="sr-only">Share on Facebook</span>
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <Twitter className="w-4 h-4 text-blue-400" />
                  <span className="sr-only">Share on Twitter</span>
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <Linkedin className="w-4 h-4 text-blue-700" />
                  <span className="sr-only">Share on LinkedIn</span>
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <Copy className="w-4 h-4 text-gray-600" />
                  <span className="sr-only">Copy Link</span>
                </button>
              </div>
              <button className="flex items-center text-sm text-gray-600 hover:text-emerald-600">
                <Bookmark className="w-4 h-4 mr-1" />
                <span>Save for later</span>
              </button>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#introduction"
                    className="text-emerald-600 hover:underline"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#hooks-patterns"
                    className="text-emerald-600 hover:underline"
                  >
                    Advanced Hooks Patterns
                  </a>
                </li>
                <li>
                  <a
                    href="#component-composition"
                    className="text-emerald-600 hover:underline"
                  >
                    Component Composition Strategies
                  </a>
                </li>
                <li>
                  <a
                    href="#state-management"
                    className="text-emerald-600 hover:underline"
                  >
                    Modern State Management
                  </a>
                </li>
                <li>
                  <a
                    href="#server-components"
                    className="text-emerald-600 hover:underline"
                  >
                    React Server Components
                  </a>
                </li>
                <li>
                  <a
                    href="#performance"
                    className="text-emerald-600 hover:underline"
                  >
                    Performance Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#conclusion"
                    className="text-emerald-600 hover:underline"
                  >
                    Conclusion
                  </a>
                </li>
              </ul>
            </div>

            {/* Article Content */}
            <div className="prose prose-emerald max-w-none">
              <h2 id="introduction">Introduction</h2>
              <p>
                React has evolved significantly since its inception, and with
                each passing year, new patterns and best practices emerge. As we
                look ahead to 2025, several modern patterns have become
                essential knowledge for React developers aiming to build
                scalable, maintainable, and performant applications.
              </p>
              <p>
                In this article, we'll explore the most important React patterns
                that are shaping development in 2025. Whether you're building
                complex enterprise applications or sleek consumer products,
                these patterns will help you write cleaner, more efficient code.
              </p>

              <h2 id="hooks-patterns">Advanced Hooks Patterns</h2>
              <p>
                Hooks have revolutionized how we manage state and side effects
                in React components. In 2025, we're seeing increasingly
                sophisticated patterns emerge around hooks usage.
              </p>

              <h3>Custom Hook Composition</h3>
              <p>
                One of the most powerful patterns is composing multiple custom
                hooks to create higher-level abstractions:
              </p>

              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{`// Composing multiple hooks into a higher-level hook
function useUserProfile(userId) {
  const { data: user, isLoading: isUserLoading } = useUser(userId);
  const { data: posts, isLoading: isPostsLoading } = usePosts(userId);
  const { data: activity, isLoading: isActivityLoading } = useActivity(userId);

  return {
    user,
    posts,
    activity,
    isLoading: isUserLoading || isPostsLoading || isActivityLoading
  };
}`}</code>
              </pre>

              <p>
                This pattern allows you to encapsulate complex logic and state
                management while presenting a clean, unified API to components.
              </p>

              <h3>Effect Orchestration</h3>
              <p>
                Managing multiple effects that depend on each other has become
                more elegant with dedicated orchestration patterns:
              </p>

              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{`function useDataFlow(query) {
  const [step, setStep] = useState('idle');
  
  // First effect - start the flow when query changes
  useEffect(() => {
    if (query) {
      setStep('loading');
    }
  }, [query]);
  
  // Second effect - fetch data when in loading state
  useEffect(() => {
    if (step === 'loading') {
      fetchData(query)
        .then(() => setStep('processing'))
        .catch(() => setStep('error'));
    }
  }, [step, query]);
  
  // Third effect - process data when in processing state
  useEffect(() => {
    if (step === 'processing') {
      processData()
        .then(() => setStep('complete'))
        .catch(() => setStep('error'));
    }
  }, [step]);
  
  return { step };
}`}</code>
              </pre>

              <h2 id="component-composition">
                Component Composition Strategies
              </h2>
              <p>
                The way we compose components has evolved significantly. In
                2025, we're seeing more sophisticated composition patterns that
                promote reusability and separation of concerns.
              </p>

              <h3>Compound Components</h3>
              <p>
                Compound components provide a more expressive and flexible API
                for complex components:
              </p>

              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{`// Usage of compound components
<Tabs>
  <Tabs.List>
    <Tabs.Tab>Profile</Tabs.Tab>
    <Tabs.Tab>Settings</Tabs.Tab>
    <Tabs.Tab>Notifications</Tabs.Tab>
  </Tabs.List>
  
  <Tabs.Panels>
    <Tabs.Panel>Profile content here...</Tabs.Panel>
    <Tabs.Panel>Settings content here...</Tabs.Panel>
    <Tabs.Panel>Notifications content here...</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`}</code>
              </pre>

              <p>
                This pattern allows components to share state implicitly while
                giving the consumer complete control over the rendering and
                structure.
              </p>

              <h3>Render Props with TypeScript</h3>
              <p>
                Render props have become more powerful when combined with
                TypeScript's type system:
              </p>

              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{`type DataProviderProps<T> = {
  fetchData: () => Promise<T>;
  children: (props: {
    data: T | null;
    isLoading: boolean;
    error: Error | null;
    refetch: () => void;
  }) => React.ReactNode;
};

function DataProvider<T>({ fetchData, children }: DataProviderProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const fetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetchData();
      setData(result);
      setError(null);
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchData]);
  
  useEffect(() => {
    fetch();
  }, [fetch]);
  
  return children({ data, isLoading, error, refetch: fetch });
}`}</code>
              </pre>

              <h2 id="state-management">Modern State Management</h2>
              <p>
                State management in React has evolved beyond Redux. In 2025,
                we're seeing a more nuanced approach to state management.
              </p>

              <p>
                The modern approach involves categorizing state by its scope and
                purpose, then choosing the appropriate tool:
              </p>

              <ul>
                <li>
                  <strong>UI State</strong>: Use local component state with
                  useState or useReducer
                </li>
                <li>
                  <strong>Server Cache State</strong>: Use React Query, SWR, or
                  Apollo Client
                </li>
                <li>
                  <strong>Form State</strong>: Use libraries like React Hook
                  Form or Formik
                </li>
                <li>
                  <strong>Global UI State</strong>: Use Context API with
                  useReducer, Zustand, or Jotai
                </li>
                <li>
                  <strong>URL State</strong>: Use the URL as a source of truth
                  with React Router
                </li>
              </ul>

              <h2 id="server-components">React Server Components</h2>
              <p>
                React Server Components have matured significantly by 2025,
                enabling a new paradigm of component rendering:
              </p>

              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{`// server-component.jsx
import { db } from '../database';

// This component runs only on the server
export default async function UserProfile({ userId }) {
  const user = await db.users.findUnique({ where: { id: userId } });
  const posts = await db.posts.findMany({ where: { authorId: userId } });
  
  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <ProfileDetails user={user} />
      <PostList posts={posts} />
    </div>
  );
}

// client-component.jsx
'use client';

import { useState } from 'react';

export function PostList({ posts }) {
  const [filter, setFilter] = useState('all');
  
  const filteredPosts = posts.filter(post => {
    if (filter === 'all') return true;
    return post.category === filter;
  });
  
  return (
    <div>
      <FilterButtons onFilterChange={setFilter} activeFilter={filter} />
      {filteredPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}`}</code>
              </pre>

              <h2 id="performance">Performance Optimization</h2>
              <p>
                Performance optimization in React has become more sophisticated
                in 2025, with a focus on:
              </p>

              <h3>Selective Hydration</h3>
              <p>
                Selective hydration allows parts of the page to become
                interactive independently, prioritizing the most important
                interactions:
              </p>

              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{`// Using React's built-in selective hydration
import { lazy } from 'react';

const Comments = lazy(() => import('./Comments'));
const RelatedPosts = lazy(() => import('./RelatedPosts'));

function Article({ content }) {
  return (
    <div>
      <ArticleContent content={content} />
      
      {/* High priority interaction - hydrated first */}
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments />
      </Suspense>
      
      {/* Lower priority - hydrated later */}
      <Suspense fallback={<RelatedPostsSkeleton />}>
        <RelatedPosts />
      </Suspense>
    </div>
  );
}`}</code>
              </pre>

              <h3>Virtualization for Long Lists</h3>
              <p>
                Virtualization has become a standard practice for rendering long
                lists efficiently:
              </p>

              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{`import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualizedList({ items }) {
  const parentRef = useRef(null);
  
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });
  
  return (
    <div ref={parentRef} style={{ height: '500px', overflow: 'auto' }}>
      <div
        style={{
          height: \`\${virtualizer.getTotalSize()}px\`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: \`\${virtualItem.size}px\`,
              transform: \`translateY(\${virtualItem.start}px)\`,
            }}
          >
            {items[virtualItem.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}`}</code>
              </pre>

              <h2 id="conclusion">Conclusion</h2>
              <p>
                As we navigate through 2025, these React patterns represent the
                current state of best practices in the ecosystem. By adopting
                these patterns, you'll be able to build more maintainable,
                performant, and scalable applications.
              </p>
              <p>
                Remember that patterns are tools, not rules. Always consider
                your specific use case and team context when deciding which
                patterns to adopt. The best code is not just technically sound
                but also understandable and maintainable by your team.
              </p>
              <p>
                What patterns are you using in your React applications? Have you
                found other approaches that work well for your team? Share your
                experiences in the comments below!
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <div className="flex items-start">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Addin Cendekia"
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium">Addin Cendekia</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Addin is a software developer with over 6 years of
                    experience specializing in frontend technologies. He has
                    worked on various applications including e-commerce
                    platforms, company profiles, and custom HRIS systems.
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="text-emerald-600 hover:text-emerald-700 text-sm"
                    >
                      <Twitter className="w-4 h-4 inline mr-1" />
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-emerald-600 hover:text-emerald-700 text-sm"
                    >
                      <Linkedin className="w-4 h-4 inline mr-1" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Comments (5)</h3>

              {/* Comment Form */}
              <div className="mb-8">
                <textarea
                  className="w-full border border-gray-200 rounded-lg p-4 mb-3"
                  rows={4}
                  placeholder="Leave a comment..."
                ></textarea>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                  Post Comment
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {/* Comment 1 */}
                <div className="border-b border-gray-100 pb-6">
                  <div className="flex items-center mb-2">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Sarah Johnson"
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-xs text-gray-500">May 12, 2025</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Great article! I've been using compound components a lot
                    lately and they've really improved the flexibility of my
                    component APIs. Looking forward to trying out some of these
                    other patterns.
                  </p>
                </div>

                {/* Comment 2 */}
                <div className="border-b border-gray-100 pb-6">
                  <div className="flex items-center mb-2">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Michael Chen"
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium">Michael Chen</div>
                      <div className="text-xs text-gray-500">May 11, 2025</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    I'm curious about your thoughts on the trade-offs between
                    Zustand and Jotai for global state management. Have you
                    found one to be better suited for certain types of
                    applications?
                  </p>
                </div>
              </div>

              <button className="mt-6 text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                Load More Comments
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {/* Related Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Related Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/articles?category=frontend"
                    className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    Frontend
                  </Link>
                  <Link
                    href="/articles?category=react"
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    React
                  </Link>
                  <Link
                    href="/articles?category=javascript"
                    className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    JavaScript
                  </Link>
                  <Link
                    href="/articles?category=performance"
                    className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    Performance
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-2">
                  Subscribe to Newsletter
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest articles and resources sent straight to your
                  inbox.
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full border border-gray-200 rounded-md px-4 py-2 mb-3"
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white rounded-md px-4 py-2 hover:bg-emerald-700"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Related Articles */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {/* Related Article 1 */}
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 mr-3">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Article thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        <Link
                          href="/articles/optimizing-react-performance"
                          className="hover:text-emerald-600"
                        >
                          Optimizing React Performance: Advanced Techniques
                        </Link>
                      </h4>
                      <div className="text-xs text-gray-500">
                        April 28, 2025
                      </div>
                    </div>
                  </div>

                  {/* Related Article 2 */}
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 mr-3">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Article thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        <Link
                          href="/articles/typescript-react-best-practices"
                          className="hover:text-emerald-600"
                        >
                          TypeScript and React: Best Practices for 2025
                        </Link>
                      </h4>
                      <div className="text-xs text-gray-500">
                        April 15, 2025
                      </div>
                    </div>
                  </div>

                  {/* Related Article 3 */}
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 mr-3">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Article thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        <Link
                          href="/articles/react-server-components-guide"
                          className="hover:text-emerald-600"
                        >
                          A Comprehensive Guide to React Server Components
                        </Link>
                      </h4>
                      <div className="text-xs text-gray-500">
                        March 22, 2025
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/articles"
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-4 inline-block"
                >
                  View All Articles
                </Link>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/articles?tag=hooks"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    Hooks
                  </Link>
                  <Link
                    href="/articles?tag=patterns"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    Patterns
                  </Link>
                  <Link
                    href="/articles?tag=components"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    Components
                  </Link>
                  <Link
                    href="/articles?tag=state-management"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    State Management
                  </Link>
                  <Link
                    href="/articles?tag=server-components"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    Server Components
                  </Link>
                  <Link
                    href="/articles?tag=performance"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    Performance
                  </Link>
                  <Link
                    href="/articles?tag=typescript"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    TypeScript
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-tr from-blue-900 via-emerald-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
          <p className="text-sm mb-8 max-w-xl mx-auto">
            Have an interesting project for me? I'm always open to discussing
            new opportunities and collaborations. Get in touch and let's create
            something amazing together.
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
