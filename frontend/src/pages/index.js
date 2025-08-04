import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen bg-gray-50 text-gray-900 flex flex-col`}
    >
      <header className="w-full py-6 px-8 bg-blue-900 text-white flex items-center justify-between shadow">
        <div className="flex items-center gap-4">
          {/* <Image
            src="/ieee-logo.png"
            alt="IEEE DTU Logo"
            width={48}
            height={48}
            priority
          /> */}
          <span className="text-2xl font-bold tracking-tight">IEEE DTU</span>
        </div>
        <nav className="flex gap-8 text-base font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Events</a>
          <a href="#" className="hover:underline">Team</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-900 text-center">Welcome to IEEE DTU</h1>
        <p className="max-w-xl text-lg text-center mb-8">
          IEEE DTU is the official student branch of IEEE at Delhi Technological University. We foster innovation, learning, and collaboration in technology and engineering.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Join Us
          </a>
          <a
            href="#"
            className="bg-white border border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Learn More
          </a>
        </div>
      </main>
      <footer className="w-full py-6 px-8 bg-blue-900 text-white text-center">
        &copy; {new Date().getFullYear()} IEEE DTU. All rights reserved.
      </footer>
    </div>
  );
}