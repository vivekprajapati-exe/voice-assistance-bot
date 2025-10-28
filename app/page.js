"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-zinc-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-white">AI Voice Assistant</h1>
        <div className="flex gap-4">
          <Button 
  variant="outline" 
  className="border-zinc-500 text-zinc-100 hover:bg-zinc-800 hover:text-white"
>
  Sign In
</Button>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>
        </div>
      </header>

      {/* MAIN SECTION */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center max-w-3xl"
        >
          <Image
            src="/bot-icon.svg"
            alt="AI Bot Icon"
            width={100}
            height={100}
            className="mb-6 opacity-90"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Your Personal AI Voice Assistant for College Queries
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10">
            Ask anything about your college — from schedules to subjects, fees to faculty — 
            in any language. Instant, intelligent, and always ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Try the Demo
            </Button>
            <Button
  size="lg"
  variant="outline"
  className="border-zinc-500 text-zinc-100 hover:bg-zinc-900 hover:text-white"
>
  Learn More
</Button>
          </div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 border-t border-zinc-800 text-zinc-500">
        <p>© {new Date().getFullYear()} AI Voice Assistance. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
