"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Mail, Check } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ConventusChatbot from "../components/ConventusChatBot"

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

}

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { image: "/images/munc1.jpg", title: "CONVENTUS", subtitle: "MUN 2.0 Concluded" },
    { image: "/images/munc3.jpg", title: "DIPLOMACY", subtitle: "Global Solutions Shaped" },
    { image: "/images/munc2.jpg", title: "LEADERSHIP", subtitle: "Tomorrow's Leaders Forged" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-red-900 bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-2xl">{slide.subtitle}</p>
          </div>
        </motion.div>
      ))}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-red-700 bg-opacity-50 p-3 rounded-full"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-red-700 bg-opacity-50 p-3 rounded-full"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  )
}

const CommitteeCard = ({ name, description, image }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-red-700">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  )
}

const CommitteesSection = () => {
  const committees = [
    {
      name: "United Nations Security Council (UNSC)",
      description: "Tackled pressing international security challenges and conflicts through diplomatic negotiations.",
      image: "/images/unsc1.jpg",
    },
    {
      name: "United Nations Commission on Status of Women (UNCSW)",
      description: "Addressed gender equality issues and empowered women through policy recommendations.",
      image: "/images/uncsw1.jpg",
    },
    {
      name: "All India Political Party Meet (AIPPM)",
      description: "Engaged in domestic political debates representing various Indian political parties.",
      image: "/images/aippm1.jpg",
    },
    {
      name: "International Press (IP)",
      description:
        "Documented and reported on committee proceedings, providing critical analysis of diplomatic developments.",
      image: "/images/mungallery (5).jpg",
    },
    {
      name: "United Nations Human Rights Council (UNHRC)",
      description: "Promoted and protected human rights around the world through international cooperation.",
      image: "/images/mungallery (10).jpg",
    },
    {
      name: "United Nations Environment Programme (UNEP)",
      description: "Addressed environmental challenges and promoted sustainable development globally.",
      image: "/images/mungallery (15).jpg",
    },
  ]

  return (
    <div className="bg-red-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-800">MUN 2.0 Committees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <CommitteeCard
              key={index}
              name={committee.name}
              description={committee.description}
              image={committee.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const MediaGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [
    "/images/mungallery (1).jpg",
    "/images/mungallery (2).jpg",
    "/images/mungallery (3).jpg",
    "/images/mungallery (4).jpg",
    "/images/mungallery (5).jpg",
    "/images/mungallery (6).jpg",
    "/images/mungallery (7).jpg",
    "/images/mungallery (8).jpg",
    "/images/mungallery (9).jpg",
    "/images/mungallery (10).jpg",
    "/images/mungallery (11).jpg",
    "/images/mungallery (12).jpg",
    "/images/mungallery (13).jpg",
    "/images/mungallery (14).jpg",
    "/images/mungallery (15).jpg",
    "/images/mungallery (16).jpg",
    "/images/mungallery (17).jpg",
    "/images/mungallery (18).jpg",
    "/images/mungallery (19).jpg",
    "/images/mungallery (20).jpg",
    "/images/mungallery (21).jpg",
    "/images/mungallery (22).jpg",
  ]

  const renderImage = (index, className) => (
    <motion.div
      key={index}
      className={`relative overflow-hidden rounded-lg cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedImage(images[index])}
    >
      <Image
        src={images[index] || "/placeholder.svg"}
        alt={`Gallery image ${index + 1}`}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </motion.div>
  )

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-4">
        {/* First row */}
        {renderImage(0, "col-span-1 row-span-2 h-[400px]")}
        {renderImage(1, "col-span-1 h-[200px]")}
        {renderImage(2, "col-span-1 h-[200px]")}
        {renderImage(3, "col-span-1 row-span-2 h-[400px]")}

        {/* Second row */}
        {renderImage(4, "col-span-1 h-[200px]")}
        {renderImage(5, "col-span-1 h-[200px]")}

        {/* Third row */}
        {renderImage(6, "col-span-1 row-span-2 h-[400px]")}
        {renderImage(7, "col-span-1 h-[200px]")}
        {renderImage(8, "col-span-1 h-[200px]")}
        {renderImage(9, "col-span-1 row-span-2 h-[400px]")}

        {/* Fourth row */}
        {renderImage(10, "col-span-1 h-[200px]")}
        {renderImage(11, "col-span-1 h-[200px]")}

        {/* Fifth row */}
        {renderImage(12, "col-span-1 h-[200px]")}
        {renderImage(13, "col-span-1 h-[200px]")}
        {renderImage(14, "col-span-1 h-[200px]")}
        {renderImage(15, "col-span-1 h-[200px]")}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full h-full max-w-6xl max-h-screen bg-white overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              layoutId={selectedImage}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Selected image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <motion.button
                className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const HighlightsSection = () => {
  const highlights = [
    {
      title: "300+ Delegates",
      description: "From over 30 colleges and universities across the country",
      icon: "👥",
    },
    {
      title: "6 Dynamic Committees",
      description: "Addressing critical global and regional issues",
      icon: "🌍",
    },
    {
      title: "Distinguished Speakers",
      description: "Including diplomats and international relations experts",
      icon: "🎤",
    },
    {
      title: "Cultural Evening",
      description: "Showcasing diverse talents and fostering connections",
      icon: "🎭",
    },
  ]

  return (
    <div className="bg-red-700 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">MUN 2.0 Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-red-100">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-xl mb-4">Thank you to all participants, volunteers, and sponsors!</p>
          <p>Stay tuned for MUN 3.0 coming next year</p>
        </div>
      </div>
    </div>
  )
}

const WinnerCard = ({ images, committee, winners }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 3000) // Change image every 3 seconds
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isHovering, images.length])

  const nextImage = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      rotateY: direction > 0 ? -15 : 15,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
    }),
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className="relative h-64 w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              rotateY: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
            style={{ perspective: "1000px" }}
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Winner from ${committee}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 transition-opacity opacity-0 hover:opacity-100 z-10"
          onClick={prevImage}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 transition-opacity opacity-0 hover:opacity-100 z-10"
          onClick={nextImage}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-4 text-red-700">{committee}</h3>
        <ul className="space-y-2">
          {winners.map((winner, index) => (
            <li key={index} className="text-gray-700">
              {winner}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const WinnersSection = () => (
  <div className="bg-red-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-800">MUN 2.0 Winners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WinnerCard
          images={["/images/unsc1.jpg", "/images/unsc2.jpg", "/images/unsc3.jpg"]}
          committee="UNSC"
          winners={["Best Delegate: Rahul Sharma", "High Commendation: Priya Patel", "Special Mention: Arjun Singh"]}
        />
        <WinnerCard
          images={["/images/uncsw1.jpg", "/images/uncsw2.jpg", "/images/uncsw3.jpg"]}
          committee="UNCSW"
          winners={["Best Delegate: Ananya Desai", "High Commendation: Riya Kapoor", "Special Mention: Neha Gupta"]}
        />
        <WinnerCard
          images={["/images/aippm1.jpg", "/images/aippm2.jpg", "/images/aippm3.jpg"]}
          committee="AIPPM"
          winners={["Best Delegate: Vikram Mehta", "High Commendation: Aditya Kumar", "Special Mention: Kavita Reddy"]}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <WinnerCard
          images={["/images/mungallery (5).jpg", "/images/mungallery (6).jpg", "/images/mungallery (7).jpg"]}
          committee="International Press"
          winners={[
            "Best Journalist: Sanjay Verma",
            "High Commendation: Meera Joshi",
            "Special Mention: Rohan Malhotra",
          ]}
        />
        <WinnerCard
          images={["/images/mungallery (10).jpg", "/images/mungallery (11).jpg", "/images/mungallery (12).jpg"]}
          committee="UNHRC"
          winners={["Best Delegate: Ishaan Khanna", "High Commendation: Zara Sheikh", "Special Mention: Varun Menon"]}
        />
        <WinnerCard
          images={["/images/mungallery (15).jpg", "/images/mungallery (16).jpg", "/images/mungallery (17).jpg"]}
          committee="UNEP"
          winners={[
            "Best Delegate: Nisha Sharma",
            "High Commendation: Karan Bajaj",
            "Special Mention: Tanya Choudhary",
          ]}
        />
      </div>
    </div>
  </div>
)

const TeamMember = ({ name, role, image, bio }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative w-64 h-80 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute w-full h-full backface-hidden">
          <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" className="rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm">{role}</p>
          </div>
        </div>
        <div
          className="absolute w-full h-full backface-hidden bg-red-100 rounded-lg p-4 flex flex-col justify-center items-center text-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm">{bio}</p>
        </div>
      </motion.div>
    </div>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "MUN 2.0 was an incredible experience that enhanced my understanding of global diplomacy and sharpened my negotiation skills.",
      name: "Aisha Khan",
      role: "Delegate, UNSC",
      image: "/images/mungallery (3).jpg",
    },
    {
      quote:
        "The level of debate and the quality of resolutions at MUN 2.0 were outstanding. The organizing committee did an exceptional job.",
      name: "Rajiv Malhotra",
      role: "Faculty Advisor",
      image: "/images/mungallery (8).jpg",
    },
    {
      quote:
        "As a first-time delegate, I was nervous, but the training sessions and supportive environment helped me gain confidence and actively participate.",
      name: "Sneha Patel",
      role: "Delegate, UNCSW",
      image: "/images/mungallery (13).jpg",
    },
  ]

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-800">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-red-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function MUN2Page() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-red-50">
      <Header />
      <HeroCarousel />
      <NewsletterSection />
      <div className="bg-red-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold flex items-center">
                <Mail className="mr-2" size={20} />
                Subscribe to our Newsletter
              </h3>
              <p className="text-sm text-red-100">Stay updated with future MUN events and Conventus Society activities</p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
              <div className="relative flex-grow mr-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full md:w-64 bg-white text-black px-4 py-2 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-8 left-0 text-sm flex items-center text-green-300"
                  >
                    <Check size={16} className="mr-1" /> Subscribed successfully!
                  </motion.div>
                )}
              </div>
              <button type="submit" className="bg-white text-red-800 hover:bg-red-100 px-4 py-2 rounded-md font-medium">
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-4">
            <Image src="/images/newsletter-image.jpg" alt="Newsletter" width={600} height={300} className="rounded-lg" />
          </div>
          <div className="mt-4">
            <a href="/path/to/download.pdf" className="bg-white text-red-800 hover:bg-red-100 px-4 py-2 rounded-md font-medium">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="my-8">
            <Image
              src="/images/mun-main.JPG"
              alt="MUN 2.0 Banner"
              width={1200}
              height={300}
              layout="responsive"
              className="rounded-lg"
            />
          </div>

          <div className="my-12 space-y-4 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold" style={{ color: "#800000" }}>
              Model United Nations
            </h1>
            <h2 className="text-3xl font-semibold text-red-500">2nd Edition</h2>
            <h3 className="text-2xl font-semibold text-red-500">2024-25</h3>

            <div className="mt-8 text-left">
              <p className="text-lg text-gray-700 mb-4">
                The Conventus Society successfully hosted MUN 2.0 - the second edition of NIET's Model United Nations
                conference. Building on the foundation established in our inaugural event, this expanded conference
                featured six dynamic committees, bringing together over 300 delegates from across the country.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                MUN 2.0 provided an immersive diplomatic experience, challenging participants to tackle pressing global
                issues through negotiation, debate, and collaborative problem-solving. With enhanced training sessions,
                distinguished guest speakers, and a comprehensive agenda, this edition elevated the standard of
                collegiate Model UN conferences.
              </p>
              <p className="text-lg text-gray-700">
                The two days of intense diplomacy, strategic alliances, and breakthrough resolutions fostered the
                development of the next generation of global leaders. Both seasoned MUN veterans and first-time
                delegates enhanced their diplomatic skills and expanded their understanding of international relations
                through this platform.
              </p>
            </div>
          </div>
        </div>

        <HighlightsSection />

        <CommitteesSection />

        <WinnersSection />

        <TestimonialsSection />

        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-800">Organizing Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <TeamMember
              name="Mr. Manish Kaushik"
              role="Dean DSW"
              image="/digni_img/Manish Sir.png"
              bio="Provided guidance and administrative support to ensure the success of MUN 2.0."
            />
            <TeamMember
              name="Ms. Kanika Jindal"
              role="Associate Dean DSW"
              image="/digni_img/Kanika Mam.png"
              bio="Coordinated faculty involvement and institutional resources for the conference."
            />
            <TeamMember
              name="Manas Gupta"
              role="Secretary General"
              image="/images/p2.jpg"
              bio="Led the organizing committee and oversaw all aspects of MUN 2.0."
            />
            <TeamMember
              name="Aditree Singh"
              role="Deputy Secretary General"
              image="/images/mungallery (7).jpg"
              bio="Supported the Secretary General and managed committee operations."
            />
            <TeamMember
              name="Tejasv Gupta"
              role="Director General"
              image="/images/mungallery (9).jpg"
              bio="Handled logistics, delegate affairs, and conference coordination."
            />
          </div>
        </div>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-800">Media Gallery</h2>
          <p className="text-center text-gray-700 mb-8">Highlights from MUN 2.0</p>
          <MediaGallery />
        </section>

        <div className="bg-red-700 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Join Us for MUN 3.0</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Building on the success of MUN 2.0, we're excited to announce that preparations for MUN 3.0 are already
              underway. Join us next year for an even more immersive diplomatic experience with new committees and
              challenging agendas.
            </p>
            <motion.button
              className="bg-white text-red-700 font-bold py-3 px-8 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pre-register for Updates
            </motion.button>
            <p className="mt-4 text-sm">Stay connected through our newsletter for early registration opportunities</p>
          </div>
        </div>
      </main>
      <ConventusChatbot />
      <Footer />
    </div>
  )
}
