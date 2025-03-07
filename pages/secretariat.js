'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Oheader from '@/components/OHeader'
import Footer from '@/components/Footer'
import ConventusChatbot from '@/components/ConventusChatBot'
const SecretariatMember = ({ name, branch }) => (
  <div className="mb-4 text-center">
    <h3 className="text-lg md:text-xl font-semibold text-red-800">{name}</h3>
    <p className="text-sm md:text-base text-gray-600">{branch}</p>
  </div>
)

export default function SecretariatPage() {
  const pageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"])
  
  const leftMembers = [
    { name: "Manas Gupta", branch: "Founder - President" },
    { name: "Pragya Singh", branch: "Secretary General" },
    { name: "Sanskar Bhardwaj", branch: "UDG Web Operations" },
    { name: "Utkarsh Aggarwal", branch: "USG Media" },
    { name: "Ankit Mehra", branch: "UDG Hospitality" },
    { name: "Anshuman Parashar", branch: "UDG Finance" },
  ]
  
  const rightMembers = [
    { name: "Yashraj Ranjan", branch: "Director General" },
    { name: "Ameya Atreya", branch: "USG Delegate Affairs" },
    { name: "Disha Dubey", branch: "USG Social Media" },
    { name: "Ujjawal Sinha", branch: "UDG Design" },
    { name: "Shivanshu Pandey", branch: "USG Marketing & PR" },
    { name: "Apruv Krishna", branch: "UDG Logistics & Operations" },
  ]
  
  return (
    <div ref={pageRef} className="min-h-screen flex flex-col bg-red-50">
      <Oheader />
      
      <motion.div
        style={{ y: headerY }}
        className="fixed top-20 left-0 right-0 z-10 bg-red-50 py-6 md:py-8"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red-800 mb-2">
            SECRETARIAT
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-red-700 mb-1">
            Second Edition
          </h2>
          <h3 className="text-xl md:text-3xl font-semibold text-red-700 mb-3">
            2024-25
          </h3>
          <p className="text-lg md:text-xl text-red-600 mb-3">
            "Leadership is not about being in charge. It is about taking care of those in your charge."
          </p>
          <p className="text-base md:text-lg text-gray-700">
            Meet our dedicated team of individuals who work tirelessly behind the scenes to make every event a success.
          </p>
        </div>
      </motion.div>
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-[40vh] md:mt-[50vh]">
        <div className="relative w-full aspect-video mb-12 md:mb-16">
          <Image
            src="/images/sc1.jpeg"
            alt="Secretariat Group Photo"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-2xl"
          />
        </div>
        
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-red-300"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pr-2 md:pr-4">
                {leftMembers.map((member, index) => (
                  <SecretariatMember key={index} {...member} />
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pl-2 md:pl-4">
                {rightMembers.map((member, index) => (
                  <SecretariatMember key={index} {...member} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ConventusChatbot/>
      </main>
      
      <Footer />
    </div>
  )
}
