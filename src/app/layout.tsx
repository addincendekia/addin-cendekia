import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Mail } from "lucide-react";
import Link from "next/link";

import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Addin Cendekia - Addin Cendekia Wahid",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {/* Header */}
          <Header className="bg-white border-b border-gray-100" />

          {children}

          {/* Contact Section */}
          <section className="py-16 bg-gradient-to-tr from-blue-900 via-emerald-700 to-emerald-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
              <p className="text-sm mb-8 max-w-xl mx-auto">
                Have an interesting project for me? I&apos;m always open to
                discussing new opportunities and collaborations. Get in touch
                and let&apos;s create something amazing together.
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
                  <h3 className="font-bold text-sm mb-4">ADDIN CENDEKIA</h3>
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
                    <li>project.cendekia.id@gmail.com</li>
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
      </body>
    </html>
  );
}
