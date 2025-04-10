'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8E7] to-[#F5F0FF]">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
              We collaborate to build Artificial Intelligence experiences
            </h1>
            <p className="text-[#2D2D2D] mb-8 max-w-xl">
            We collaborate to build digital experiences that are not only functional but impactful. By combining creativity, strategy, and cutting-edge technology, we design platforms that connect with users, solve real problems, and elevate brands. Every project is a partnership — rooted in trust, innovation, and a shared vision to create meaningful digital solutions.
            </p>
            <button className="bg-[#2D2D2D] text-white px-8 py-4 rounded-full font-medium shadow-md">
              Get started
            </button>
          </div>

          {/* Right Image with Decorations */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5]">
              {/* Circle container with image */}
              <div className="absolute inset-0 rounded-full border-2 border-[#2D2D2D] overflow-hidden">
                <Image 
                  src="/woman.jpg"
                  alt="Professional woman smiling"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Star decoration - top */}
              <div className="absolute -top-6 -right-4 w-10 h-10">
                <svg viewBox="0 0 24 24" fill="#2D2D2D" className="w-full h-full">
                  <path d="M12 0L15.708 8.292L24 12L15.708 15.708L12 24L8.292 15.708L0 12L8.292 8.292L12 0Z" />
                </svg>
              </div>
              
              {/* Star decoration - bottom */}
              <div className="absolute -bottom-4 -right-4 w-8 h-8">
                <svg viewBox="0 0 24 24" fill="#2D2D2D" className="w-full h-full">
                  <path d="M12 0.5L14 14L24 12L14 10L12 0.5Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Glass Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="glass p-6 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.25L8.73 17.1C7.09529 15.6188 5.70414 13.9236 4.6025 12.06C3.5075 10.1825 2.96 8.39 2.96 6.685C2.96 5.32 3.41 4.185 4.31 3.28C5.21 2.375 6.34 1.9225 7.7 1.9225C8.52 1.9225 9.285 2.1075 9.995 2.4775C10.705 2.8475 11.3 3.36 11.775 4.015C12.33 3.36 12.9675 2.8475 13.6875 2.4775C14.4075 2.1075 15.18 1.9225 16.005 1.9225C17.365 1.9225 18.495 2.375 19.395 3.28C20.295 4.185 20.745 5.32 20.745 6.685C20.745 8.39 20.1975 10.1825 19.1025 12.06C18.0075 13.9375 16.615 15.6325 14.9975 17.1L13.705 18.25H10Z" fill="#9333EA"/>
              </svg>
            </div>
            <p className="text-gray-700 text-center">Transforming concepts into powerful, user-centric digital solutions.</p>
          </div>
          
          {/* Card 2 */}
          <div className="glass p-6 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.25L8.73 17.1C7.09529 15.6188 5.70414 13.9236 4.6025 12.06C3.5075 10.1825 2.96 8.39 2.96 6.685C2.96 5.32 3.41 4.185 4.31 3.28C5.21 2.375 6.34 1.9225 7.7 1.9225C8.52 1.9225 9.285 2.1075 9.995 2.4775C10.705 2.8475 11.3 3.36 11.775 4.015C12.33 3.36 12.9675 2.8475 13.6875 2.4775C14.4075 2.1075 15.18 1.9225 16.005 1.9225C17.365 1.9225 18.495 2.375 19.395 3.28C20.295 4.185 20.745 5.32 20.745 6.685C20.745 8.39 20.1975 10.1825 19.1025 12.06C18.0075 13.9375 16.615 15.6325 14.9975 17.1L13.705 18.25H10Z" fill="#EAB308"/>
              </svg>
            </div>
            <p className="text-gray-700 text-center">Every pixel and line of code crafted to deliver value and engagement.</p>
          </div>
          
          {/* Card 3 */}
          <div className="glass p-6 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.25L8.73 17.1C7.09529 15.6188 5.70414 13.9236 4.6025 12.06C3.5075 10.1825 2.96 8.39 2.96 6.685C2.96 5.32 3.41 4.185 4.31 3.28C5.21 2.375 6.34 1.9225 7.7 1.9225C8.52 1.9225 9.285 2.1075 9.995 2.4775C10.705 2.8475 11.3 3.36 11.775 4.015C12.33 3.36 12.9675 2.8475 13.6875 2.4775C14.4075 2.1075 15.18 1.9225 16.005 1.9225C17.365 1.9225 18.495 2.375 19.395 3.28C20.295 4.185 20.745 5.32 20.745 6.685C20.745 8.39 20.1975 10.1825 19.1025 12.06C18.0075 13.9375 16.615 15.6325 14.9975 17.1L13.705 18.25H10Z" fill="#3B82F6"/>
              </svg>
            </div>
            <p className="text-gray-700 text-center">Scalable, secure, and smart — tailored for growth in a digital world.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 